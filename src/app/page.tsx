"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag } from 'react-icons/fa';
import ScrollOne from '@/components/ParallaxScroll/ScrollOne';
import Slider from '@/components/Slider/Slider';
import VideoDiv from '@/components/VideoDiv';
import { useInView } from 'react-intersection-observer';

import { MdPeopleAlt } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaGifts } from "react-icons/fa";
import { PiBooksFill } from "react-icons/pi";

import "./page.css";
import "./globals.css";
import Customer from '@/components/Customer/Customer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card';


const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [introductionRef, setIntroductionRef] = useState<HTMLElement | null>(null);
  const [benefitsRef, setBenefitsRef] = useState<HTMLElement | null>(null);
  const [customerRef, setCustomerRef] = useState<HTMLElement | null>(null);
  const [believerRef, setBelieverRef] = useState<HTMLElement | null>(null);
  const [caseStudyRef, setCaseStudyRef] = useState<HTMLElement | null>(null);
  
  const { ref: refIntroduction, inView: inViewIntroduction } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setIntroductionRef(entry.target);
      }
    }
  });

  

  const { ref: refBenefits, inView: inViewBenefits, entry: entryBenefits } = useInView({
    threshold: 0.75,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setBenefitsRef(entry.target);
      }
      if (inView && entry.target) {
        entry.target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  const { ref: refCustomer, inView: inViewCustomer } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setCustomerRef(entry.target);
      }
    }
  });

  const { ref: refCaseStudy, inView: inViewCasestudy } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setCaseStudyRef(entry.target);
      }
    }
  });

  const { ref: refBelivery, inView: inViewBelivery } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setBelieverRef(entry.target);
      }
    }
  });
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (ref: HTMLElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <main className="md:h-full">
      
      <div className="md:h-full md:w-full  md:overflow-auto md:scroll-smooth">
        <motion.div
          initial={{ y: -1080, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
          className="relative md:h-screen md:w-full h-screen"
          id="introduction"
          ref={refIntroduction}
        >
          <video
            src="/assets/video/landingPage.mp4"
            className="absolute inset-0 w-screen h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white p-1">
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 2 }}
              className="md:text-6xl md:font-bold Anton"
            >
              Experience The Ultimate
            </motion.div>
            <motion.div
              initial={{ x: -1080, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 2.5, type: 'spring', stiffness: 700}}
              whileHover={{ scale: 1.1 }}
            >
              <button className="group md:text-md flex justify-center items-center gap-2 border rounded-lg px-6 py-2 text-white hover:bg-white hover:text-black hover:scale-x-110 transition duration-250 ease-in-out delay-250">
                <p className='hidden group-hover:flex'>Shopping Now </p><FaShoppingBag size={18} />
              </button>
            </motion.div>
          </div>
        </motion.div>
        <div ref={refBenefits} id="benefit" className="h-screen ">
          <ScrollOne />
        </div>
        <div ref={refCustomer} id="customer" className="md:w-full md:h-full ">
          <Customer />
        </div>
        <div ref={refBelivery} className="md:w-full md:h-full relative w-full h-full">
          <VideoDiv />
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 2.9, type: 'spring', stiffness: 200, damping: 10 }}
            className="absolute inset-0 flex justify-center items-center md:text-3xl text-xl p-4 text-white md:mt-56 mt-64 h-full w-full shadowsIntoLight"
          >
            They Believed In Us Because We Believe In You!
          </motion.div>
        </div>
        <div ref={refCaseStudy} className="w-full h-full">
          <Slider />
        </div>
      </div>
      <div className="flex fixed bottom-0 right-0 mb-16 mr-5 z-50">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -100 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className={`fixed space-y-3 text-left flex items-center justify-center flex-col bottom-0 right-0 mb-16 px-3 py-4 text-white text-lg bg-black bg-opacity-40 mr-5 rounded-lg transition-opacity duration-300 ${isScrolled ? 'opacity-100 text-lg' : 'opacity-0'}`}
        >
          <button className={`md:text-lg ${inViewIntroduction ? 'scale-125 text-red-400 font-semibold' : ''}`} onClick={() => scrollToSection(introductionRef)}>
          <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><MdPeopleAlt size={24}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Introduction
              </HoverCardContent>
            </HoverCard>
          </button>
          <button className={`md:text-lg ${inViewBenefits ? 'scale-125 text-green-400 font-semibold' : ''}`} onClick={() => scrollToSection(benefitsRef)}>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><FaGifts size={24}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Benefits
              </HoverCardContent>
            </HoverCard>
          </button>
          <button className={`md:text-lg ${inViewCustomer ? 'scale-125 text-teal-400  font-semibold' : ''}`} onClick={() => scrollToSection(customerRef)}>
          <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><MdPeopleAlt size={24}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Customers
              </HoverCardContent>
            </HoverCard>
          </button>
          <button className={`md:text-lg ${inViewBelivery ? 'scale-125 text-sky-400 font-semibold' : ''}`} onClick={() => scrollToSection(believerRef)}>
          <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><FaHandHoldingHeart size={24}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Trust
              </HoverCardContent>
          </HoverCard>
            
          </button>
          <button className={`md:text-sm ${inViewCasestudy ? 'scale-125 text-violet-400  font-semibold' : ''}`} onClick={() => scrollToSection(caseStudyRef)}>
          <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><PiBooksFill  size={24}/></HoverCardTrigger>
              <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
              Case Studies
              </HoverCardContent>
          </HoverCard>
            
          </button>

        </motion.div>
      </div>
    </main>
  );
};

export default Home;
