"use client";

import { motion } from "framer-motion";

import TestimonialSlider from "@/components/TestimonialSlider";
import { fadeIn } from "@/variants";

const Testimonials = () => {
  return (
    <div className="w-full h-full bg-primary/30 pt-20 pb-24 sm:pt-24 sm:pb-28 xl:py-32 text-center overflow-y-auto xl:overflow-hidden overflow-x-hidden relative">
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-2xl sm:text-3xl md:text-4xl xl:text-[54px] xl:leading-[1.3] font-bold xl:font-semibold leading-tight mb-4 sm:mb-6 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
