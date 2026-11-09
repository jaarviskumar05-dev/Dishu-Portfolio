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

import Avatar from "@/components/Avatar";
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
    <div className="h-full bg-primary/30 pt-36 pb-32 xl:pt-44 xl:pb-32 text-center xl:text-left overflow-y-auto">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-92.5"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Engineering scalable <span className="text-accent">MERN applications</span> with clean code.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-125 mx-auto xl:mx-0 mb-4 xl:mb-6 px-2 xl:px-0 text-white/80 text-sm xl:text-base leading-relaxed"
          >
            B.Tech in Computer Science & Engineering graduate from Uttaranchal
            Institute of Technology (8.1 CGPA). Full-Stack MERN Developer based in
            Gurugram with hands-on experience building production web apps,
            designing RESTful APIs, and implementing AI-driven features.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            className="mb-6 xl:mb-8"
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
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={4} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Years of experience.
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={4} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Finished projects.
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8.1} decimals={1} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  B.Tech CGPA (out of 10).
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Industry certificates.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-100"
        >
          <div className="flex gap-x-4 xl:gap-x-6 mx-auto xl:mx-0 mb-6 flex-wrap justify-center xl:justify-start gap-y-2">
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

          <div className="py-2 xl:py-4 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row max-w-full gap-x-2 items-center xl:items-start text-center xl:text-left text-white/70"
              >
                <div className="font-normal text-white/90 text-sm md:text-base">{item.title}</div>
                {item.stage && <div className="hidden md:flex text-white/30">-</div>}
                {item.stage && (
                  <div className="text-accent text-xs md:text-sm font-light mt-0.5">
                    {item.stage}
                  </div>
                )}

                {item.icons && (
                  <div className="flex gap-x-3 mt-1 md:mt-0 flex-wrap justify-center">
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
