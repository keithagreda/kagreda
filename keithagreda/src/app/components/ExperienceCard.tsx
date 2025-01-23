import React from "react";
import style from "./ExperienceCard.module.css";

const ExperienceCard = () => {
  return (
    <div className={`${style.card} gap-4`}>
      <div className="">2023-PRESENT</div>
      <div className="text-left">
        Quisque at felis molestie elit euismod fermentum. Sed eros lorem,
        egestas ac leo at, lacinia dignissim dolor. Vivamus sit amet mi in nulla
        dictum scelerisque. Ut rutrum massa ipsum, id blandit nibh consectetur
        at
      </div>
    </div>
  );
};

export default ExperienceCard;
