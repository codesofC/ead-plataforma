"use client";

import { MessageProps } from "@/types/index";
import { AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";
import { Avatar } from "./ui/avatar";
import { Checkbox } from "./ui/checkbox";



const months = ['jan', 'fev', 'mar', 'abr', 'maio', 'jun', 'jul', 'aug', 'sept', 'out', 'nov', 'dec']

type MessageItem = {
  message: MessageProps, 
  handleMessage: (message: MessageProps) => void
}

const MessageItem = ({message, handleMessage}: MessageItem ) => {
  return (
    <div 
      className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 px-2 md:px-4 py-2"
      onClick={() => handleMessage(message)}
    >
      <Checkbox id={message.title} className="accent-blue-600" />
      <div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Avatar className="bg-principal text-white flex items-center justify-center p-5">
              <AvatarFallback>
                {message.author.firstName.charAt(0).toUpperCase()}
                {message.author.lastName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="font-extralight"> {message.author.firstName} {message.author.lastName} </span>
                <span className="text-[12px] font-extralight"> {message.title} </span>
            </div>
          </div>
          <span className="text-[12px] font-bold"> {message.date.getDate()}/{months[message.date.getMonth()]} </span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <p className="line-clamp-1 text-[12px]"> {message.content} </p>
            <span className="text-sm font-bold p-1 bg-gray-50"> {message.module[0]} </span>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
