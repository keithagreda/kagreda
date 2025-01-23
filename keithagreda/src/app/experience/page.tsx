import React from "react";
import ExperienceCard from "../components/ExperienceCard";

export interface Experience {
  tenure: string;
  name: string;
  description: string;
}

const exps: Experience[] = [
  {
    tenure: "2020 - Present ",
    name: "Software Engineer",
    description:
      "Quisque at felis molestie elit euismod fermentum. Sed eros lorem, egestas ac leo at, lacinia dignissim dolor. Vivamus sit amet mi in nulla dictum scelerisque. Ut rutrum massa ipsum, id blandit nibh consectetur at",
  },
  {
    tenure: "2018 - 2019",
    name: "Frontend Developer",
    description:
      "Vestibulum tortor dolor, lobortis vel lorem ac, lobortis pharetra purus. Sed quis feugiat mi. Nunc vitae rutrum enim. Aenean sed erat consectetur, cursus nunc sit amet, bibendum lorem. Aliquam sit amet finibus dolor, interdum auctor ligula. Nunc nibh mauris, dapibus vel diam nec, lobortis venenatis nibh. Cras eleifend rhoncus nunc id dignissim. Etiam et elementum ipsum, sollicitudin elementum felis. Aliquam ultricies volutpat quam, non vulputate nulla laoreet rutrum.",
  },
  {
    tenure: "2016 - 2017",
    name: "Intern",
    description:
      "Quisque at felis molestie elit euismod fermentum. Sed eros lorem, egestas ac leo at, lacinia dignissim dolor. Vivamus sit amet mi in nulla dictum scelerisque. Ut rutrum massa ipsum, id blandit nibh consectetur at",
  },
];

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Experience</h1>
      {exps.map((exp, index) => (
        <ExperienceCard
          key={index}
          tenure={exp.tenure}
          description={exp.description}
          name={exp.name}
        />
      ))}
    </div>
  );
};

export default page;
