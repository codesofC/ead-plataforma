"use client";

import Graph from "@/components/Graph";
import MyLayout from "@/components/MyLayout";
import { useFirebase } from "@/lib/Firebase/useFirebase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

const Notes = () => {
  const { userData } = useFirebase();

  return (
    <MyLayout>
      <main className="w-full flex flex-col gap-12 px-4 md:px-6 lg:px-12 my-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-lg lg:text-xl font-bold">Minhas notas</h1>
          <div className="w-full flex flex-col gap-4">
            {userData?.notes ? (
              userData.notes.map((notes: any, index: number) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full border rounded-md bg-gray-50 py-4"
                >
                  <AccordionItem
                    value={index.toString()}
                    className="flex flex-col"
                  >
                    <AccordionTrigger className="flex py-2 lg:text-lg font-bold no-underline px-2 md:px-6">
                      Semestre {index + 1}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-6 px-2 md:px-6">
                      {notes.semestre.map((noteCourse: any, _i: number) => (
                        <div
                          key={_i}
                          className="flex gap-2 justify-between items-center"
                        >
                          <span className="font-semibold">
                            {noteCourse.module}
                          </span>
                          <span className="p-2 shadow-inner bg-white font-bold rounded-sm border">
                            {noteCourse.note}
                          </span>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))
            ) : (
              <div className="text-center">Nenhuma nota disponível</div>
            )}
          </div>
          {userData?.notes && (
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-lg lg:text-xl font-bold"> Desempenho: </h1>
              <div className="relative w-full flex items-center justify-center">
                <Graph />
              </div>
            </div>
          )}
        </div>
      </main>
    </MyLayout>
  );
};

export default Notes;
