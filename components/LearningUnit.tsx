import { CourseProps, LearningUnitProps } from "@/types/index";
import { CalendarClock, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const LearningUnit = ({
  linkImage,
  percent,
  title,
  term,
}: LearningUnitProps) => {

  return (
    <div className="relative w-full flex items-center justify-between px-8 py-4 cursor-pointer group shadow-sm hover:shadow-md rounded-md border overflow-hidden">
      <div className="w-2 h-full absolute left-0 top-0 bg-principal" />
      <div className="flex items-center gap-2">
        {linkImage ? (
          <div className="w-[75px] lg:w-[120px] h-[75px] lg:h-[120px]">
            <Image
              src={linkImage}
              width={500}
              height={500}
              alt="UA imagem"
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-6 justify-between">
          <h1 className="text-sm sm:text-md lg:text-lg font-semibold">
            {" "}
            {title}{" "}
          </h1>
          {percent ? (
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="w-[150px] h-1 bg-gray-400 rounded-full overflow-hidden">
                <div className={`h-full w-[10%] bg-green-700`} />
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <CalendarClock size={18} color={"gray"} />
                <div className="text-[12px] sm:text-sm font-extralight">
                  <span className="font-bold">Prazo: </span>
                  10/04/2024 - 23:59
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <input
        type={"radio"}
        className="relative hidden lg:flex group-hover:hidden"
      />
      <Button className="items-center gap-1 hidden bg-principal text-white text-sm lg:text-lg py-4 px-2 lg:py-8 lg:px-6 lg:group-hover:flex">
        Iniciar
        <ChevronRight size={18} />
      </Button>
      <div className="p-2 rounded-full bg-principal lg:hidden">
        <ChevronRight size={16} color={"white"} />
      </div>
    </div>
  );
};

export default LearningUnit;
