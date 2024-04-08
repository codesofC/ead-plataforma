import HeroCourse from "@/components/HeroCourse";
import LearningUnit from "@/components/LearningUnit";
import NavCourse from "@/components/NavCourse";
import AccordionUAs from "@/components/UAS";

const Id = ({ params }: { params: { [key: string]: string } }) => {
  const { id } = params;

  return (
    <main className="w-full mb-32">
      <NavCourse title="Banco de Dados" />
      <HeroCourse percent={20} />
      <div className="flex flex-col gap-6 mt-12 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="font-bold text-xl"> Seu Conteúdo </h1>
        <div className="flex flex-col gap-6">
          <LearningUnit
            linkImage="https://www.up.edu.br/wp-content/uploads/2022/11/analise_e_desenvolvimento_de_sistemas.webp"
            title="Comece por aqui a jornada da sua disciplina"
          />
          <LearningUnit
            linkImage="https://s2-g1.glbimg.com/-9SG9Zq4RM0WEwxyuAGSjQ7A660=/0x0:1400x788/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/b/b/dOW43BSqGMXZNMWzWxHw/destacada-1400x788-sis-0421.png"
            title="Mural de interação"
          />
          <LearningUnit
            linkImage="https://uploads-ssl.webflow.com/5f7676da8fbb22c6046e9992/6115a1e1978a9779bb56ef55_conferenciaWEB.png"
            title="Webconferências"
          />
        </div>
        <AccordionUAs />
      </div>
    </main>
  );
};

export default Id;
