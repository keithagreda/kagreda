import React, { forwardRef } from "react";
import ProjectCard, { ProjectDto } from "../components/ProjectCard";
const projects: ProjectDto[] = [
  {
    id: 1,
    description:
      "A custom-built HR system designed to fit the unique workflow of the company—no templates, no shortcuts. It streamlines the hiring process, cuts down manual work, and supports a smooth shift to paperless operations.",
    imageUrl: "yaya",
    title: "Brigada HRMS",
  },
  {
    id: 2,
    description:
      "Designed specifically for the needs of an ice plant, this system makes it easy to monitor operations, spot issues early, and keep everything running at peak performance—with less stress and more insight.",
    imageUrl: "yaya",
    title: "RFI Iceplant Monitoring System",
  },
  // {
  //   id: 3,
  //   description:
  //     "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
  //   imageUrl: "yaya",
  //   title: "Sample Project 3",
  // },
];

const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col md:gap-4 px-1 md:px-0">
      <h1 className="text-xl font-semibold">Projects</h1>
      {projects.map((prj, index) => (
        <ProjectCard
          key={index}
          title={prj.title}
          description={prj.description}
          imageUrl={prj.imageUrl}
          id={index}
        />
      ))}
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
