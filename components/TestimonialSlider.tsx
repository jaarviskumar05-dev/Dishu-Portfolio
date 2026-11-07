"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Engineering Lead",
    position: "Matchbest Software Pvt. Ltd. (Gurugram)",
    message:
      "Dishu has been instrumental in architecting and delivering full-stack MERN features. His expertise in Node.js APIs, responsive React UIs, and performance optimization consistently ensures top quality.",
  },
  {
    image: "/t-avt-2.png",
    name: "Project Manager",
    position: "Webralecon Pvt. Ltd. (Gurugram)",
    message:
      "Dishu was a standout MERN Stack developer who took ownership of core application modules, MongoDB schema structures, and Express route integrations with great diligence and speed.",
  },
  {
    image: "/t-avt-3.png",
    name: "IT Systems Supervisor",
    position: "Lumax Auto Technology (Gurugram)",
    message:
      "During his IT internship, Dishu provided reliable technical support, maintained systems, and demonstrated sharp database skills with MySQL for data management and query optimization.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-100"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-75 flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                <div className="text-lg font-semibold">{person.name}</div>

                <div className="text-[12px] uppercase font-extralight tracking-widest text-accent mt-0.5">
                  {person.position}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-px md:before:bg-white/20 md:before:absolute md:before:left-0 md:before:h-50 relative md:pl-20">
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              <div className="xl:text-lg text-center md:text-left text-white/80 leading-relaxed font-light">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
