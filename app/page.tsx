"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi2";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-accent uppercase tracking-[3px] text-sm font-semibold mb-2"
          >
            Full-Stack Web Developer
          </motion.div>

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi, I&apos;m Dishu Kumar <br />
            <span className="text-accent">MERN Stack</span> Developer
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12 text-white/80 leading-relaxed text-sm xl:text-base"
          >
            Computer Science engineer based in Gurugram, Haryana. Specializing
            in MongoDB, Express.js, React, Node.js, and Next.js. Experienced in
            building scalable web apps, RESTful APIs, and AI-powered interfaces.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap items-center justify-center xl:justify-start gap-4 xl:gap-6 relative z-20"
          >
            <ProjectsBtn />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="btn rounded-full border border-white/30 hover:border-accent hover:text-accent bg-white/5 hover:bg-white/10 px-6 py-3.5 xl:px-8 xl:py-4 flex items-center gap-x-2.5 text-sm xl:text-base font-semibold tracking-wide transition-all duration-300 group shadow-lg backdrop-blur-xs cursor-pointer"
            >
              <HiDocumentText className="text-xl xl:text-2xl text-accent group-hover:scale-110 transition-transform" />
              <span>My Resume</span>
              <BsArrowUpRight className="text-xs xl:text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="w-7xl h-full absolute right-0 bottom-0 pointer-events-none">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-184.25 max-h-169.5 absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
