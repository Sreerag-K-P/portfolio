import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const projects = [
    {
      projectName: "CRM Application",
      img: "/crmimg.jpg",
      paragraph:
        "Created this Customer Relationship Management(CRM) Software with NEXT.JS App Router feature . This software helps the company to  maintain their internal activities like add Leads and monitor     the different stages of work of the company send quatation to  the other companies. It also includes authentication(Login of specific users). Backend by using NODE.JS and database of MONGO DB",
      link: " ",
      stack:
        "Tech - NextJs 14, JavaScript, Tailwind CSS, Vercel, Git , NodeJs, Mongo DB",
    },
    {
      projectName: "Youtube Software Application",
      img: "/youtubeapp.avif",
      paragraph:
        "The Youtube Software application as same as working of Youtube functionalities of searching of videos, related videos, comments, channels etc..are added with a great user experience. Bulk amount of data from a server to your applications through API a great experience",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7134054513954488320/ ",
      stack:
        "Tech - NextJs 14, JavaScript, Tailwind CSS, Vercel, Rapid API, Git etc..",
    },
    {
      projectName: "Figma Designs",
      img: "/coverimage.png",
      paragraph:
        "As started as a frontend developer, I done a lot of Figma designs into frontend components and learn to do complex frontend designs to code. It gives a lot of confidense to write HTML and CSS to create any complex figma designs.And master TAILWIND CSS it is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      link: "https://figma-designs-ajithdev.vercel.app/",
      toKnow: " Click Here to know",
    },
    {
      projectName: "Music application",
      img: "/music.avif",
      paragraph:
        "Created this music application with REACT JS is a great experience in my web developer carrer. It teach me to how to code and make application to the end users. I improve my knowledge in tailwindcss and making API to fetch datas from external API'S to our applications.",
      link: "https://musicplayerajithdev.netlify.app",
      toKnow: " Click Here to know",
    },
  ];
  return (
    <div
      className="bg-gradient-to-r from-[#0d0a0d] to-[#1f0833ff] text-white"
      id="project"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-4xl font-bold tracking-wider">Projects</div>
        </div>
        <div className="p-10 flex flex-col gap-10">
          {projects.map(
            ({ projectName, img, paragraph, link, stack, toKnow }) => (
              <div
                key={projectName}
                className="bg-gradient-to-r from-blue-600 to-[#0f0c29] rounded-md p-4 "
              >
                <div className="text-center text-lg pb-4 text-white font-bold tracking-wider">
                  {projectName}
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <Image
                    src={img}
                    alt="figma"
                    className="object-cover rounded-md w-full md:w-auto"
                    width={200}
                    height={200}
                  />
                  <div className="p-4 leading-8 tracking-wide text-justify">
                    {paragraph}
                    <div>{stack}</div>
                  </div>
                </div>
                <Link href={link}>
                  <button className="px-4 py-2 text-center text-black rounded-md">
                    {toKnow}
                  </button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
