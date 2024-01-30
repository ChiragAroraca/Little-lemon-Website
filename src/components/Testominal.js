import React from "react";
import card1 from "../images/profile1.jpg";
import card2 from "../images/profile2.jpg";
import card3 from "../images/profile3.jpg";
import card4 from "../images/profile4.jpg";

const Testominal = () => {
  return (
    <>
      <h1 className="testimonial-header">What people say?</h1>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <img src={card1} alt="" />
          <h3>Anthony Clinton</h3>
          <p>⭐⭐⭐⭐</p>
          <p>Awesome place peaceful atmosphere with delicious food</p>
        </div>
        <div className="testimonial-card">
          <img src={card2} alt="" />
          <h3>Maria Sanchez</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            My kids like the place they love the food here, they prefer to eat
            here than my home recipes., The food is good but not better than
            what my magical hands cooks.
          </p>
        </div>
        <div className="testimonial-card">
          <img src={card3} alt="" />
          <h3>Tamina Jackson</h3>
          <p>⭐⭐⭐</p>
          <p>
            I prefer this place more than any other restaurant than I have
            visited in this area the food is good here.
          </p>
        </div>
        <div className="testimonial-card">
          <img src={card4} alt="" />
          <h3>Brandon Ming</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            When I needed break from our insane Asian dishes this place is like
            Heaven to in and I love every moment that l get without eating Asian
            food.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testominal;
