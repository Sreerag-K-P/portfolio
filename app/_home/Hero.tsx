import Image from "next/image";
import React from "react";
import portfolio from "../../public/ajithdev.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d0a0d] to-[#1f0833ff]">
      <div className="p-8 md:p-20 max-w-screen-xl mx-auto  flex flex-col md:flex-row text-white">
        <div className="flex justify-center items-center">
          <Image
            src={portfolio}
            alt="portfolio"
            width={200}
            height={200}
            className="rounded-md  md:w-auto"
          />
        </div>
        <div className="flex flex-col py-6 md:px-10 lg:px-20">
          <h1 className="text-3xl md:text-4xl">
            Hey, I&apos;m
            <span className="font-bold text-blue-500"> Ajithdev C</span>
          </h1>

          <h2 className="mt-2">
            <span className="font-medium">Software Developer,</span> passionate
            to develop
            <br /> websites and softwares for the people&apos;s
          </h2>
          <h3 className="italic mt-2">
            &quot;Learn my self | Acquire knowledge from others | Teach to
            fellow&apos;s&quot;
          </h3>
          <a href="#contact">
            <button className="bg-blue-500 font-semibold px-4 py-2 w-fit rounded-md mt-6">
              Get In Touch
            </button>
          </a>
          <div className="flex gap-4 py-4">
            <Link
              href="https://www.linkedin.com/in/ajithdev-c/"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/Ajithdev444" target="_blank">
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
