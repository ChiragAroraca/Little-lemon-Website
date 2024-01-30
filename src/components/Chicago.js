import React from "react";
import chef1 from "../images/chef1.jpg";
import chef2 from "../images/chef2.jpg";

const Chicago = () => {
  return (
    <>
      <div className="chicago-container">
        <div className="sub-container-1">
          <h1 className="chicago-h1">Little Lemon</h1>
          <h1 className="chicago-h2">Chicago</h1>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
            <br />
            <br />
            At Little Lemon, our passion is to embrace the timeless flavors of
            the Mediterranean, infusing them with a modern twist. We're a
            family-owned establishment dedicated to bringing you the
            heartwarming traditions of our heritage, one delectable dish at a
            time.
          </p>
        </div>
        <div className="sub-container-2">
          <img src={chef1} alt="" className="chicago-img1" />
          <img src={chef2} alt="" className="chicago-img" />
        </div>
      </div>
    </>
  );
};

export default Chicago;
