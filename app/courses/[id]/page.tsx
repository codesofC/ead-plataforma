"use client";

import HeroCourse from "@/components/HeroCourse";
import LearningUnit from "@/components/LearningUnit";
import Loader from "@/components/Loader";
import NavCourse from "@/components/NavCourse";
import AccordionUAs from "@/components/UAS";
import { useFirebase } from "@/lib/Firebase/useFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Id = ({ params }: { params: { [key: string]: string } }) => {
  const { id } = params;

  const router = useRouter();

  const {userData, setUserSession, userSession, auth } = useFirebase();

  const courseFind = userData?.modules.find(
    (item: any) => item.id.toString() === id.toString()
  );

  useEffect(() => {
    let list = onAuthStateChanged(auth, (user) => {
      user ? setUserSession(user) : router.push("/login");
    });

    return () => {
      list();
    }

  }, []);

  return userSession ? (
    <main className="w-full mb-32">
      <NavCourse title={courseFind?.title} />
      <HeroCourse progress={courseFind?.progress} image={courseFind?.image} />
      <div className="flex flex-col gap-6 mt-12 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="font-bold text-xl"> Seu Conteúdo </h1>
        <div className="flex flex-col gap-6">
          {courseFind &&
            courseFind?.content.initial.map((item: any, index: number) => (
              <LearningUnit
                key={index}
                image="https://www.up.edu.br/wp-content/uploads/2022/11/analise_e_desenvolvimento_de_sistemas.webp"
                {...item}
              />
            ))}
        </div>
        <AccordionUAs units={courseFind?.content.learningUnit} />
      </div>
    </main>
  ) : (
    <Loader />
  );
};

export default Id;
