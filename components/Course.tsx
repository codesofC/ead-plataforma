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

  const { domain, progress, title, image, teacher, id } = singleCourse;

  let progressWidth = 'w-['+progress.toString()+'%]'

  return (
    <div 
      className="overflow-hidden border rounded-xl shadow-md hover:shadow-xl cursor-pointer"
      onClick={() => router.push(`/courses/${id}`)}  
    >
      {image && (
        <div className="w-full h-[20vh] overflow-hidden">
          <Image
            src={image}
            width={500}
            height={250}
            alt="course"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={`flex flex-col ${image ? 'gap-6' : 'gap-12'} p-4`}>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold"> {title} </h1>
          <span className="flex items-center gap-1 text-sm">
            <Tag size={14} />
            {domain}
          </span>
          {teacher && <span className="text-[12px]"> Prof. {teacher} </span>}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="relative w-1/2 flex flex-col gap-1">
            <div className="relative flex items-start justify-start w-full h-1 bg-gray-400 rounded-full overflow-hidden">
              <div className={`flex bg-green-700 h-full`} style={{width: progress.toString()+'%'}}>
                
              </div>
            </div>
            <span className="text-sm"> Progresso: {progress}% </span>
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
