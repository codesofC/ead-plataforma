'use client'

import Sidebar from './Sidebar'
import React, { useState } from 'react'
import Navbar from './Navbar/index'

const MyLayout = ({ children }: { children: React.ReactNode }) => {

    const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div className='relative flex overflow-hidden w-full h-screen'>
        <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
        <div className={`flex flex-col ${openSidebar ? 'flex-1 md:flex-[0.9]' : 'flex-1 md:flex-[0.97]'} transition-[flex] duration-75 overflow-y-auto`}>
          <Navbar open={openSidebar} setOpen={setOpenSidebar} />
          <div className="">{children}</div>
        </div>
    </div>
  )
}

export default MyLayout