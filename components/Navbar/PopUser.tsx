import { useFirebase } from "@/lib/Firebase/useFirebase";
import { CircleUserRound, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Popup from "./Popup";

export function PopUser() {

  const { signOutUser, userData } = useFirebase()

  const router = useRouter()

  const signOutFn = () => {
    signOutUser().then(() => {
      setTimeout(() => {
        router.push("/login")
      }, 500)
    })
  }

  return (
    <Popup>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold"> {userData?.firstName.toUpperCase()} {userData?.lastName.toUpperCase()} </h2>
          <span className="font-extralight"> Estudante </span>
        </div>

        <ul className="flex flex-col">
          <li className="flex gap-2 items-center px-2 py-4 border-t cursor-pointer hover:bg-gray-100">
            <CircleUserRound />
            <span> Minha Conta </span>
          </li>
          <li 
            className="flex gap-2 items-center px-2 py-4 border-t cursor-pointer hover:bg-gray-100"
            onClick={signOutFn}
          >
            <LogOut />
            <span> Sair </span>
          </li>
        </ul>
      </div>
    </Popup>
  );
}
