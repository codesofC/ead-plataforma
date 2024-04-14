'use client'

import { useRouter } from "next/navigation";
import {
  Book,
  GraduationCap,
  Home,
  LineChart,
  Mail,
  PanelRightClose,
  PanelRightOpen,
  Settings,
  X,
} from "lucide-react";
import { SidebarProps } from "@/types/index";



const Sidebar = ({ open, setOpen, showSideBar }: SidebarProps) => {

  const router = useRouter()

  const goTo = (link: string):void => {
    showSideBar()
    router.push(link)
  }

  return (
    <div className={`absolute top-0 bg-principal z-20 left-0 md:relative flex flex-col items-center gap-y-28 h-[100vh] ${open ? 'translate-x-0 w-1/2 md:w-auto md:flex-[0.1]' : '-translate-x-full md:translate-x-0 md:flex-[0.03]'} border transition-transform md:transition-[flex] duration-75 shadow-2xl md:shadow-xl border-none`}>
      <div 
        className="flex md:justify-center md:items-center self-end md:self-auto mr-4 md:mr-0 mt-12 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <PanelRightOpen size={28} color="white" className="hidden md:flex" /> : <PanelRightClose size={28} color="white" className="hidden md:flex" />}
        {<X size={28} color="white" className="flex md:hidden" />}
      </div>

      <ul className="w-full flex flex-col text-white ">
        <li 
          className="w-full flex items-center gap-4 cursor-pointer py-4 px-6 font-semibold hover:bg-blue-300 md:hover:bg-gray-200 md:hover:text-black"
          onClick={() => goTo("/")}
        >
          <Home />
          <span className={`${open ? 'flex' : 'hidden'}`}> Home </span>
        </li>
        <li 
          className="w-full flex items-center gap-4 cursor-pointer py-4 px-6 font-semibold hover:bg-blue-300 md:hover:bg-gray-200 md:hover:text-black"
          onClick={() => goTo('/courses')}
        >
          <GraduationCap />
          <span className={`${open ? 'flex' : 'hidden'}`}> Disciplinas </span>
        </li>
        <li 
          className="w-full flex items-center gap-4 cursor-pointer py-4 px-6 font-semibold hover:bg-blue-300 md:hover:bg-gray-200 md:hover:text-black"
          onClick={() => goTo('/notes')}
        >
          <LineChart />
          <span className={`${open ? 'flex' : 'hidden'}`}> Minhas notas </span>
        </li>
        <li 
          className="w-full flex items-center gap-4 cursor-pointer py-4 px-6 font-semibold hover:bg-blue-300 md:hover:bg-gray-200 md:hover:text-black"
          onClick={() => goTo('/messages')}
        >
          <Mail />
          <span className={`${open ? 'flex' : 'hidden'}`}> Mensagens </span>
        </li>
        <li 
          className="w-full flex items-center gap-4 cursor-pointer py-4 px-6 font-semibold hover:bg-blue-300 md:hover:bg-gray-200 md:hover:text-black"
          onClick={() => goTo('/books')}
        >
          <Book />
          <span className={`${open ? 'flex' : 'hidden'}`}> Biblioteca </span>
        </li>
        <li 
          className="w-full flex items-center gap-4 cursor-pointer py-4 px-6 font-semibold hover:bg-blue-300 md:hover:bg-gray-200 md:hover:text-black"
          onClick={() => goTo('/settings')}
        >
          <Settings />
          <span className={`${open ? 'flex' : 'hidden'}`}> Configurações </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
