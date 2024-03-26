import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full py-12 rounded-3xl bg-[#5978f3a3] mt-24 "
    >
      <div className="text border-t-2 border-b-2 border-black-500 flex gap-4 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "105%" }}
          animate={{ x: "-120%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 7,
            delay: 0.1,
          }}
          className="text-[3vw] pt-5 pb-5 leading-none font-semibold"
        >
          So, What are you wating for.
        </motion.h1>
        <motion.h1
          initial={{ x: "100%" }}
          animate={{ x: "-95%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 7,
            delay: 0.1,
          }}
          className="text-[3vw] pt-5 pb-5 leading-none font-semibold "
        >
          Get started with <span className="text-slate-800 ">FRAMEPHASE</span>.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;