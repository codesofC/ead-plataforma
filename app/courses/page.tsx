"use client";

import { Search } from "lucide-react";
import Course from "@/components/Course";
import { FilterComponent } from "@/components/FilterComponent";
import MyLayout from "@/components/MyLayout";
import { useFirebase } from "@/lib/Firebase/useFirebase";
import { CourseProps } from "@/types/index";

const Courses = () => {

  const { coursesData, userData } = useFirebase()
  
  return (
    <MyLayout>
      <main className="px-6 md:px-8 lg:px-12 py-6 bg-gray-50 min-h-[89vh]">
        <h1 className="text-3xl font-bold px-4 py-4 bg-white"> Cursos </h1>
        <div className="flex flex-col lg:flex-row gap-y-4 lg:justify-between items-center px-6 py-4 bg-gray-100 shadow-inner">
          <div className="flex items-center gap-1 px-4 rounded-md bg-white border w-full lg:w-[320px]">
            <Search size={18} color={"gray"} />
            <input
              type="text"
              placeholder="Pesquisar"
              className="outline-none px-1 py-2 text-lg bg-transparent"
            />
          </div>

          <div className="w-full md:w-auto">
            <FilterComponent />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          <h2 className="text-xl font-semibold uppercase"> Em andamento </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {coursesData?.modules.map((module: CourseProps) =>
              module.inSemestre === userData?.semestre ? (
                <Course
                  key={module.id}
                  singleCourse={{
                    id: module.id,
                    domain: coursesData?.name,
                    title: module.title,
                    progress: module.progress,
                    teacher: module.teacher,
                    image: module.image
                  }}
                />
              ) : null
            )}
          </div>
        </div>
      </main>
    </MyLayout>
  );
};

export default Courses;
