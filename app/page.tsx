import Hero from "@/components/Hero";
import Course from "@/components/Course";
import MyLayout from "@/components/MyLayout";

export default function Home() {
  return (
    <MyLayout>
      <main className="w-full flex flex-col gap-12 px-0 md:px-6 lg:px-12">
        <Hero />
        <div className="flex flex-col gap-6 px-6 md:px-0">
          <h1 className="font-bold"> Disciplinas iniciadas </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
            <Course
              singleCourse={{
                title: "Banco de dados",
                domain: "Analise e Desenvolvimento de Sistemas",
                percent: 20,
                linkImage: "",
                professor: "",
              }}
            />
            <Course
              singleCourse={{
                title: "Banco de dados",
                domain: "Analise e Desenvolvimento de Sistemas",
                percent: 20,
              }}
            />
            <Course
              singleCourse={{
                title: "Banco de dados",
                domain: "Analise e Desenvolvimento de Sistemas",
                percent: 20,
              }}
            />
            <Course
              singleCourse={{
                title: "Banco de dados",
                domain: "Analise e Desenvolvimento de Sistemas",
                percent: 20,
              }}
            />
            <Course
              singleCourse={{
                title: "Banco de dados",
                domain: "Analise e Desenvolvimento de Sistemas",
                percent: 20,
              }}
            />
          </div>
        </div>
      </main>
    </MyLayout>
  );
}
