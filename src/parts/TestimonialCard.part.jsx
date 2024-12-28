import React from "react";
import StarRating from "../components/StarRating.component";

const TestimonialCard = ({ rating, comment, avatar }) => {
  return (
    <div className="flex flex-col gap-3 border border-black p-4 max-w-sm">
      <StarRating rating={rating} />
      <p className="text-sm">{comment}</p>
      <img
        src={avatar}
        alt="avatar"
        className="h-12 w-12 rounded-full object-center object-contain"
      />
    </div>
  );
};

export default TestimonialCard;
