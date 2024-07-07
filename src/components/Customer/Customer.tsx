"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Customer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]); // Scale from 0.5 to 1 based on scroll position

  return (
    <div className='h-screen w-full md:px-16 md:py-14 overflow-hidden'>
      <div className='w-full h-full md:flex md:justify-center md:items-center'>
        <motion.div
          ref={ref}
          style={{ scale }}
          className="text-white md:text-3xl courgette-regular h-screen w-screen text-2xl md:flex md:w-full md:h-[600px] md:justify-start md:p-10 bg-[url('/assets/img/ast.png')] bg-cover rounded-md shadow-xl"
        >
          <div className='flex rounded-lg  bg-black bg-opacity-25 w-full h-full'>
          <div className='px-4  flex flex-col h-full text-left justify-center items-center w-full'>
   
            <p className='md:w-[700px] '>         Our global dependency on plastics is ready for positive shift from the inside out. </p>

          </div>

          </div>
       
        </motion.div>
      </div>
    </div>
  );
};

export default Customer;
