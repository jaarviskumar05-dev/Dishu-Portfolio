import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="shrink-0 flex items-center justify-center">
      <Link
        prefetch
        href="/projects"
        className="relative w-28 h-28 sm:w-36 sm:h-36 xl:w-46.25 xl:h-46.25 flex justify-center items-center bg-circle-star bg-cover bg-center bg-no-repeat group shrink-0"
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-22 max-h-23 sm:max-w-28 sm:max-h-29 xl:max-w-35.25 xl:max-h-37 pointer-events-none select-none"
        />
        <HiArrowRight
          className="absolute text-xl sm:text-3xl xl:text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
