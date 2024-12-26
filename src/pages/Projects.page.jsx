import React from "react";
import ProjectCard from "../components/ProjectCard.component";
import image from "../assets/image.png";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">Explore My Projects</h1>
        <p className="max-w-xl mt-5">
          Dive into a collection of my work where technology meets design. Discover how I create seamless digital experiences.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl">Project Showcase</h2>
        <p className="max-w-xl mt-5">Explore my diverse projects that blend technology and design.</p>
        <div className="max-w-3xl my-5 flex justify-center flex-wrap gap-5">
          <ProjectCard name="Accumitt" imageUrl={image} description="Oil changes, tire rotations, and more to enhance performance and prevent future issues."/>
          <ProjectCard name="Accumitt" imageUrl={image} description="Oil changes, tire rotations, and more to enhance performance and prevent future issues."/>
          <ProjectCard name="Accumitt" imageUrl={image} description="Oil changes, tire rotations, and more to enhance performance and prevent future issues."/>
          <ProjectCard name="Accumitt" imageUrl={image} description="Oil changes, tire rotations, and more to enhance performance and prevent future issues."/>
          {/* <ProjectCard name="Accumitt" imageUrl={image} description="Oil changes, tire rotations, and more to enhance performance and prevent future issues."/> */}
          {/* <ProjectCard name="Accumitt" imageUrl={image} description="Oil changes, tire rotations, and more to enhance performance and prevent future issues."/> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
