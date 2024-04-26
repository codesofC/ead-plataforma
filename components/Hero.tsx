"use client";

import { useFirebase } from "@/lib/Firebase/useFirebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const { userData, coursesData } = useFirebase();

  const router = useRouter()

  return (
    <section className="relative w-full h-auto lg:h-[30vh] flex flex-col lg:flex-row gap-6 justify-between border overflow-hidden rounded-bl-xl rounded-br-xl shadow-sm bg-gray-100 px-6 pb-6 lg:pb-0">
      <div className="flex gap-12">
        <div className="items-center justify-center hidden md:flex lg:hidden xl:flex">
          <Image
            src={"/assets/st2.png"}
            width={920}
            height={520}
            alt="Aluno"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-12 mt-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold"> Olá {userData?.firstName}👋🏾</h3>
            <p className="font-extralight"> Seja bem-vindo!</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 px-2 py-4 bg-white rounded-full shadow-md">
                <Image
                  src={"/assets/Graduation-cap.png"}
                  width={500}
                  height={250}
                  alt="cap"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600"> Semestre </span>
                <span className="font-bold">
                  {" "}
                  {userData?.semestre}/{coursesData?.totalSemestre}{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 px-2 py-4 bg-white rounded-full shadow-md">
                <Image
                  src={"/assets/gold-medal.webp"}
                  width={500}
                  height={250}
                  alt="cap"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600"> Modulos </span>
                <span className="font-bold">
                  {" "}
                  {(userData?.semestre - 1) * 4}/{coursesData?.totalModules}{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 px-2 py-4 bg-white rounded-full shadow-md">
                <Image
                  src={"/assets/book.png"}
                  width={500}
                  height={250}
                  alt="cap"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-600"> UAs </span>
                <span className="font-bold">
                  {" "}
                  {userData?.semestre * 4 - 2}/{coursesData?.totalClasses}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-4 hidden lg:flex gap-2 md:gap-4 items-center md:justify-center">
        <div className="relative flex max-sm:flex-col gap-2 items-end cursor-pointer hover:scale-105 transition-transform" onClick={() => router.push("/notes")}>
          <div className="size-8">
            <Image
              src={"/assets/stats.png"}
              width={320}
              height={250}
              alt="stats"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="">
              {" "}
              Minhas notas{" "}
            </span>{" "}
          </div>
        </div>
        <div className=" relative flex max-sm:flex-col gap-2 items-end cursor-pointer hover:scale-105 transition-transform" onClick={() => router.push("/courses")}>
          <div className="size-8">
            <Image
              src={"/assets/object.png"}
              width={320}
              height={250}
              alt="stats"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="">
              {" "}
              Meus cursos{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
