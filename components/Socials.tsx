import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiFileUserLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "GitHub",
    link: "https://github.com/jaarviskumar05-dev",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dishu-singh-6a73b324a",
    Icon: RiLinkedinLine,
  },
  {
    name: "Resume",
    link: "/resume.pdf",
    Icon: RiFileUserLine,
  },
  {
    name: "Email",
    link: "mailto:dishusingh05@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Phone",
    link: "tel:+918586871783",
    Icon: RiPhoneLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2.5 sm:gap-x-4 xl:gap-x-5 text-base sm:text-lg xl:text-xl shrink-0">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name === "Resume" ? "View Resume / CV" : social.name}
          href={social.link}
          target={
            social.link.startsWith("http") || social.link.endsWith(".pdf")
              ? "_blank"
              : undefined
          }
          rel={
            social.link.startsWith("http") || social.link.endsWith(".pdf")
              ? "noreferrer noopener"
              : undefined
          }
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full p-1 sm:p-1.5 text-white hover:bg-accent/80 hover:text-white"
              : social.name === "Resume"
              ? "text-accent hover:scale-110"
              : "hover:text-accent text-white/80"
          } transition-all duration-300 shrink-0`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
