import React from "react";
import useReview from "../../Hooks/useReview";

const Reviews = () => {
  const [review] = useReview([]);
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-5xl">Our Reviews</h1>
        <h4 className="text-xl">What say our client about us</h4>
      </div>
      <div className=" grid  md:grid-cols-3 justify-content-center mx-40 gap-10">
        {review.map((feedback) => (
          <div key={feedback._id} class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="card-actions justify-end"></div>
              <p>
                <span className="font-bold">Comment: </span>
                {feedback.description}
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                {feedback.rating}
              </p>
              <p>{feedback.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
