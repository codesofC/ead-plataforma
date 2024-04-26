"use client";

import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/index";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/lib/Firebase/useFirebase";
import Loader from "./Loader";
import { onAuthStateChanged, User } from "firebase/auth";

const MyLayout = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const {
    getUser,
    setUserData,
    getClasses,
    setCoursesData,
    auth,
    setUserSession,
    userSession
  } = useFirebase();

  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth > 780) {
      setOpenSidebar(true);
    }
  }, []);

  useEffect(() => {
    let list = onAuthStateChanged(auth, (user) => {
      user ? setUserSession(user) : router.push("/login")
    })

    if(userSession){
      fetchDataUser(userSession.uid)
    }

    return () => {
      list()
    }
  }, [userSession]);

  const fetchDataUser = async (uid: string) => {
    //Get the user from the Database
    await getUser(uid)
      .then((data) => {
        setUserData(data);
        //Get the classes relative to the user
        getClasses(data?.courseId)
          .then((course) => {
            setCoursesData(course);
          })
          .catch((error) => {
            console.log("Not course found!");
          });
      })
      .catch((error) => {
        console.log("Not user found!");
      });
  };

  const handleSideBar = () => {
    if (window.innerWidth > 780) {
      setOpenSidebar(true);
    } else {
      setOpenSidebar(false);
    }
  };

  return userSession ? (
    <div className="relative flex overflow-hidden w-full h-screen">
      <Sidebar
        open={openSidebar}
        setOpen={setOpenSidebar}
        showSideBar={handleSideBar}
      />
      <div
        className={`flex flex-col ${
          openSidebar ? "flex-1 md:flex-[0.9]" : "flex-1 md:flex-[0.97]"
        } transition-[flex] duration-75 overflow-y-auto`}
      >
        <Navbar
          open={openSidebar}
          setOpen={setOpenSidebar}
          showSideBar={handleSideBar}
        />
        <div className="">{children}</div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default MyLayout;
