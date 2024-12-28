import React from "react";
import TestimonialCard from "../parts/TestimonialCard.part";
import image from "../assets/image.png";

const testimonials = [
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transforme our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transforme our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transforme our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transforme our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transforme our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transforme our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">What Clients Say</h1>
        <p className="max-w-xl mt-5">
          Discover how Srishti Gautam's experties in Full Stack Development and
          UI/UX Design has impressed clients. Her dedication to creating
          intuitive and scalable solutions is reflected in their feedback.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl">Client Testimonials</h2>
        <p className="text-center max-w-xl mt-5">
          Discover what clients say about Srishti's exceptional work in software
          design and development.
        </p>
        <div className="max-w-7xl my-5 flex justify-center flex-wrap gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              comment={testimonial.comment}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
