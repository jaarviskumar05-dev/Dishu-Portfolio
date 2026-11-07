"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Xelta (AI Platform)",
          subtitle: "Next.js • Tailwind • AI Workflows",
          date: "Present - 2026",
          path: "/thumb1.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
        {
          title: "My Portfolio",
          subtitle: "React • Responsive Design",
          date: "Jan 2025",
          path: "/thumb2.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
        {
          title: "NewsFeeds App",
          subtitle: "React • Dynamic Rendering",
          date: "Oct - Nov 2024",
          path: "/thumb3.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
        {
          title: "TextUtils",
          subtitle: "React • Text Manipulation",
          date: "Aug - Sep 2024",
          path: "/thumb4.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
      ],
    },
    {
      images: [
        {
          title: "To-do List App",
          subtitle: "HTML5 • CSS3 • JavaScript",
          date: "Jun 2024",
          path: "/thumb4.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
        {
          title: "Weather App",
          subtitle: "OpenWeather API • JS",
          date: "Apr - May 2024",
          path: "/thumb1.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
        {
          title: "MERN Stack Suite",
          subtitle: "MongoDB • Express • React • Node",
          date: "2025 - 2026",
          path: "/thumb2.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
        {
          title: "Database Tools",
          subtitle: "MySQL • Data Optimization",
          date: "Feb - Mar 2024",
          path: "/thumb3.jpg",
          link: "https://github.com/Jaarvis05/Jaarvis05",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-70 sm:h-120"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 sm:p-5"
                    aria-hidden
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-0.5">
                      {image.date}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white leading-tight">
                      {image.title}
                    </div>
                    <div className="text-xs text-white/70 mb-2 hidden sm:block">
                      {image.subtitle}
                    </div>

                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-1.5 text-xs tracking-wider text-accent font-semibold hover:underline"
                    >
                      <span>VIEW CODE</span>
                      <BsArrowRight className="text-sm" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
