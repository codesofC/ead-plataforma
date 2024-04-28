"use client";

import Course from "@/components/Course";
import Hero from "@/components/Hero";
import MyLayout from "@/components/MyLayout";
import { useFirebase } from "@/lib/Firebase/useFirebase";
import { CourseProps } from "@/types/index";
import { useRouter } from "next/navigation";

export default function Home() {
  const { coursesData, userData } = useFirebase();

  const router = useRouter();

  return (
    <MyLayout>
      <main className="w-full flex flex-col gap-12 px-0 md:px-6 lg:px-12 mb-16">
        <Hero />
        <div className="w-full flex flex-col gap-6 px-6 md:px-0">
          <h1 className="font-bold"> Disciplinas iniciadas </h1>
          <div className="w-full">
            {userData?.modules ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
                {userData?.modules.map((module: CourseProps) =>
                  module?.progress > 0 ? (
                    <Course
                      key={module.id}
                      singleCourse={{
                        domain: coursesData?.name,
                        title: module.title,
                        progress: module.progress,
                        id: module.id,
                      }}
                    />
                  ) : null
                )}
              </div>
            ) : (
              <div className="w-full py-8 flex flex-col gap-2 items-center justify-center">
                <p className="font-extralight text-sm">
                  {" "}
                  Não há curso iniciado. Comece sua jornada!
                </p>
                <button 
                  className="mt-2 px-4 py-2 rounded-md text-white bg-principal"
                  onClick={() => router.push("/courses")}
                >
                  Ir para cursos{" "}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </MyLayout>
  );
}
