"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const OnScreenNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // State for tracking which section is in view
  const [inViewIntroduction, setInViewIntroduction] = useState(false);
  const [inViewBenefits, setInViewBenefits] = useState(false);
  const [inViewCustomer, setInViewCustomer] = useState(false);

  // Intersection observer hooks to detect when sections are in view
  const [refIntroduction, inViewRefIntroduction] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  const [refBenefits, inViewRefBenefits] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  const [refCustomer, inViewRefCustomer] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  // Update state based on which section is in view


  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -100 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className={`fixed bottom-0 right-0 mb-16 p-5 text-white text-xl bg-black bg-opacity-40 mr-5 rounded-lg transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`md:text-xl ${inViewIntroduction ? 'scale-125 text-red-900' : ''}`}>Introduction</div>
      <div className={`md:text-xl ${inViewBenefits ? 'scale-125 text-red-900' : ''}`}>Benefits</div>
      <div className={`md:text-xl ${inViewCustomer ? 'scale-125 text-red-900' : ''}`}>Customer</div>
    </motion.div>
  );
};

export default OnScreenNav;
