"use client";

import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/variants";

const Services = () => {
  return (
    <div className="w-full h-full bg-primary/30 pt-20 pb-24 sm:pt-24 sm:pb-28 xl:py-36 flex items-start xl:items-center justify-start xl:justify-center overflow-y-auto xl:overflow-hidden overflow-x-hidden relative">
      <Circles />
      <div className="container mx-auto w-full">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-3 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl sm:text-3xl md:text-4xl xl:text-[54px] xl:leading-[1.3] font-bold xl:font-semibold leading-tight mb-2 sm:mb-3 xl:mb-4 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-3 xl:mb-4 max-w-md xl:max-w-100 mx-auto lg:mx-0 text-white/80 text-xs sm:text-sm xl:text-base leading-relaxed px-2 xl:px-0"
            >
              Building robust full-stack web applications with the MERN stack,
              high-performance user interfaces, reliable RESTful APIs, and
              optimized database solutions.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
