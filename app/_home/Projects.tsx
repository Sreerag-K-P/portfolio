"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Paragraph from "./Paragraph";
import { Church, CRM, Figma, Restaurant, Youtube } from "./ProjectCard";

export const projects = [
  {
    projectName: "Church App",
    img: "/church.png",
    paragraph:
      "Church App for given the details of specific church and their events, events comes from Content Management System (SANITY), SwiperJs is used for caurosal, aboutus page, site is mobile responsive, EmailJs is used for mailing.",
    link: "https://londonchurch.vercel.app/",
    toKnow: " Click Here to Watch",
    stack: "Tech - NextJs 14, TypeScript, Tailwind CSS, Vercel, Git , Sanity",
    card: Church,
  },
  {
    projectName: "Restaurant App",
    img: "/restaurant.avif",
    paragraph:
      "Restaurant application helps to list restaurants and their dishes, users can search by dishes, town, country. Add to favourite section is added, individual details page is created, fiter data by destinction, greenstar, daysopen, cusine, services/facilities, lower to higher. Pagination , near by restaurants, locations added. Mobile responsive. Content is comming from Content Management System(CMS) of Sanity.",
    link: "https://restaurants-rest.vercel.app/",
    toKnow: " Click Here to Watch",
    stack: "Tech - NextJs 14, TypeScript, Tailwind CSS, Vercel, Git , Sanity",
    card: Restaurant,
  },
  {
    projectName: "CRM Application",
    img: "/crmimg.jpg",
    paragraph:
      "Created this Customer Relationship Management(CRM) Software with NEXT.JS App Router feature . This software helps the company to  maintain their internal activities like add Leads and monitor     the different stages of work of the company send quatation to  the other companies. It also includes authentication(Login of specific users). Backend by using NODE.JS and database of MONGO DB",
    link: "https://crmwwd.vercel.app/",
    toKnow: " Click Here to Watch",
    stack:
      "Tech - NextJs 14, JavaScript, Tailwind CSS, Vercel, Git , NodeJs, Mongo DB",
    card: CRM,
  },

  {
    projectName: "Youtube Software Application",
    img: "/youtubeapp.avif",
    paragraph:
      "The Youtube Software application as same as working of Youtube functionalities of searching of videos, related videos, comments, channels etc..are added with a great user experience. Bulk amount of data from a server to your applications through API a great experience",
    link: "https://youtube-ajithdev.vercel.app/",
    toKnow: " Click Here to Watch",
    stack:
      "Tech - NextJs 14, JavaScript, Tailwind CSS, Vercel, Rapid API, Git etc..",
    card: Youtube,
  },
  {
    projectName: "Figma Designs",
    img: "/figgm.png",
    paragraph:
      "As started as a frontend developer, I done a lot of Figma designs into frontend components and learn to do complex frontend designs to code. It gives a lot of confidense to write HTML and CSS to create any complex figma designs.And master TAILWIND CSS it is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    link: "https://figma-designs-ajithdev.vercel.app/",
    toKnow: " Click Here to Watch",
    stack: "Tech - NextJs 13, TypeScript, Tailwind CSS, Vercel, Git etc..",
    card: Figma,
  },
];
const Projects = () => {
  return (
    <div
      className="bg-gradient-to-r  from-[#0d0a0d] to-[#1f0833ff] text-white pt-10"
      id="project"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center ">
          <div className="text-4xl font-bold tracking-wider z-10">Projects</div>
        </div>
        {/* <div className="p-10 flex flex-col gap-10">
          {projects.map(
            ({ projectName, img, paragraph, link, stack, toKnow }) => (
              <div
                key={projectName}
                className="bg-gradient-to-r from-[#29292e] to-[#37334e] rounded-md p-4"
              >
                <div className="text-center text-xl pb-4 text-white font-bold tracking-wider">
                  {projectName}
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full flex justify-center items-center lg:w-1/5">
                    <Image
                      src={img}
                      alt="figma"
                      className="object-cover h-60 rounded-md"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="p-4 w-full lg:w-4/5 leading-7 lg:leading-8 lg:tracking-wide text-justify">
                    {paragraph}
                    <div>{stack}</div>
                  </div>
                </div>
                <Link href={link} target="_blank">
                  <button className="px-4 py-2 bg-[#2a292c] text-sm m-3 text-center text-white rounded-md">
                    {toKnow}
                  </button>
                </Link>
              </div>
            )
          )}
        </div> */}
        <div className="flex w-full max-xl:px-12 max-md:flex-col-reverse items-start gap-20 max-lg:gap-5 mb-5">
          <div className="w-full py-[50vh] max-md:py-0 z-10 max-md:opacity-0 ">
            <ul>
              {projects.map((project) => (
                <li key={project.paragraph}>
                  <Paragraph projectName={project.projectName}>
                    {project.paragraph}
                  </Paragraph>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sticky top-0 flex h-screen max-md:h-[55vh] items-center max-lg:items-center">
            <div className="relative aspect-square w-full bg-gray-50/50 rounded-2xl">
              {projects.map((project) => (
                <project.card
                  projectName={project.projectName}
                  key={project.projectName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
