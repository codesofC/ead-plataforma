import { PopoverContent } from "@radix-ui/react-popover";
import { Mail } from "lucide-react";
import React from "react";
import Popup from "./Popup";

const PopupNotifications = () => {
  return (
    <Popup>
      <div className="flex flex-col">
        <div className="sticky -top-4 left-0 flex gap-2 justify-between items-center bg-white py-4">
          <h4 className="font-semibold text-sm"> Notificações </h4>
          <span className="font-extralight text-sm text-blue-500 cursor-pointer hover:underline">
            {" "}
            Marcar tudo como lido{" "}
          </span>
        </div>

        <ul className="flex flex-col">
          <li className="flex items-center gap-4 cursor-pointer border-b hover:bg-gray-100 p-4">
            <div className="p-2 bg-gray-50 rounded-full">
              <Mail />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal"> Você tem uma nova mensagem </p>
              <h3 className="font-extralight"> Agendamento de provas </h3>
              <span className="text-[12px] font-extralight">Hoje - 13:40 </span>
            </div>
          </li>
          <li className="flex items-center gap-4 cursor-pointer border-b hover:bg-gray-100 p-4">
            <div className="p-2 bg-gray-50 rounded-full">
              <Mail />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal"> Você tem uma nova mensagem </p>
              <h3 className="font-extralight"> Agendamento de provas </h3>
              <span className="text-[12px] font-extralight">Hoje - 13:40 </span>
            </div>
          </li>
          <li className="flex items-center gap-4 cursor-pointer border-b hover:bg-gray-100 p-4">
            <div className="p-2 bg-gray-50 rounded-full">
              <Mail />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal"> Você tem uma nova mensagem </p>
              <h3 className="font-extralight"> Agendamento de provas </h3>
              <span className="text-[12px] font-extralight">Hoje - 13:40 </span>
            </div>
          </li>
          <li className="flex items-center gap-4 cursor-pointer border-b hover:bg-gray-100 p-4">
            <div className="p-2 bg-gray-50 rounded-full">
              <Mail />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal"> Você tem uma nova mensagem </p>
              <h3 className="font-extralight"> Agendamento de provas </h3>
              <span className="text-[12px] font-extralight">Hoje - 13:40 </span>
            </div>
          </li>
          <li className="flex items-center gap-4 cursor-pointer border-b hover:bg-gray-100 p-4">
            <div className="p-2 bg-gray-50 rounded-full">
              <Mail />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal"> Você tem uma nova mensagem </p>
              <h3 className="font-extralight"> Agendamento de provas </h3>
              <span className="text-[12px] font-extralight">Hoje - 13:40 </span>
            </div>
          </li>
        </ul>
      </div>
    </Popup>
  );
};

export default PopupNotifications;
