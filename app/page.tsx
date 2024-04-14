"use client";

import Hero from "@/components/Hero";
import Course from "@/components/Course";
import MyLayout from "@/components/MyLayout";
import { useFirebase } from "@/lib/Firebase/useFirebase";
import { CourseProps } from "@/types/index";

export default function Home() {
  const { coursesData, userData } = useFirebase();

  return (
    <MyLayout>
      <main className="w-full flex flex-col gap-12 px-0 md:px-6 lg:px-12 mb-16">
        <Hero />
        <div className="flex flex-col gap-6 px-6 md:px-0">
          <h1 className="font-bold"> Disciplinas iniciadas </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
            {coursesData?.modules.map((module: CourseProps) =>
              module.inSemestre === userData?.semestre && module?.progress > 0 ? (
                <Course
                  key={module.id}
                  singleCourse={{
                    domain: coursesData?.name,
                    title: module.title,
                    progress: module.progress,
                    id: module.id
                  }}
                />
              ) : null
            )}
          </div>
        </div>
      </main>
    </MyLayout>
  );
}
