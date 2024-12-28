import React from "react";
import bgVideo from "../assets/bgVideo.mp4";
import Button from "../components/Button.component";

const UiUxHero = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Content */}
      <div className="text-center text-white mb-10 max-w-xl">
        <h1 className="font-semibold text-4xl">
          Crafting Intuitive User Experiences
        </h1>
        <p className="my-5 font-semibold">
          Srishti Gautam specializes in UI/UX Design, focusing on creating
          visually appealing and user-centric designs. Her approach involves
          thorough research, prototyping, and testing to ensure that every
          design meets user expectations and enhances usability.
        </p>
        <div className="flex justify-center gap-5">
          <Button
            label="Explore Designs"
            className="border-2 border-white hover:bg-white hover:text-black"
          />
          <Button
            label="Contact Me"
            className="border-2 border-white hover:bg-white hover:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default UiUxHero;
