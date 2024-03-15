import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d0a0d] to-[#1f0833ff] text-white py-10 md:py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl text-center md:text-left gap-4 mx-auto md:py-4">
        <div className="px-4 md:px-20 ">
          <div className="font-bold text-lg tracking-wider">Experience</div>
          <div className="">Software Developer</div>
          <div>Way WeDesign | Ernakulam,Kerala,India</div>
          <div>Dec 2022 - present</div>
        </div>
        <div className="px-4">
          <div className="font-bold text-lg tracking-wide">Education</div>
          <div>B.Tech in Computer Science & Engineering</div>
          <div>Government Engineering College Wayanad</div>
          <div>Aug 2016 - July 2020</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
