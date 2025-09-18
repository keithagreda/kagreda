import React from "react";
import style from "./ExperienceCard.module.css";
import { Experience } from "./experience/Experience";

const ExperienceCard: React.FC<Experience> = ({
  tenure,
  description,
  name,
}) => {
  return (
    <>
      <div className="hover:backdrop-blur-md hover:bg-[#042f42]/70 transition-all duration-300  rounded-lg hover:shadow-lg">
        <div className={`${style.card} px-1  py-2 `}>
          <div className="text-sm">{tenure}</div>
          <div className={`${style.highlightTitle} text-base font-semibold`}>
            {name}
          </div>
          <div className="text-justify md:text-left">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
