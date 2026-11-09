import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-50 xl:w-75 absolute right-0 xl:-right-16 bottom-0 xl:-bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 pointer-events-none select-none">
      <Image
        src="/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
