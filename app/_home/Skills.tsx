"use client";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "../components/motion/MotionDiv";
import Link from "next/link";
import { link } from "fs";

const skillImages = [
  {
    src: "/htm.jpg",
    link: "https://html.com/document/",
  },
  {
    src: "/cs.jpg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: "/jss.jpg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "/reactjs.jpg",
    link: "https://react.dev/",
  },
  {
    src: "/nextjsimg.webp",
    link: "https://nextjs.org/docs",
  },
  {
    src: "/tss.png",
    link: "https://www.typescriptlang.org/docs",
  },
  {
    src: "/tw.jpg",
    link: "https://tailwindcss.com/",
  },
  {
    src: "/gi.png",
    link: "https://git-scm.com/doc",
  },
  {
    src: "/nodejs.jpg",
    link: "https://nodejs.org/docs/latest/api/",
  },
  {
    src: "/mongodb.png",
    link: "https://www.mongodb.com/docs/",
  },
  {
    src: "/ver.png",
    link: "https://vercel.com/docs",
  },
  {
    src: "/netli.jpeg",
    link: "https://docs.netlify.com/",
  },
];

const Skills = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#0d0a0d] to-[#1f0833ff] text-white"
      id="skills"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="pt-6 text-4xl font-bold tracking-wider z-10">
            Skills
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center py-6 md:p-20 lg:p-10 gap-4 md:gap-8">
          {skillImages.map(({ src, link }) => (
            <MotionDiv
              className="z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              key={src}
            >
              <Link href={`${link}`} target="_blank">
                <Image
                  src={src}
                  alt="reactjs"
                  className="object-cover  rounded-full w-28 h-28"
                  width={200}
                  height={200}
                />
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
