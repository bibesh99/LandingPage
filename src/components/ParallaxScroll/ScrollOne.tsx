"use client"
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Image from 'next/image';
import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollOne.css";

const ScrollOne = () => {
    const parallax = useRef<IParallax>(null!);
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className='flex pt-24' style={{ width: '100%', height: '100%'}}>
            <div style={{ flex: 1 }}>
                <Parallax className='py-3' style={{ scrollbarWidth: 'none' }} ref={parallax} pages={2} config={{ tension: 170, friction: 26 }}>
                    <ParallaxLayer className='md:flex md:justify-center md:items-center md:px-10 flex px-1' offset={0} speed={1}>
                        <motion.div
                            initial={{ x: -700 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                            className="relative md:h-screen md:w-full md:snap-start md:flex md:flex-col flex flex-col text-black"
                        >
                            <div className='md:p-20 p-4 text-sm md:w-[700px] md:space-y-2 md:flex md:flex-col md:items-center md:justify-center flex flex-col space-y-1 justify-center items-center'>
                                <div>Discover Wellness: The Science of H3.</div>
                                <div className='md:text-3xl text-xl text-center font-semibold md:text-center'>H2 Revolution: Natürliches Gesundheitsmanagement</div>
                                <div className='text-center'>
                                    Tauchen Sie ein in die transformative Kraft von H2! Mit seiner Fähigkeit, Zellen zu durchdringen und freie Radikale zu neutralisieren, unterstützt durch über 2000 Studien, ist H2 ein Game-Changer für die Gesundheit. Erleben Sie verbesserte Energie, Zellschutz, reduzierte Entzündungen und Schmerzlinderung – alles ohne Nebenwirkungen. Nutzen Sie das Potenzial von H2 für ein gesünderes, lebendigeres Leben!
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 1080, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                            className="relative md:h-screen md:w-full md:snap-start md:flex hidden"
                        >
                            <div className='md:flex group'>
                                <div className=''>
                                    <Image className='rounded-lg size-[500px]  brightness-50' src="/assets/img/water.jpg" alt='goldenBOdy' height={900} width={900} />
                                </div>
                                <div className='absolute h-[300px] top-40 right-14 overflow-hidden rounded-lg  '>
                                    <Image className='rounded-lg size-[300px] group-hover:scale-110 duration-200 hover:rounded' src="/assets/img/waterDrop.jpg" alt='waterDrop' height={900} width={900} />
                                </div>
                            </div>
                        </motion.div>
                    </ParallaxLayer>
                    <ParallaxLayer className='md:flex md:justify-center md:items-center md:px-20' offset={1} speed={0.1}>
                    <motion.div
                            initial={{ y: 1080, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                            className="relative md:h-screen md:w-full md:snap-start md:flex "
                        >
                            <div className='md:flex hidden  group'>
                                <div className=''>
                                    <Image className='rounded-lg size-[500px]  brightness-50' src="/assets/img/m1.webp" alt='goldenBOdy' height={900} width={900} />
                                </div>
                                <div className='absolute h-[300px] top-40 right-14 overflow-hidden rounded-lg  '>
                                    <Image className='rounded-lg size-[300px] group-hover:scale-110 duration-200 hover:rounded' src="/assets/img/water.jpg" alt='water' height={900} width={900} />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: -700 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                            className="relative md:h-screen md:w-full md:snap-start sm:flex"
                        >
                            <div className='md:p-20 p-4 text-sm md:w-[700px] md:space-y-2 md:flex md:flex-col md:items-center md:justify-center flex flex-col space-y-1 justify-center items-center'>
                                <div>Discover Wellness: The Science of H3.</div>
                                <div className='md:text-3xl text-xl text-center font-semibold md:text-center'>H2 Revolution: Natürliches Gesundheitsmanagement</div>
                                <div className='text-center'>
                                    Tauchen Sie ein in die transformative Kraft von H2! Mit seiner Fähigkeit, Zellen zu durchdringen und freie Radikale zu neutralisieren, unterstützt durch über 2000 Studien, ist H2 ein Game-Changer für die Gesundheit. Erleben Sie verbesserte Energie, Zellschutz, reduzierte Entzündungen und Schmerzlinderung – alles ohne Nebenwirkungen. Nutzen Sie das Potenzial von H2 für ein gesünderes, lebendigeres Leben!
                                </div>
                            </div>
                        </motion.div>
                    </ParallaxLayer>
                </Parallax>
            </div>
            {/* <div className='relative' style={{ width: '10px', height: '100%'}}>
                <motion.div className="progress-bar absolute" style={{ scaleY, width: '10px', height: '190%', originY: 0 }} />
            </div> */}
        </div>
    );
};

export default ScrollOne;
