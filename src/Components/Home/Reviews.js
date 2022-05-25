import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sliderbg from "../../Assets/images/sliderbg.jpg";
import review1 from "../../Assets/images/review1.jpg";
import review2 from "../../Assets/images/review2.jpg";
import review3 from "../../Assets/images/review3.jpg";
import review4 from "../../Assets/images/review4.jpg";

const Reviews = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>OUR REVIEWS</h1>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        What Our Happy Clients say about us
      </p>

      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img
              className="slider-img mx-auto rounded-circle mb-3"
              src={review1}
              alt=""
            />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                For those of you who are serious about having more, doing more,
                giving more and being more, success is achievable with some
                understanding really no magic.
              </p>
              <h5>JONNA WILLIAMS</h5>
              <p className="degingnation">Customer</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img
              className="slider-img mx-auto rounded-circle mb-3"
              src={review2}
              alt=""
            />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                The first thing to remember about success is that it is a
                process – nothing more, nothing less. There is really no magic
                to it and it’s not reserved only for a select.
              </p>
              <h5>MICHEL BEAN</h5>
              <p className="degingnation">Client</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img
              className="slider-img mx-auto rounded-circle mb-3"
              src={review3}
              alt=""
            />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                Making a decision to do something – this is the first step. We
                all know that nothing moves until someone makes a decision. The
                first action is always
              </p>
              <h5>FELICIA QUEEN</h5>
              <p className="degingnation">Bussiness Man</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderbg} alt="First slide" />
          <Carousel.Caption>
            <img
              className="slider-img mx-auto rounded-circle mb-3"
              src={review4}
              alt=""
            />
            <div className="slider-text w-50 mx-auto">
              <p className="testimonial">
                Making a decision to do something – this is the first step. We
                all know that nothing moves until someone makes a decision. The
                first action is always.
              </p>
              <h5>MELISSA DOE</h5>
              <p className="degingnation">Dealer</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
