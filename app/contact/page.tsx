"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
} from "react-icons/ri";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending...");
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    formData.append("access_key", "5821f816-8c09-4576-9a4f-25ddd281884f");
    formData.append("from_name", "Dishu Kumar Portfolio Contact");
    formData.append(
      "subject",
      `New Portfolio Message from ${formData.get("name") || "Visitor"}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Thank you! Your message has been sent successfully.");
        formEl.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Submission failed");
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("Network error. Please try again.");
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-primary/30 pt-20 pb-24 sm:pt-24 sm:pb-28 xl:pt-36 xl:pb-20 overflow-y-auto overflow-x-hidden relative">
      <Circles />
      <div className="container mx-auto w-full min-h-full flex flex-col justify-start xl:justify-center items-center py-4 xl:py-0">
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-16 w-full max-w-5xl items-start justify-between">
          {/* Left Column: Contact info & Let's talk */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col w-full text-center xl:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold xl:font-semibold leading-tight mb-2 xl:mb-3">
              Let&apos;s <span className="text-accent">talk.</span>
            </h2>
            <p className="text-white/80 text-xs sm:text-sm xl:text-base leading-relaxed mb-4 sm:mb-6 xl:mb-8 max-w-md mx-auto xl:mx-0 px-2 xl:px-0">
              I&apos;m currently available to take on new projects, so feel free
              to send me a message about anything that you want me to work on.
              You can contact me anytime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 xl:flex xl:flex-col gap-2.5 sm:gap-3 xl:gap-y-3.5 mb-4 sm:mb-6 xl:mb-8 w-full max-w-md sm:max-w-none xl:max-w-md mx-auto xl:mx-0">
              <a
                href="mailto:jaarviskumar05@gmail.com"
                className="flex items-center gap-x-3 sm:gap-x-4 bg-white/5 border border-white/10 hover:border-accent/60 hover:bg-white/10 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all duration-300 group text-left"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                  <RiMailLine className="text-lg sm:text-xl" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 font-medium">
                    Email
                  </span>
                  <span className="text-xs sm:text-sm text-white group-hover:text-accent transition-colors font-medium truncate sm:break-all">
                    jaarviskumar05@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+918586871783"
                className="flex items-center gap-x-3 sm:gap-x-4 bg-white/5 border border-white/10 hover:border-accent/60 hover:bg-white/10 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all duration-300 group text-left"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                  <RiPhoneLine className="text-lg sm:text-xl" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 font-medium">
                    Call / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm text-white group-hover:text-accent transition-colors font-medium">
                    +91 8586871783
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-x-3 sm:gap-x-4 bg-white/5 border border-white/10 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                  <RiMapPinLine className="text-lg sm:text-xl" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 font-medium">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Gurugram, Haryana
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden xl:flex items-center justify-start gap-x-3 text-lg">
              <a
                href="https://github.com/jaarviskumar05-dev"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                title="GitHub"
              >
                <RiGithubLine />
              </a>
              <a
                href="https://www.linkedin.com/in/dishu-singh-6a73b324a"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                title="LinkedIn"
              >
                <RiLinkedinLine />
              </a>
              <a
                href="mailto:jaarviskumar05@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                title="Email"
              >
                <RiMailLine />
              </a>
              <a
                href="tel:+918586871783"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                title="Call"
              >
                <RiPhoneLine />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Web3Forms submission */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={onSubmit}
            className="flex-1 flex flex-col gap-y-3 sm:gap-y-4 w-full max-w-lg mx-auto xl:mx-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-1">
              <div>
                <label className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 mb-1 sm:mb-1.5 block font-medium text-left">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="input h-11 sm:h-13 pl-4 sm:pl-6 text-sm sm:text-base"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 mb-1 sm:mb-1.5 block font-medium text-left">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input h-11 sm:h-13 pl-4 sm:pl-6 text-sm sm:text-base"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 mb-1 sm:mb-1.5 block font-medium text-left">
                Write your message here
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Enter your message"
                className="textarea min-h-24 sm:min-h-32 p-3.5 sm:p-6 text-sm sm:text-base"
                disabled={isLoading}
              />
            </div>

            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="btn rounded-full border border-white/50 w-full sm:w-auto h-11 sm:h-13 px-6 sm:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent text-white group disabled:opacity-60 disabled:cursor-not-allowed shadow-lg cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  {isLoading ? "Sending..." : "Submit now"}
                </span>
                {!isLoading && (
                  <BsArrowRight className="ml-2 text-base sm:text-lg group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              {result && (
                <span className="text-xs text-white/70">{result}</span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
