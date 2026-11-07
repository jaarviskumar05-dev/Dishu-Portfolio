"use client";

import {
  RxDesktop,
  RxLayers,
  RxCode,
  RxRocket,
  RxGear,
  RxArrowTopRight,
} from "react-icons/rx";
import type { IconType } from "react-icons";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData: {
  Icon: IconType;
  title: string;
  description: string;
}[] = [
  {
    Icon: RxLayers,
    title: "MERN Stack",
    description:
      "End-to-end full-stack applications with MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    Icon: RxDesktop,
    title: "Frontend Engineering",
    description:
      "Modern, responsive user interfaces built with React, Next.js, Tailwind CSS, and Bootstrap.",
  },
  {
    Icon: RxCode,
    title: "REST APIs & Backend",
    description:
      "Robust backend architectures, RESTful API design, authentication, and server-side logic.",
  },
  {
    Icon: RxGear,
    title: "Database Management",
    description:
      "Data modeling, query optimization, and management using MongoDB and MySQL.",
  },
  {
    Icon: RxRocket,
    title: "AI Workflows & DevOps",
    description:
      "Integrating AI workflows (e.g. Xelta), API testing with Postman, and Docker deployments.",
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
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-60 sm:h-85"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="max-w-87.5 leading-normal text-sm text-white/75">
                {item.description}
              </p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
