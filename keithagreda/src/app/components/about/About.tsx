import React, { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      style={{ cursor: "default" }}
      className="text-justify md:text-left"
    >
      <p>
        I’m <span className="highlight">Keith Agreda</span>, a{" "}
        <span className="highlight">full-stack web developer</span> who enjoys
        building <span className="highlight">reliable systems</span> and{" "}
        <span className="highlight">clean user experiences</span>. From{" "}
        <span className="highlight">efficient backend logic</span> to{" "}
        <span className="highlight">intuitive frontend interfaces</span>, I aim
        to craft products that not only{" "}
        <span className="highlight">work well</span>, but{" "}
        <span className="highlight">feel good to use</span>.
      </p>

      <p className="mt-5">
        Whether I’m <span className="highlight">refining a UI</span> or{" "}
        <span className="highlight">architecting scalable APIs</span>, I value{" "}
        <span className="highlight">clarity</span>,{" "}
        <span className="highlight">purpose</span>, and{" "}
        <span className="highlight">thoughtful design</span>. This site is a
        collection of what I’ve <span className="highlight">worked on</span> and{" "}
        <span className="highlight">learned along the way</span> - feel free to
        explore.
      </p>
    </div>
  );
});

About.displayName = "About";

export default About;
