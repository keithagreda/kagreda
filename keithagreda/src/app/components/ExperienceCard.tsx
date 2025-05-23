import React from "react";
import style from "./ExperienceCard.module.css";
import { Experience } from "../experience/page";

const ExperienceCard: React.FC<Experience> = ({
  tenure,
  description,
  name,
}) => {
  return (
    <>
      <div className="hover:backdrop-blur-md hover:bg-[#042f42]/70 transition-all duration-300  rounded-lg hover:shadow-lg">
        <div className={`${style.card} px-2 md:px-12 py-6 `}>
          <div className="text-sm">{tenure}</div>
          <div className={`${style.highlightTitle} text-base font-semibold`}>
            {name}
          </div>
          <div className="text-left">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
