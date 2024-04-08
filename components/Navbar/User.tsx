"use client";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PopUser } from "./PopUser";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";

export function User() {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar
          className="relative p-6 bg-red-700 text-white cursor-pointer"
        >
          <AvatarFallback className="font-bold w-full h-full">
            JI
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopUser />
    </Popover>
  );
}
