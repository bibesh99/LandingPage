"use client";
import React, { useState, useEffect } from 'react';

import { motion } from "framer-motion";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className={`md:flex md:w-full flex w-full md:h-16 md:py-3 md:px-20 text-white backdrop-blur-sm transition-colors duration-300 h-16 ${isScrolled ? 'bg-black bg-opacity-65 transition-colors duration-300 ' : 'md:bg-transparent'}`}
    >
      <div className='md:justify-between md:items-center md:flex md:w-full md:p-2 flex justify-between items-center w-full p-1  '>
        <div className='md:text-3xl text-2xl tracking-tight'>Corporate xyz</div>
        <div className='md:flex md:space-x-1 md:text-xl flex text-lg'>
 
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><FaInstagram size={24}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-30 cursor-pointer'>
                <Link className='text-sm md:flex text-white' href="https://www.linkedin.com/in/bibesh-gurung-8a513022a/">
                  @bibesh_99
                </Link>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><IoIosMail size={26}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-64 flex justify-center items-center bg-black bg-opacity-30 cursor-pointer'>
                <Link className='text-sm md:flex  text-white' href="https://www.linkedin.com/in/bibesh-gurung-8a513022a/">
                  gurungbibesh89@gmail.com
                </Link>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105 '><FaLinkedin  size={24}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-30 cursor-pointer'>
                <Link className='text-sm md:flex text-white' href="https://www.linkedin.com/in/bibesh-gurung-8a513022a/">
                  Bibesh Gurung
                </Link>
              </HoverCardContent>
            </HoverCard>    
   
    
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
