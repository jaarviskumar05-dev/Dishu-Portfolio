import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-family",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dishu Kumar | MERN Stack Developer | Portfolio",
  description:
    "Dishu Kumar is a Full-Stack MERN Developer based in Gurugram, Haryana. Experienced in React, Next.js, Node.js, Express, MongoDB, and AI-powered workflows.",
  keywords: [
    "Dishu Kumar",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Python",
    "JavaScript",
    "Gurugram",
    "Portfolio",
  ],
  authors: [
    {
      name: "Dishu Kumar",
      url: "https://github.com/jaarviskumar05-dev",
    },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/logo.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/logo.svg?v=2",
  },
  other: {
    "theme-color": "#f13024",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/logo.svg?v=2" />
      </head>
      <body
        className={`${sora.variable} font-sora page bg-site text-white bg-cover bg-fixed bg-no-repeat relative bg-primary min-h-screen`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <aside>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#393a47",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </aside>
      </body>
    </html>
  );
}
