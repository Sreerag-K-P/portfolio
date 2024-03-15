"use client";
import Image from "next/image";
import React from "react";

const skillImages = [
  {
    src: "/htm.jpg",
  },
  {
    src: "/cs.jpg",
  },
  {
    src: "/jss.jpg",
  },
  {
    src: "/reactjs.jpg",
  },
  {
    src: "/nextjsimg.webp",
  },
  {
    src: "/tss.png",
  },
  {
    src: "/tw.jpg",
  },
  {
    src: "/gi.png",
  },
  {
    src: "/nodejs.jpg",
  },
  {
    src: "/mongodb.png",
  },
  {
    src: "/ver.png",
  },
  {
    src: "/netli.jpeg",
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
          <div className="pt-6 text-4xl font-bold tracking-wider">Skills</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center py-6 md:p-20 lg:p-10 gap-4 md:gap-8">
          {skillImages.map(({ src }) => (
            <div key={src}>
              <Image
                src={src}
                alt="reactjs"
                className="object-cover rounded-full w-28 h-28"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
