
"use client"
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { FaShoppingBag } from 'react-icons/fa';

import "./ScrollTwo.css";


const ScrollTwo = () => {
    const parallax = useRef<IParallax>(null!)
  return (
    <div className=''>
        <Parallax  style={{ scrollbarWidth: 'none' ,height: "60%"}} ref={parallax} pages={3} className="bg-[url('/assets/img/mw.webp')] bg-cover">
        <ParallaxLayer
          offset={0}
          speed={0}
          
          className='flex  w-full'
        />
        <div className='flex flex-col w-full justify-center items-center h-full space-y-2'>
        <div className='text-center text-2xl text-white w-[800px]'>
            Improve your daily hydration with our advanced hydrogen-enriched water bottle, designed for increased well-being and vitality.
            </div>
            <button className="md:text-xl flex justify-center items-center gap-2 border rounded-lg px-6 py-1 text-white hover:bg-white hover:text-black hover:scale-x-110 transition duration-300 ease-in-out delay-150">
              Shopping Now <FaShoppingBag />
            </button>
        </div>

        </Parallax>
    </div>
  )
}

export default ScrollTwo