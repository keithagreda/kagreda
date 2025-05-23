import React from "react";
import style from "./ProjectCard.module.css";

export interface ProjectDto {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}
const ProjectCard: React.FC<ProjectDto> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div
      className={`${style.card} gap-4 hover:backdrop-blur-md hover:bg-[#042f42]/70 transition-all duration-300  rounded-lg hover:shadow-lg`}
    >
      {/* image div */}
      <div className="text-sm">
        <div className={`${style.projectImg}`}> </div>
      </div>
      <div className="flex flex-col">
        <div className={`${style.highlightTitle} text-base font-semibold`}>
          {title}
        </div>
        <div className="text-left">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
