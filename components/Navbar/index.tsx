"use client";

import { SidebarProps } from "@/types/index";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Bell, Menu } from "lucide-react";
import Image from "next/image";
import { Popover } from "../ui/popover";
import PopupNotifications from "./PopupNotifications";
import { User } from "./User";

const Navbar = ({ open, setOpen }: SidebarProps) => {

  return (
    <nav className="w-full h-[10vh] border flex justify-between items-center px-6 md:px-16 py-2 shadow-md">
      <div className="flex items-center gap-4">
        <Menu className="flex md:hidden cursor-pointer" onClick={() => setOpen(!open)} />
        <div className="w-[175px]">
          <Image
            src={"/assets/logo.png"}
            width={320}
            height={120}
            alt="Logo image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger className="hover-btn-effect">
            <Bell />
          </PopoverTrigger>
          <PopupNotifications />
        </Popover>
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
