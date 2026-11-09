"use client";

import {
  RxDesktop,
  RxLayers,
  RxCode,
  RxRocket,
  RxGear,
  RxArrowTopRight,
} from "react-icons/rx";
import {
  FaDocker,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData: {
  Icon: IconType;
  title: string;
  description: string;
  techIcons: IconType[];
}[] = [
  {
    Icon: RxLayers,
    title: "MERN Stack",
    description:
      "End-to-end full-stack applications with MongoDB, Express.js, React.js, and Node.js.",
    techIcons: [SiMongodb, SiExpress, FaReact, FaNodeJs],
  },
  {
    Icon: RxDesktop,
    title: "Frontend Engineering",
    description:
      "Modern, responsive user interfaces built with React, Next.js, Tailwind CSS, and Bootstrap.",
    techIcons: [FaReact, SiNextdotjs, SiTailwindcss, FaJs, FaHtml5],
  },
  {
    Icon: RxCode,
    title: "REST APIs & Backend",
    description:
      "Robust backend architectures, RESTful API design, authentication, and server-side logic.",
    techIcons: [FaNodeJs, SiExpress, SiPostman, FaJs],
  },
  {
    Icon: RxGear,
    title: "Database Management",
    description:
      "Data modeling, query optimization, and management using MongoDB and MySQL.",
    techIcons: [SiMongodb, SiMysql, FaDocker],
  },
  {
    Icon: RxRocket,
    title: "AI Workflows & DevOps",
    description:
      "Integrating AI workflows (e.g. Xelta), API testing with Postman, and Docker deployments.",
    techIcons: [FaDocker, SiPostman, FaReact, FaNodeJs],
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      freeMode={false}
      className="h-68 sm:h-84"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i} className="h-full">
          <div className="bg-[#131424]/80 backdrop-blur-md border border-white/10 hover:border-accent/60 rounded-2xl p-5 sm:p-7 flex flex-col justify-between h-[220px] sm:h-[285px] group cursor-pointer hover:bg-[rgba(89,65,169,0.25)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            {/* Top row: Icon and Arrow */}
            <div className="flex items-center justify-between w-full">
              <div className="text-3xl sm:text-4xl text-accent">
                <item.Icon aria-hidden />
              </div>
              <div className="text-2xl text-white/50 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <RxArrowTopRight aria-hidden />
              </div>
            </div>

            {/* Content: Title and Description */}
            <div className="mt-1.5 mb-1 sm:mt-2 sm:mb-1.5">
              <div className="mb-1.5 sm:mb-2 text-base sm:text-lg font-semibold text-white group-hover:text-accent transition-colors">
                {item.title}
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-white/75">
                {item.description}
              </p>
            </div>

            {/* Bottom row: Tech Stack Icon Badges */}
            <div className="flex items-center gap-x-2 pt-2 border-t border-white/10 mt-auto">
              <span className="text-[10px] uppercase font-semibold text-white/40 tracking-wider">
                Tech:
              </span>
              <div className="flex items-center gap-x-2.5">
                {item.techIcons.map((TechIcon, idx) => (
                  <TechIcon
                    key={idx}
                    className="text-base sm:text-lg text-white/60 group-hover:text-white hover:text-accent! hover:scale-110 transition-all duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
