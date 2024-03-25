import React, { ReactNode } from "react";
import { useProjectStore } from "./store";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./Projects";
type ProjectCardProps = {
  gradient: string;
  children: ReactNode;
} & CardProps;
type CardProps = {
  projectName: string;
};
const ProjectCard = ({ gradient, children, projectName }: ProjectCardProps) => {
  const inViewProject = useProjectStore((state) => state.inViewProject);
  return (
    <div
      className={`absolute inset-0 aspect-square w-full h-full bg-gradient-to-br transition-opacity  rounded-2xl ${gradient} ${
        inViewProject === projectName ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export const Church = ({ projectName }: CardProps) => {
  return (
    <ProjectCard
      projectName={projectName}
      gradient="from-[#f7f0ff] to-[#a78afe]"
    >
      <Image
        src="/church.png"
        alt="church"
        width={1024}
        height={1024}
        className="h-full w-full rounded-xl absolute top-0 left-0 right-0 bottom-0 shadow-lg"
      />

      <div className="text-white  absolute top-full tracking-wider py-5 text-sm">
        <p className="py-2">{projects[0].projectName}</p>
        <p className="md:invisible visible">{projects[0].paragraph}</p>
      </div>
      <Link
        href="https://londonchurch.vercel.app/"
        target="_blank"
        className="absolute z-10 bottom-6 right-6 rounded-xl bg-black  hover:bg-black/50 hover:text-red-500 font-bold text-white px-4 py-2 shadow-xl"
      >
        Live
      </Link>
    </ProjectCard>
  );
};

export const Restaurant = ({ projectName }: CardProps) => {
  return (
    <ProjectCard
      projectName={projectName}
      gradient="from-[#f5fbff] to-[#addeff]"
    >
      <Image
        src="/restaurant.avif"
        alt="restaurant"
        width={1024}
        height={1024}
        className="h-full w-full rounded-xl absolute top-0 left-0 right-0 bottom-0 shadow-lg"
      />
      <div className="text-white  absolute top-full tracking-wider py-5 text-md">
        <p className="py-2">{projects[1].projectName}</p>
        <p className="md:invisible visible">{projects[1].paragraph}</p>
      </div>
      <Link
        href="https://restaurants-rest.vercel.app/"
        target="_blank"
        className="absolute z-10 bottom-6 right-6 rounded-xl bg-black  hover:bg-black/50 hover:text-red-500 font-bold text-white px-4 py-2 shadow-xl"
      >
        Live
      </Link>
    </ProjectCard>
  );
};

export const CRM = ({ projectName }: CardProps) => {
  return (
    <ProjectCard
      projectName={projectName}
      gradient="from-[#f7f0ff] to-[#a78afe]"
    >
      <Image
        src="/crmimg.jpg"
        alt="crmt"
        width={1024}
        height={1024}
        className="h-full w-full rounded-xl absolute top-0 left-0 right-0 bottom-0 shadow-lg"
      />
      <div className=" text-white  absolute top-full tracking-wider py-5 text-sm">
        <p className="py-2">{projects[2].projectName}</p>
        <p className="md:invisible visible">{projects[2].paragraph}</p>
      </div>
      <Link
        href="https://crmwwd.vercel.app/"
        target="_blank"
        className="absolute z-10 bottom-6 right-6 rounded-xl bg-black  hover:bg-black/50 hover:text-red-500 font-bold text-white px-4 py-2 shadow-xl"
      >
        Live
      </Link>
    </ProjectCard>
  );
};
export const Youtube = ({ projectName }: CardProps) => {
  return (
    <ProjectCard
      projectName={projectName}
      gradient="from-[#f5fbff] to-[#addeff]"
    >
      <Image
        src="/youtubeapp.avif"
        alt="youtube"
        width={1024}
        height={1024}
        className="h-full w-full rounded-xl absolute top-0 left-0 right-0 bottom-0 shadow-lg"
      />
      <div className=" text-white  absolute top-full tracking-wider py-5 text-sm">
        <p className="py-2">{projects[3].projectName}</p>
        <p className="md:invisible visible">{projects[3].paragraph}</p>
      </div>
      <Link
        href="https://youtube-ajithdev.vercel.app/"
        target="_blank"
        className="absolute z-10 bottom-6 right-6 rounded-xl bg-black  hover:bg-black/50 hover:text-red-500 font-bold text-white px-4 py-2 shadow-xl"
      >
        Live
      </Link>
    </ProjectCard>
  );
};
export const Figma = ({ projectName }: CardProps) => {
  return (
    <ProjectCard
      projectName={projectName}
      gradient="from-[#f5fff7] to-[#adf8ff]"
    >
      <Image
        src="/figgm.png"
        alt="figma"
        width={1024}
        height={1024}
        className="h-full w-full rounded-xl absolute top-0 left-0 right-0 bottom-0 shadow-lg"
      />
      <div className=" text-white  absolute top-full tracking-wider py-5 text-sm">
        <p className="py-2">{projects[4].projectName}</p>
        <p className="md:invisible visible ">{projects[4].paragraph}</p>
      </div>
      <Link
        href="https://youtube-ajithdev.vercel.app/"
        target="_blank"
        className="absolute z-10 bottom-6 right-6 rounded-xl bg-black  hover:bg-black/50 hover:text-red-500 font-bold text-white px-4 py-2 shadow-xl"
      >
        Live
      </Link>
    </ProjectCard>
  );
};
