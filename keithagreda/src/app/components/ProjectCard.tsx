import React from "react";
import Image from "next/image"; // Add this import
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
    <div className={`${style.card} flex flex-col lg:flex-row gap-4 rounded-lg px-2`}>
      {imageUrl && (
        <div className="text-sm">
          <div className={`${style.projectImg}`}>
            <Image 
              src={imageUrl}
              alt={title}
              width={200}
              height={200}
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