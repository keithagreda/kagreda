import React, { forwardRef } from "react";
import ProjectCard, { ProjectDto } from "../ProjectCard";
const projects: ProjectDto[] = [
  {
    id: 1,
    title: "Alectric Engineering Services",
    description: "A professional service platform tailored for engineering consultations and project management.",
    imageUrl: "/alectricengineeringservices.webp",
    link: "https://alectric-solar-web.vercel.app",
  },
  {
    id: 2,
    title: "TG IceCubes GenSan",
    description: "The official web presence for TGIceCubes, showcasing their products and distribution network.",
    imageUrl: "/tgicecubes.webp",
    link: "https://tgicecubesgensan.vercel.app",
  },
  {
    id: 3,
    description:
      "A comprehensive POS and inventory system designed for TGIceCubes to streamline sales, track stock, and improve business efficiency.",
    imageUrl: "/tgicecubespos.webp",
    title: "TGIceCubes Point of Sales and Inventory Management System",
    link: "https://tgicecubes.up.railway.app",
  },
  {
    id: 4,
    description:
      "Designed specifically for the needs of an ice plant, this system makes it easy to monitor operations, spot issues early, and keep everything running at peak performance - with less stress and more insight.",
    imageUrl: "/rfiiiceplantpos.webp",
    title: "RFI Iceplant Monitoring System",
    link: "https://rfiiceplant.up.railway.app"
  },
  {
    id: 5,
    description:
      "A custom-built HR system designed to fit the unique workflow of the company - no templates, no shortcuts. It streamlines the hiring process, cuts down manual work, and supports a smooth shift to paperless operations.",
    imageUrl: "",
    title: "Brigada HRMS",
  },
];

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="group/list flex flex-col md:gap-12 px-1 md:px-0 md:pl-8 lg:pl-12">
      <h1 className="text-xl font-semibold">Projects</h1>
      {projects.map((prj, index) => (
        <ProjectCard
          key={index}
          title={prj.title}
          description={prj.description}
          imageUrl={prj.imageUrl}
          link={prj.link}
          id={index}
        />
      ))}
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
