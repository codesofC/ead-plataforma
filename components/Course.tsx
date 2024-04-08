"use client"

import { CourseProps } from "@/types/index";
import { BookOpenCheck, Tag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ItemProps = {
  singleCourse: CourseProps;
};

const Course = ({ singleCourse }: ItemProps) => {

  const router = useRouter()

  const { domain, percent, title, linkImage, professor } = singleCourse;

  return (
    <div 
      className="overflow-hidden border rounded-xl shadow-md hover:shadow-xl cursor-pointer"
      onClick={() => router.push(`/courses/${520}`)}  
    >
      {linkImage && (
        <div className="w-full h-[20vh] overflow-hidden">
          <Image
            src={linkImage}
            width={500}
            height={250}
            alt="course"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={`flex flex-col ${linkImage ? 'gap-6' : 'gap-12'} p-4`}>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold"> {title} </h1>
          <span className="flex items-center gap-1 text-sm">
            <Tag size={14} />
            {domain}
          </span>
          {professor && <span className="text-[12px]"> Prof. {professor} </span>}
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2 flex flex-col gap-1">
            <div className="relative w-full h-1 bg-gray-400 rounded-full overflow-hidden">
              <div className={`bg-green-700 w-[${percent}%] h-full`} />
            </div>
            <span className="text-sm"> Progresso: {percent}% </span>
          </div>
          <div title="Grade de notas">
            <BookOpenCheck />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;