import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import LearningUnit from "./LearningUnit";

const AccordionUAs = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full py-4 border-2 bg-gray-50 rounded-md"
    >
      <AccordionItem value="item-1" className="flex flex-col gap-6 px-2 md:px-6">
        <AccordionTrigger className="lg:text-lg font-bold no-underline">
           Aulas - Unidades de Aprendizagem
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6">
          <LearningUnit
            linkImage="https://esr.rnp.br/wp-content/uploads/2021/03/administrac%CC%A7a%CC%83o-de-banco-de-dados-o-guia-completo.png"
            percent={55}
            title="Conceitos basicos de banco de dados"
            term={new Date("10/04/2024")}
          />
          <LearningUnit
            linkImage="https://esr.rnp.br/wp-content/uploads/2021/03/administrac%CC%A7a%CC%83o-de-banco-de-dados-o-guia-completo.png"
            percent={55}
            title="Conceitos basicos de banco de dados"
            term={new Date("10/04/2024")}
          />
          <LearningUnit
            linkImage="https://esr.rnp.br/wp-content/uploads/2021/03/administrac%CC%A7a%CC%83o-de-banco-de-dados-o-guia-completo.png"
            percent={55}
            title="Conceitos basicos de banco de dados"
            term={new Date("10/04/2024")}
          />
          <LearningUnit
            linkImage="https://esr.rnp.br/wp-content/uploads/2021/03/administrac%CC%A7a%CC%83o-de-banco-de-dados-o-guia-completo.png"
            percent={55}
            title="Conceitos basicos de banco de dados"
            term={new Date("10/04/2024")}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionUAs;
