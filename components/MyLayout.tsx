'use client'

import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import Navbar from './Navbar/index'
import { useRouter } from 'next/navigation'
import { useFirebase } from '@/lib/Firebase/useFirebase'
import Loader from './Loader'

const MyLayout = ({ children }: { children: React.ReactNode }) => {

    const [openSidebar, setOpenSidebar] = useState(false)

    const { 
      setIsLoading, 
      isLoading,
      verificationConnection, 
      userId,
      getUser,
      setUserData,
      getClasses,
      setCoursesData
     } = useFirebase();

    const router = useRouter();
  
    useEffect(() => {
      verificationConnection(userCredential => {
        !userCredential ? router.push('/login') : setIsLoading(false)
      })
      
      if(!isLoading){
        fetchDataUser()
      }
      
    }, [])

    const fetchDataUser = async () => {

      //Get the user from the Database
      getUser(userId).then((data) => {
        setUserData(data);
        //Get the classes relative to the user
        getClasses(data?.courseId)
        .then((course) => {
          setCoursesData(course)
        }).catch(error => {
          console.log("Not course found!")
        })
      }).catch(error => {
        console.log("Not user found!");
      })

    }

  return !isLoading ? (
    <div className='relative flex overflow-hidden w-full h-screen'>
        <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
        <div className={`flex flex-col ${openSidebar ? 'flex-1 md:flex-[0.9]' : 'flex-1 md:flex-[0.97]'} transition-[flex] duration-75 overflow-y-auto`}>
          <Navbar open={openSidebar} setOpen={setOpenSidebar} />
          <div className="">{children}</div>
        </div>
    </div>
  ) : (
    <Loader />
  )
}

export default MyLayout