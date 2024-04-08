import { BookOpenCheck, HeartHandshake, Mail, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroCourse = ({ percent }: { percent: number}) => {
  const icons = [
    {
      title: "Grade de notas",
      icon: <BookOpenCheck size={28} />,
    },
    {
      title: "Grupos",
      icon: <Users size={28} />,
    },
    {
      title: "Mensagens",
      icon: <Mail size={28} />,
    },
    {
      title: "Apoio acadêmico",
      icon: <HeartHandshake size={28} />,
    },
  ];

  return (
    <section className="w-full h-[30vh] grid grid-cols-1 md:grid-cols-2 border bg-gray-50 overflow-hidden">
      <div className="flex flex-col gap-12 py-12 px-6 lg:px-12 items-center md:items-start">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex gap-4 items-center">
            {icons.map((item, index) => (
              <div key={index} title={item.title} className="cursor-pointer">
                {item.icon}
              </div>
            ))}
          </div>
          <p className="font-semibold">
            Que bom de ter ver aqui. O que vamos estudar hoje?
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border bg-white">
           <span className="text-sm text-gray-500">Progresso da disciplina</span> 
           <p>
                <span className="text-2xl text-green-700 font-semibold">{ percent }%</span>
                <span className="text-sm text-gray-500"> concluida</span>
           </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Image 
            src={'https://hermes.digitalinnovation.one/articles/cover/5b900809-4057-4edf-ace1-92a4464c6075.png'}
            width={920}
            height={580}
            alt={'course'}
            className='w-full h-full object-cover'
        />
      </div>
    </section>
  );
};

export default HeroCourse;
