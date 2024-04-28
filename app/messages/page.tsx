'use client'

import { useState } from "react";
import MessageItem from "@/components/MessageItem";
import MyLayout from "@/components/MyLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, MessagesSquare, Search } from "lucide-react";
import React from "react";
import { MessageProps } from "@/types/index";
import MessagesBox from "@/components/MessagesBox";

const messages = [
  {
    id: 1,
    title: "Algorithmos de Ordenação - Aula",
    author: {
      firstName: "Nelson",
      lastName: "da Silva"
    },
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    date: new Date(),
    module: ["Estrutura de Dados", "Banco de dados"],
  },
  {
    id: 2,
    title: "Algorithmos de Ordenação - Aula",
    author: {
      firstName: "Donaldo Luís",
      lastName: "Fereira"
    },
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    date: new Date(),
    module: ["Estrutura de Dados"],
  },
  {
    id: 3,
    title: "Algorithmos de Ordenação - Aula",
    author: {
      firstName: "Ronaldo",
      lastName: "da Silva"
    },
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    date: new Date(),
    module: ["Estrutura de Dados"],
  },
  {
    id: 4,
    title: "Algorithmos de Ordenação - Aula",
    author: {
      firstName: "Gabriel",
      lastName: "Balbosa"
    },
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    date: new Date(),
    module: ["Estrutura de Dados"],
  },
  {
    id: 5,
    title: "Algorithmos de Ordenação - Aula",
    author: {
      firstName: "João Carlos",
      lastName: "da Silva"
    },
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    date: new Date(),
    module: ["Estrutura de Dados"],
  }
];
const Message = () => {

  const [messageSelected, setMessageSelected] = useState<MessageProps | null>()


  const handleMessage = (message: MessageProps) => {
      setMessageSelected(message)
  }

  return (
    <MyLayout>
      <main className="w-full flex h-[90vh] overflow-hidden">
        <div className="hidden md:flex flex-col gap-6 flex-[.2] border h-full py-6">
          <div className="flex justify-between gap-2 items-center px-2 md:px-4 mt-6">
            <Button className="flex gap-1 rounded-none py-8 px-3 bg-principal text-white">
              <Mail color="white" size={24} />
              Nova mensagem
            </Button>
            <Search size={24} className="cursor-pointer" />
          </div>
          <div className="flex flex-col divide-y-2">
            <h2 className="font-bold px-2 md:px-4 py-2">Mensagens {`(${messages.length})`}</h2>
            <div className="flex gap-1 px-2 md:px-4 py-2 items-center">
              <Checkbox id="all" />
              <Label htmlFor="all" className="font-semibold">
                Selecionar todas
              </Label>
            </div>
            <div className="flex flex-col divide-y-2 overflow-y-auto">
              {messages.map(message => (
                <MessageItem message={message} handleMessage={handleMessage} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 md:flex-[.8]">
          {messageSelected ? <MessagesBox {...messageSelected} /> : (
            <div className="w-full flex flex-col gap-2 items-center justify-center h-full">
                <MessagesSquare size={80} className="opacity-50" />
                Não mensagem
            </div>
          )}
        </div>
      </main>
    </MyLayout>
  );
};

export default Message;
