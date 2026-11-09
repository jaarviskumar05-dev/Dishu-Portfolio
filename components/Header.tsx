import Link from "next/link";

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-40 w-full flex items-center px-4 sm:px-8 xl:px-0 h-16 sm:h-20 xl:h-22.5 bg-primary/90 backdrop-blur-md border-b border-white/10 xl:bg-transparent xl:backdrop-blur-none xl:border-none transition-all duration-300 pointer-events-auto">
      <div className="container mx-auto w-full">
        <div className="flex flex-row justify-between items-center py-2 sm:py-4 xl:py-0 w-full flex-nowrap">
          <Link
            prefetch
            href="/"
            className="flex items-center gap-x-2 sm:gap-x-3 text-lg sm:text-2xl xl:text-3xl font-bold tracking-tight text-white group shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 text-white fill-current drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(241,48,36,0.8)] shrink-0"
              fillRule="nonzero"
              aria-hidden="true"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM25,7c-9.941,0 -18,8.059 -18,18c0,9.941 8.059,18 18,18c9.941,0 18,-8.059 18,-18c0,-9.941 -8.059,-18 -18,-18zM26.00781,13h2.78711l-0.68555,2h1.05469l0.68555,-2h2.88086l-0.80273,2.45313c3.556,0.338 8.99302,2.04295 4.16602,10.62695c-2.687,4.779 -7.17045,6.97055 -11.31445,7.93555l-0.75,1.98438h-2.78711l0.66797,-2h-1.05469l-0.66797,2h-2.88086l0.44336,-1.03125h-0.00586l0.39258,-0.95312l-2.93359,-0.00977l5.26758,-13.00586h5.27344l-3.49414,9.5957c0,0 3.78933,0.1638 6.98633,-3.0332c3.105,-3.104 4.38561,-8.5625 -0.52539,-8.5625h-13.71094l2.07617,-4h8.16016z" />
              </g>
            </svg>
            <span>
              Dishu{" "}
              <span className="font-light text-white/75 group-hover:text-white transition-colors">
                Kumar
              </span>
              {/* <span className="text-accent">.</span> */}
            </span>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
