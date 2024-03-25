import Image from "next/image";
import React from "react";
import portfolio from "../../public/ajithdev.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { MotionDiv } from "../components/motion/MotionDiv";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d0a0d] to-[#1f0833ff] ">
      <div className="p-8 md:p-20 max-w-screen-xl mx-auto  flex flex-col md:flex-row text-white">
        <MotionDiv
          className="flex justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: "1",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={portfolio}
            alt="portfolio"
            width={200}
            height={200}
            className="rounded-md  z-10 md:w-auto"
          />
        </MotionDiv>

        <MotionDiv
          initial={{ x: 100, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: "1",
          }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col py-6 md:px-10 lg:px-20 z-10"
        >
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
            <button className="bg-blue-500 font-semibold text-sm px-6 py-2 w-fit rounded-md mt-6">
              Get In Touch
            </button>
          </a>
          <div className="flex gap-4 pt-6">
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
        </MotionDiv>
      </div>
    </div>
  );
};

export default Hero;
