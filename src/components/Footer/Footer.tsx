"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  import { FaBell } from "react-icons/fa";
  import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
  import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import Link from "next/link";
  
  const Footer = () => {
    return (
      <div className="flex w-full border-t-[2px] border-black">
        <div className="w-full">

  <div className="md:h-[350px] md:w-full  md:py-5 md:px-14 py-2 px-6">
    <div className="md:w-full md:flex md:justify-between">
        <div className="md:space-y-16 space-y-4 ">
            <div>
                <h1 className="md:text-2xl text-xl font-bold md:font-bold">Contact Us</h1>
                <div className="md:text-lg">Get In Touch With Us.</div>
            </div>
            <div className="md:text-3xl text-xl py-2 font-bold ">
                Corporate XYZ
            </div>
        </div>
        <div className="space-y-6">
            <div className="w-full md:flex md:justify-end md:text-2xl text-xl font-semibold md:font-bold">About Us</div>
            <div className="flex md:space-x-36 space-x-6">
                <div>
                <h1 className=" font-bold md:font-bold">About</h1>
                    <div>
                        <p>Our Mission</p>
                        <p>Our Goal</p>
                    </div>
                </div>
                <div>
                <div className="font-semibold">Sutdio</div>
                    <div>
                        <p>Our Mission</p>
                        <p>Our Goal</p>
                    </div>
                </div>
                <div>
                <div className="font-semibold">Socials</div>
                <div className='md:flex md:space-x-1 md:text-xl flex text-lg'>
 
 <HoverCard>
   <HoverCardTrigger className='cursor-pointer hover:scale-105'><FaInstagram/></HoverCardTrigger>
   <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center rounded-lg bg-black bg-opacity-30 cursor-pointer'>
     <Link className='text-sm md:flex text-white' href="https://www.linkedin.com/in/bibesh-gurung-8a513022a/">
       @bibesh_99
     </Link>
   </HoverCardContent>
 </HoverCard>
 <HoverCard>
   <HoverCardTrigger className='cursor-pointer hover:scale-105'><IoMail/></HoverCardTrigger>
   <HoverCardContent className='md:h-7 md:w-64 flex justify-center items-center rounded-lg bg-black bg-opacity-30 cursor-pointer'>
     <Link className='text-sm md:flex  text-white' href="https://www.linkedin.com/in/bibesh-gurung-8a513022a/">
       gurungbibesh89@gmail.com
     </Link>
   </HoverCardContent>
 </HoverCard>
 <HoverCard>
   <HoverCardTrigger className='cursor-pointer hover:scale-105 '><FaLinkedin/></HoverCardTrigger>
   <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center rounded-lg bg-black bg-opacity-30 cursor-pointer'>
     <Link className='text-sm md:flex text-white' href="https://www.linkedin.com/in/bibesh-gurung-8a513022a/">
       Bibesh Gurung
     </Link>
   </HoverCardContent>
 </HoverCard>    


</div>
                </div>
            </div>
            <div className="space-y-3">
                <p className="font-semibold">Community</p>
                <p >Subscribe To Your Daily News!</p>
                <div className="flex justify-between px-1 items-center border-2 rounded-lg w-56">
                    <input
                        type="text"
                        placeholder="Enter text..."
                        className="px-2 py-1 w-full outline-none border-none focus:no-underline rounded-l-lg"
                    />
                    <div className="px-2">
                        <FaBell className="text-gray-500" />
                    </div>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <input className="rounded-none" type="checkbox"/>
                        <p>I accept the Privacy Policy</p>
                    </div>
            </div>
        </div>

    </div>


  </div>
</div>

      </div>
    )
  }
  
  export default Footer
  