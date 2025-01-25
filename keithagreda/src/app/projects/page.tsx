import React from "react";
import ProjectCard, { ProjectDto } from "../components/ProjectCard";
const projects: ProjectDto[] = [
  {
    id: 1,
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    imageUrl: "yaya",
    title: "Sample Project 1",
  },
  {
    id: 2,
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    imageUrl: "yaya",
    title: "Sample Project 2",
  },
  {
    id: 3,
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    imageUrl: "yaya",
    title: "Sample Project 3",
  },
];
const page = () => {
  return (
    <div className="flex flex-col gap-4">
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
};

export default page;
