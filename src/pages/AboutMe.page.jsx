import React from "react";
import imageUrl from "../assets/image.png";
import Counter from "../components/Counter.component";

const data = [
  {
    heading: (
      <>
        <Counter targetNumber={50} duration={1000} /> Projects
      </>
    ),
    description:
      "Throughout her carrer, Srishti has successfully completed over 40 projects, showcasing her ability to create scalable web applications that meet diverse user needs.",
  },
  {
    heading: (
      <>
        <Counter targetNumber={15} duration={1000} /> Awards
      </>
    ),
    description:
      "Her innovative approach has earned her 15 awards in design and development, reflecting her commitment to excellence and creativity.",
  },
  {
    heading: (
      <>
        <Counter targetNumber={500} duration={1000} /> Hours
      </>
    ),
    description:
      "Srishti has dedicated over 300 hours to volunteer work, helping others learn about technology and coding, which aligns with her values of collaboration and continuous learning.",
  },
  {
    heading: (
      <>
        <Counter targetNumber={300} duration={1000} /> Clients
      </>
    ),
    description:
      "She has collaborated over 150 clients, delivering tailored solutions that enhance user engagement and satisfaction.",
  },
];

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">About Srishti Gautam</h1>
        <p className="max-w-2xl mt-5">
          Discover the journey of a dedicated Full Stack Developer and UI/UX
          Designer. <br /> Srishti Gautam excels in creating seamless digital
          experiences that captivate users.
        </p>
      </div>

      {/* body */}
      <div className="flex justify-around gap-8 px-16">
        {/* left div -> contains sub sections */}
        <div className="max-w-3xl">
          {/* main center div */}
          <div className="text-center mb-10 ">
            <h1 className="font-semibold text-4xl">Srishti Gautam's Journey</h1>
            <p className="mt-5">
              Srishti Gautam is a dedicated Software Engineering student with a
              string foundation in Full Stack Development and UI/UX Design. Her
              journey began with a passion for technology, leading her to
              explore various projects that merge functionality with user
              experience.
            </p>
          </div>

          {/* four child divs */}
          <div className="flex flex-wrap justify-evenly">
            {data.map((item, index) => (
              <div key={index} className="mb-10 max-w-xs text-justify">
                <h1 className="font-semibold text-xl">{item.heading}</h1>
                <p className="max-w-2xl mt-5 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right div -> contains image */}
        <div className="flex justify-end items-center">
          <img
            className="object-cover object-center rounded-md"
            src={imageUrl}
            alt="dp"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
