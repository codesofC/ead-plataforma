import { MessageProps } from "@/types/index";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";
import { Button } from "./ui/button";

const MessagesBox = (message: MessageProps) => {
  return(
    <div className="w-full flex flex-col gap-6 px-2 md:px-4 lg:px-8 xl:px-16 py-12 border">
      <h1 className="text-lg font-bold"> {message.title} </h1>
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Avatar className="bg-principal text-white flex items-center justify-center rounded-full p-3">
              <AvatarFallback>
                {message.author.firstName.charAt(0).toUpperCase()}
                {message.author.lastName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold">
                {" "}
                {message.author.firstName} {message.author.lastName}{" "}
              </span>
              <span className="text-[12px] font-extralight">
                {" "}
                {message.title}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="text-[12px]">
              {message.module.map(module => (
                <div key={module}>
                    <span className="font-bold">Disciplina: </span>
                    <span className="font-extralight">{ module }</span>
                </div>
              ))}
            </div>
            <p>
                {message.content}
            </p>
            <Button variant={"outline"} className="self-end"> Responder </Button>
        </div>
      </div>
    </div>
  )
};

export default MessagesBox;
