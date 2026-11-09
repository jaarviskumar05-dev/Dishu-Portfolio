"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData: { name: string; path: string; Icon: IconType }[] = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "projects", path: "/projects", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 left-0 w-full xl:w-16 xl:max-w-md xl:h-screen xl:top-0 xl:bottom-0 xl:right-[2%] xl:left-auto z-50 pointer-events-none pb-3 sm:pb-4 xl:pb-0">
      <div className="flex w-[92%] sm:w-[85%] max-w-md xl:w-full xl:max-w-none xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-6 sm:px-10 xl:px-0 h-16 xl:h-max py-3 xl:py-8 bg-primary/95 xl:bg-white/10 backdrop-blur-xl xl:backdrop-blur-xs text-2xl xl:text-xl rounded-full border border-white/15 xl:border-none shadow-[0_10px_35px_rgba(0,0,0,0.8)] pointer-events-auto">
        {navData.map((link, i) => (
          <Link
            prefetch
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-1.5 rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
