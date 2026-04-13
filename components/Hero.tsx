"use client";

import avatar from "@/app/public/avatar.jpg";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useEffect, useState } from "react";

const message = "Hi, I'm Judy.";
const heroTitleFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export default function Hero() {
  const [index, setIndex] = useState(0);
  const typingCompleted = index >= message.length;

  useEffect(() => {
    if (index < message.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index]);
  const displayText = message.slice(0, index);

  return (
    <section className="mx-auto flex min-h-120 max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
      <div className="relative mb-10 h-48 w-48 overflow-hidden rounded-full sm:h-56 sm:w-56 md:h-64 md:w-64 lg:w-72 lg:h-72">
        <Image
          src={avatar}
          alt="Judy avatar"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div>
        <h1
          className={`${heroTitleFont.className} text-3xl font-medium text-foreground sm:text-4xl md:text-5xl`}
        >
          {displayText}
        </h1>
        <div
          className={`mt-2 flex flex-col items-center justify-between gap-5 transition-all duration-800 ${
            typingCompleted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-muted-foreground text-2xl">
            Software Engineer & Full-stack web developer
          </span>
          <p className="max-w-3xl text-foreground text-xl sm:text-2xl leading-loose">
            I am passionate about building full-stack web applications using
            modern technologies, focusing on clean interfaces and user
            experience.
          </p>
          <div className="flex items-center gap-2">
            <a
              className="rounded-md p-2 hover:bg-gray-100"
              href="https://github.com/a1919727"
              aria-label="GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              className="rounded-md p-2 hover:bg-gray-100"
              href="https://www.linkedin.com/in/di-zhu-02052a264/"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              className="rounded-md p-2 hover:bg-gray-100"
              href="mailto:dizhu7439@gmail.com"
              aria-label="Email"
            >
              <CiMail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
