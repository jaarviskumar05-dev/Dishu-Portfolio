import Image from "next/image";

type AvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
};

const Avatar = ({
  src = "/dishu.png",
  alt = "Dishu Kumar",
  className,
}: AvatarProps) => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src={src}
        alt={alt}
        width={737}
        height={678}
        priority
        className={className || "translate-z-0 w-full h-full object-contain"}
      />
    </div>
  );
};

export default Avatar;
