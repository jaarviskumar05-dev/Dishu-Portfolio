"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export type ProjectItem = {
  w_no: number;
  w_name: string;
  w_img: string;
  w_descrip: string;
  w_link: string;
  w_badge?: string;
  tags: string[];
};

export const Mywork_data: ProjectItem[] = [
  {
    w_no: 1,
    w_name: "Xelta",
    w_img: "/projects/xelta_2.webp",
    w_badge: "AI Platform",
    w_descrip:
      "An advanced AI creative platform uniting next-gen generative models, intelligent workflows, and high-performance Next.js architecture.",
    w_link: "https://xelta.ai",
    tags: ["Next.js", "AI Models", "Generative AI", "Tailwind CSS"],
  },
  {
    w_no: 2,
    w_name: "Myntra-clone",
    w_img: "/projects/work-img1.png",
    w_badge: "E-Commerce",
    w_descrip:
      "I created a Myntra clone using HTML, CSS, JavaScript, implementing e-commerce features like product listings and checkout.",
    w_link: "https://jaarvis05.github.io/Myntra/",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    w_no: 3,
    w_name: "NewsFeed App",
    w_img: "/projects/work-img2.png",
    w_badge: "React Web App",
    w_descrip:
      "I developed a newsfeed app using React, focusing on dynamic content rendering and real-time updates for user interactions.",
    w_link: "http://news-feeds-app.vercel.app",
    tags: ["React", "API", "Dynamic UI"],
  },
  {
    w_no: 4,
    w_name: "TextUtils App",
    w_img: "/projects/work-img3.png",
    w_badge: "Utility Tool",
    w_descrip:
      "I developed a TextUtils app using React, providing text manipulation features like word count, case conversion, and trimming.",
    w_link: "https://texts-utils-app.vercel.app",
    tags: ["React", "State Management", "Tools"],
  },
  {
    w_no: 5,
    w_name: "To-do-list",
    w_img: "/projects/work-img4.png",
    w_badge: "Productivity",
    w_descrip:
      "I developed a To-Do List app using HTML, CSS, and JavaScript, enabling users to add, edit, and delete tasks.",
    w_link: "https://jaarvis05.github.io/To-do-List/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    w_no: 6,
    w_name: "Weather App",
    w_img: "/projects/work-img5.png",
    w_badge: "Live API",
    w_descrip:
      "I developed a Weather app using HTML, CSS, and JavaScript, providing real-time weather updates based on user location.",
    w_link: "https://jaarvis05.github.io/Weather/",
    tags: ["Weather API", "JavaScript", "CSS3"],
  },
  {
    w_no: 7,
    w_name: "Form",
    w_img: "/projects/work-img6.jpg",
    w_badge: "Validation",
    w_descrip:
      "I developed a form using HTML, CSS, and JavaScript, allowing users to submit data with validation.",
    w_link: "https://jaarvis05.github.io/Form/",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    w_no: 8,
    w_name: "Spotify Clone",
    w_img: "/projects/Spotify.png",
    w_badge: "Audio Streamer",
    w_descrip:
      "I developed a Spotify clone using HTML, CSS, and JavaScript, featuring music playback, playlists, and a responsive UI.",
    w_link: "https://jaarvis05.github.io/Spotify-Clone/",
    tags: ["HTML5", "CSS3", "JavaScript", "Audio API"],
  },
];

const WorkSlider = () => {
  return (
    <div className="w-full relative select-none">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 22,
          stretch: -18,
          depth: 160,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full py-6 sm:py-8"
      >
        {Mywork_data.map((project) => (
          <SwiperSlide
            key={project.w_no}
            className="w-[70vw] sm:w-[38vw] md:w-[30vw] xl:w-[17vw] max-w-[285px] shrink-0"
          >
            <div className="bg-[#131424]/90 backdrop-blur-md border border-white/10 hover:border-accent/60 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-[60vh] min-h-[440px] max-h-[530px] group">
              {/* Project Image Preview */}
              <div className="relative w-full h-[27vh] min-h-[190px] max-h-[235px] overflow-hidden bg-black/40">
                <Image
                  src={project.w_img}
                  alt={project.w_name}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1200px) 38vw, 17vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Index badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-accent tracking-wider shadow-sm z-10">
                  #{String(project.w_no).padStart(2, "0")}
                </div>

                {/* Category badge */}
                {project.w_badge && (
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-white/90 tracking-wider shadow-sm z-10">
                    {project.w_badge}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-3.5 sm:p-4.5 flex flex-col justify-between flex-1">
                <div>
                  {/* Title */}
                  <h3 className="text-sm sm:text-base xl:text-lg font-bold text-white group-hover:text-accent transition-colors mb-2">
                    {project.w_name}
                  </h3>

                  {/* Description - full text without ... truncation */}
                  <p className="text-xs xl:text-[13px] text-white/75 leading-relaxed">
                    {project.w_descrip}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-2 flex items-center justify-center">
                  <a
                    href={project.w_link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-x-2.5 text-xs sm:text-sm font-semibold text-white/85 hover:text-white transition-colors group/link py-1"
                  >
                    <span className="group-hover/link:underline underline-offset-4">
                      View Project
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/10 group-hover/link:bg-accent flex items-center justify-center text-white transition-all duration-300 shadow-sm">
                      <BsArrowRight className="text-xs transition-transform duration-300 group-hover/link:-rotate-45" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
