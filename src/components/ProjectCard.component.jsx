import React from "react";
import Button from "./Button.component";

const ProjectCard = ({ name, imageUrl, description }) => {
  return (
    <div>
      <div key={name} className="group h-72 w-64 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
            {imageUrl && (
              <img
                className="object-cover cursor-pointer object-center h-full w-full rounded-xl"
                src={imageUrl}
                alt={name}
              />
            )}
            <p className="absolute inset-0 flex items-center justify-center text-center text-2xl font-bold text-white bg-black/60 rounded-xl">
              {name}
            </p>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-2">{name}</h2>
              <p className="text-md text-pretty text-center mb-2">
                {description}
              </p>
              <Button label="View Project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
