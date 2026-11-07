"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
} from "react-icons/ri";

import {
  CONTACT_RECAPTCHA_ACTION,
  isValidContactEmail,
  isValidContactMessage,
  isValidContactName,
  isValidContactSubject,
  type ContactFormFields,
} from "@/lib/contact";
import { fadeIn } from "@/variants";

const FIELD_VALIDATORS: Record<
  keyof ContactFormFields,
  (value: string) => boolean
> = {
  name: isValidContactName,
  email: isValidContactEmail,
  subject: isValidContactSubject,
  message: isValidContactMessage,
};

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hasAttemptedSubmit = useRef(false);

  const [form, setForm] = useState<ContactFormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    const el = messageRef.current;
    if (!el) return;

    el.style.overflowY = "hidden";
    el.style.height = "auto";

    const nextHeight = el.scrollHeight;
    const maxHeight = Number.parseFloat(getComputedStyle(el).maxHeight);

    if (Number.isFinite(maxHeight) && nextHeight >= maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
      return;
    }

    el.style.height = `${nextHeight}px`;
  }, [form.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as keyof ContactFormFields;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));

    if (!hasAttemptedSubmit.current) return;

    const isInvalid = !FIELD_VALIDATORS[field](value);
    setFieldErrors((prev) =>
      prev[field] === isInvalid ? prev : { ...prev, [field]: isInvalid },
    );
  };

  const validateForm = () => {
    hasAttemptedSubmit.current = true;

    const nextErrors = {
      name: !isValidContactName(form.name),
      email: !isValidContactEmail(form.email),
      subject: !isValidContactSubject(form.subject),
      message: !isValidContactMessage(form.message),
    };

    setFieldErrors(nextErrors);

    return (
      !nextErrors.name &&
      !nextErrors.email &&
      !nextErrors.subject &&
      !nextErrors.message
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA is not ready. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha(CONTACT_RECAPTCHA_ACTION);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          recaptchaToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        toast.error(data?.error ?? "Something went wrong!");
        return;
      }

      toast.success("Thank you. I will get back to you ASAP.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFieldErrors({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
      autoComplete="off"
      autoCapitalize="off"
      noValidate
    >
      <div className="flex gap-x-6 w-full">
        <div className="flex-1 min-w-0">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-disabled={isLoading}
            maxLength={200}
            aria-invalid={fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1 text-left text-sm text-accent" role="alert">
              Invalid Name
            </p>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="input"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            aria-disabled={isLoading}
            maxLength={100}
            aria-invalid={fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-left text-sm text-accent" role="alert">
              Invalid E-mail
            </p>
          )}
        </div>
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input"
          value={form.subject}
          onChange={handleChange}
          disabled={isLoading}
          aria-disabled={isLoading}
          maxLength={200}
          aria-invalid={fieldErrors.subject}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
        />
        {fieldErrors.subject && (
          <p id="subject-error" className="mt-1 text-left text-sm text-accent" role="alert">
            Invalid Subject
          </p>
        )}
      </div>
      <div>
        <textarea
          ref={messageRef}
          name="message"
          placeholder="Message..."
          className="textarea"
          rows={4}
          value={form.message}
          onChange={handleChange}
          disabled={isLoading}
          aria-disabled={isLoading}
          maxLength={500}
          aria-invalid={fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1 text-left text-sm text-accent" role="alert">
            Invalid Message
          </p>
        )}
      </div>
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-42.5 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:pointer-events-none"
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        <span
          className={
            isLoading
              ? ""
              : "group-hover:translate-y-[-120%] group-hover:opacity-0 transition-all duration-500"
          }
        >
          {isLoading ? "Sending..." : "Let's talk"}
        </span>

        {!isLoading && (
          <BsArrowRight
            className="translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
            aria-hidden
          />
        )}
      </button>
      <p className="mt-3 text-xs text-white/40">
        This site is protected by reCAPTCHA.
      </p>
    </motion.form>
  );
};

const Contact = () => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div className="h-full bg-primary/30 overflow-y-auto">
      <div className="container mx-auto py-24 xl:py-32 text-center xl:text-left flex items-center justify-center min-h-full">
        <div className="flex flex-col w-full max-w-200">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-6"
          >
            <h2 className="h2 mb-2">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>
            <p className="text-white/70 text-sm max-w-md mx-auto">
              Feel free to reach out directly via email, phone, or by submitting
              the form below.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-center"
          >
            <a
              href="mailto:dishusingh05@gmail.com"
              className="bg-white/5 border border-white/10 hover:border-accent p-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-y-1.5 group"
            >
              <RiMailLine className="text-2xl text-accent" />
              <span className="text-[11px] uppercase tracking-wider text-white/50">
                Email
              </span>
              <span className="text-xs text-white group-hover:text-accent transition-colors break-all">
                dishusingh05@gmail.com
              </span>
            </a>

            <a
              href="tel:+918586871783"
              className="bg-white/5 border border-white/10 hover:border-accent p-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-y-1.5 group"
            >
              <RiPhoneLine className="text-2xl text-accent" />
              <span className="text-[11px] uppercase tracking-wider text-white/50">
                Phone
              </span>
              <span className="text-xs text-white group-hover:text-accent transition-colors">
                +91 8586871783
              </span>
            </a>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center gap-y-1.5">
              <RiMapPinLine className="text-2xl text-accent" />
              <span className="text-[11px] uppercase tracking-wider text-white/50">
                Location
              </span>
              <span className="text-xs text-white">
                Sector 4, Gurugram (122001)
              </span>
            </div>
          </motion.div>

          {siteKey && !siteKey.includes("XXXX") ? (
            <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
              <ContactForm />
            </GoogleReCaptchaProvider>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center max-w-md mx-auto">
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                You can reach me directly on my phone, email, or social profiles:
              </p>
              <div className="flex justify-center gap-4 text-xl">
                <a
                  href="https://github.com/Jaarvis05/Jaarvis05"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-accent text-white p-2.5 rounded-full hover:bg-accent/80 transition-colors"
                  title="GitHub"
                >
                  <RiGithubLine />
                </a>
                <a
                  href="https://www.linkedin.com/in/dishu-singh-6a73b324a"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-white/10 text-white p-2.5 rounded-full hover:text-accent hover:bg-white/20 transition-colors"
                  title="LinkedIn"
                >
                  <RiLinkedinLine />
                </a>
                <a
                  href="mailto:dishusingh05@gmail.com"
                  className="bg-white/10 text-white p-2.5 rounded-full hover:text-accent hover:bg-white/20 transition-colors"
                  title="Email"
                >
                  <RiMailLine />
                </a>
                <a
                  href="tel:+918586871783"
                  className="bg-white/10 text-white p-2.5 rounded-full hover:text-accent hover:bg-white/20 transition-colors"
                  title="Call"
                >
                  <RiPhoneLine />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
