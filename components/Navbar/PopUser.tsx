import { CircleUserRound, LogOut } from "lucide-react";
import Popup from "./Popup";

export function PopUser() {
  return (
    <Popup>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold"> JUDELIN INÉLUS </h2>
          <span className="font-extralight"> Estudante </span>
        </div>

        <ul className="flex flex-col">
          <li className="flex gap-2 items-center px-2 py-4 border-t cursor-pointer hover:bg-gray-100">
            <CircleUserRound />
            <span> Minha Conta </span>
          </li>
          <li className="flex gap-2 items-center px-2 py-4 border-t cursor-pointer hover:bg-gray-100">
          <LogOut />
          <span> Sair </span>
          </li>
        </ul>
      </div>
    </Popup>
  );
}
