import React from "react";
import style from "./ExperienceCard.module.css";
import { Experience } from "../experience/page";

const ExperienceCard: React.FC<Experience> = ({
  tenure,
  description,
  name,
}) => {
  return (
    <div className={`${style.card} gap-4`}>
      <div className="text-sm">{tenure}</div>
      <div className="text-base font-semibold">{name}</div>
      <div className="text-left">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
