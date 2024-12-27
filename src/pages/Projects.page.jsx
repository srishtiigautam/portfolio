import React from "react";
import ProjectCard from "../components/ProjectCard.component";
import accumitt from "../assets/image.png";

const projects = [
  {
    name: "Accumitt",
    imageUrl: accumitt,
    description:
      "Accumitt is an AI powered accupressure gloves that targets specific points based on the symptoms.",
  },
  {
    name: "Sahayak",
    imageUrl: accumitt,
    description:
      "Sahayak is a public grievances redressal portal for villagers that connet people directly to local authorities.",
  },
  {
    name: "Google Meet Summarizer",
    imageUrl: accumitt,
    description:
      "This is an AI powered meeting summarizes chrome extension that summarizes you meetings into note format.",
  },
  {
    name: "RestoreHealth",
    imageUrl: accumitt,
    description:
      "Desktop application for comprehensive patient data management including information like patient history.",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">Explore My Projects</h1>
        <p className="max-w-xl mt-5">
          Dive into a collection of my work where technology meets design.
          Discover how I create seamless digital experiences.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl">Project Showcase</h2>
        <p className="max-w-xl mt-5">
          Explore my diverse projects that blend technology and design.
        </p>
        <div className="max-w-6xl my-5 flex justify-center flex-wrap gap-5">
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              imageUrl={project.imageUrl}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
