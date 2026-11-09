"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { BsArrowUpRight } from "react-icons/bs";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

type AboutInfoItem = {
  title: string;
  stage?: string;
  icons?: IconType[];
};

type AboutDataItem = {
  title: string;
  info: AboutInfoItem[];
};

const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          FaReact,
          SiNextdotjs,
          FaJs,
          SiTailwindcss,
          FaHtml5,
          FaCss3Alt,
          FaBootstrap,
        ],
      },
      {
        title: "Backend Development",
        icons: [FaNodeJs, SiExpress, FaPhp],
      },
      {
        title: "Databases & Tools",
        icons: [SiMongodb, SiMysql, SiPostman, FaDocker],
      },
      {
        title: "Programming Languages",
        icons: [SiC, SiCplusplus, FaPython, FaJs],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Matchbest Software Pvt. Ltd. | MERN Stack Developer",
        stage: "Sep 2025 – Present 2026, Gurugram",
      },
      {
        title: "Webralecon Pvt. Ltd. | MERN Stack Developer (Intern)",
        stage: "Apr 2025 – Sep 2025, Gurugram",
      },
      {
        title: "Lumax Auto Technology | IT Intern (MySQL & IT Support)",
        stage: "Feb 2024 – Mar 2024, Gurugram",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "B.Tech in CSE (CGPA: 8.1/10) - Uttaranchal Institute of Technology",
        stage: "2020 – 2024, Dehradun",
      },
      {
        title: "12th Standard - Science (Percentage: 66.8%)",
        stage: "2020",
      },
      {
        title: "10th Standard (Percentage: 69.8%)",
        stage: "2018",
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "Certificate of 2-Months Summer Training - Maruti Suzuki India Limited",
        stage: "Summer Training",
      },
      {
        title: "Certificate of 2-Month IT Intern - Lumax Auto Technology",
        stage: "Internship Certificate",
      },
    ],
  },
  {
    title: "personal details",
    info: [
      {
        title: "Location: Sector 4, Gurugram, Haryana (122001)",
        stage: "Gurugram, India",
      },
      {
        title: "Languages: Hindi, English",
        stage: "Fluent",
      },
      {
        title: "Date of Birth: 02-03-2002 | Gender: Male",
        stage: "Indian",
      },
      {
        title: "Contact: +91 8586871783 | dishusingh05@gmail.com",
        stage: "Active",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-full bg-primary/30 pt-24 pb-24 sm:pt-28 sm:pb-44 xl:pt-44 xl:pb-32 text-center xl:text-left overflow-y-auto overflow-x-hidden relative">
      <Circles />

      <div className="container mx-auto h-auto min-h-full xl:h-full flex flex-col xl:flex-row items-center justify-start xl:justify-center gap-y-8 xl:gap-x-6 w-full px-4 sm:px-6 xl:pl-4 xl:pr-20">
        <div className="w-full xl:flex-1 flex flex-col items-center xl:items-start justify-start xl:justify-center text-center xl:text-left">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl sm:text-3xl md:text-4xl xl:text-[54px] xl:leading-[1.3] font-bold xl:font-semibold leading-tight mb-3 sm:mb-4 xl:mb-4 text-center xl:text-left mx-auto xl:mx-0 w-full max-w-xl xl:max-w-none"
          >
            Engineering scalable <span className="text-accent">MERN applications</span> with clean code.
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            className="w-full max-w-xl xl:max-w-125 mx-auto xl:mx-0 mb-4 sm:mb-6 xl:mb-6 px-1 xl:px-0 text-white/80 text-xs sm:text-sm xl:text-base leading-relaxed text-center xl:text-left"
          >
            B.Tech in Computer Science & Engineering graduate from Uttaranchal
            Institute of Technology (8.1 CGPA). Full-Stack MERN Developer based in
            Gurugram with hands-on experience building production web apps,
            designing RESTful APIs, and implementing AI-driven features.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="flex justify-center xl:justify-start mb-6 xl:mb-8 w-full xl:w-auto"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-x-2 text-white/90 border border-accent/40 bg-accent/15 hover:bg-accent hover:text-white px-5 py-2.5 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md group"
            >
              <HiDocumentText className="text-lg text-accent group-hover:text-white transition-colors" />
              <span>View Resume (PDF)</span>
              <BsArrowUpRight className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            className="flex justify-center xl:justify-start w-full max-w-lg sm:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-6 sm:mb-8 xl:mb-8"
          >
            <div className="grid grid-cols-2 sm:flex sm:flex-1 gap-3 sm:gap-0 xl:gap-x-6 w-full">
              <div className="relative flex-1 sm:after:w-px sm:after:h-full sm:after:bg-white/10 sm:after:absolute sm:after:top-0 sm:after:right-0 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none text-center xl:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2 xl:mb-2">
                  <CountUp start={0} end={2} duration={4} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.3] xl:leading-[1.4] max-w-28 sm:max-w-25 mx-auto xl:mx-0">
                  Years of experience.
                </div>
              </div>

              <div className="relative flex-1 sm:after:w-px sm:after:h-full sm:after:bg-white/10 sm:after:absolute sm:after:top-0 sm:after:right-0 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none text-center xl:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2 xl:mb-2">
                  <CountUp start={0} end={6} duration={4} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.3] xl:leading-[1.4] max-w-28 sm:max-w-25 mx-auto xl:mx-0">
                  Finished projects.
                </div>
              </div>

              <div className="relative flex-1 sm:after:w-px sm:after:h-full sm:after:bg-white/10 sm:after:absolute sm:after:top-0 sm:after:right-0 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none text-center xl:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2 xl:mb-2">
                  <CountUp start={0} end={8.1} decimals={1} duration={4} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.3] xl:leading-[1.4] max-w-28 sm:max-w-25 mx-auto xl:mx-0">
                  B.Tech CGPA (out of 10).
                </div>
              </div>

              <div className="relative flex-1 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none text-center xl:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2 xl:mb-2">
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.3] xl:leading-[1.4] max-w-28 sm:max-w-25 mx-auto xl:mx-0">
                  Industry certificates.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-60 xl:min-h-100 pb-4 xl:pb-0 items-center xl:items-start text-center xl:text-left justify-start xl:justify-center"
        >
          <div className="flex gap-x-3 sm:gap-x-4 xl:gap-x-6 mx-auto xl:mx-0 mb-4 sm:mb-6 xl:mb-6 flex-wrap justify-center xl:justify-start gap-y-2 text-xs sm:text-sm xl:text-base w-full xl:w-auto">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize text-sm xl:text-base relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-4 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start text-center xl:text-left w-full">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col sm:flex-row flex-wrap max-w-full gap-x-2 items-center xl:items-start text-center xl:text-left text-white/70 justify-center xl:justify-start"
              >
                <div className="font-normal text-white/90 text-sm md:text-base">{item.title}</div>
                {item.stage && <div className="hidden md:flex text-white/30">-</div>}
                {item.stage && (
                  <div className="text-accent text-xs md:text-sm font-light mt-0.5 shrink-0">
                    {item.stage}
                  </div>
                )}

                {item.icons && (
                  <div className="flex gap-x-3 mt-1.5 md:mt-0 flex-wrap justify-center xl:justify-start">
                    {item.icons.map((Icon, iconI) => (
                      <div
                        key={iconI}
                        className="text-xl md:text-2xl text-white hover:text-accent transition-colors"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
