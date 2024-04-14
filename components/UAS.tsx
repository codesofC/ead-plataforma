import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LearningUnitProps } from "@/types/index";
import LearningUnit from "./LearningUnit";

type AccordionUAsProps = {
  units: LearningUnitProps[];
};

const AccordionUAs = ({ units }: AccordionUAsProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full py-4 border-2 bg-gray-50 rounded-md"
    >
      <AccordionItem
        value="item-1"
        className="flex flex-col gap-6 px-2 md:px-6"
      >
        <AccordionTrigger className="lg:text-lg font-bold no-underline">
          Aulas - Unidades de Aprendizagem
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6">
          {units.map((unit, index: number) => (
            <LearningUnit
              key={index}
              image="https://esr.rnp.br/wp-content/uploads/2021/03/administrac%CC%A7a%CC%83o-de-banco-de-dados-o-guia-completo.png"
              {...unit}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionUAs;
