import React from "react";
import style from "./ProjectCard.module.css";

export interface ProjectDto {
  id: number;
  title: string;
  imageUrl?: string | null;
  description?: string | null;
}

const ProjectCard: React.FC<ProjectDto> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className={`${style.card} flex flex-col lg:flex-row gap-4 rounded-lg`}>
      {imageUrl && (
        <div className="text-sm">
          <div className={`${style.projectImg}`}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <div className={`${style.highlightTitle} text-base font-semibold`}>
          {title}
        </div>
        <div className="text-justify md:text-left">
          <p>{description ?? "No description available."}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
