"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const NavCourse = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <nav className="w-full h-[10vh] border flex items-center gap-4 px-6 md:px-16 py-2 shadow-md">
      <div className="hover-btn-effect" onClick={() => router.push("/courses")}>
        <ArrowLeft />
      </div>
      <div className="text-2xl font-semibold">
        <span> {title} </span>
      </div>
    </nav>
  );
};

export default NavCourse;
