import React from 'react'
import { motion } from "framer-motion";

const VideoDiv = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[90vh] bg-black md:snap-start">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.7 }}
        className="relative w-full h-full md:h-auto"
      >
        <video
          src="/assets/video/vid4.mp4"
          className="absolute inset-0 md:w-full  md:h-full  md:object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
      <motion.div
        initial={{ x: -600, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.7 }}
        className="relative w-full h-full md:h-auto"
      >
        <video
          src="/assets/video/vid2.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
      <motion.div
        initial={{ x: -700, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.7 }}
        className="relative w-full h-full md:h-auto"
      >
        <video
          src="/assets/video/vid3.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </div>
  )
}

export default VideoDiv;
