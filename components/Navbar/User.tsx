"use client";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PopUser } from "./PopUser";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { useFirebase } from "@/lib/Firebase/useFirebase";

export function User() {

  const { userData } = useFirebase()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar
          className="relative p-6 bg-principal text-white cursor-pointer"
        >
          <AvatarFallback className="font-bold w-full h-full">
            {userData?.firstName.charAt(0)}{userData?.lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopUser />
    </Popover>
  );
}
