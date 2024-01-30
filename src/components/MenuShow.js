import React from "react";
import headerImg from "../images/menu-images/platterapp.webp";
import greekSalad from "../images/menu-images/greek-salad.jpg";
import salmon from "../images/menu-images/salmondinner.webp";
import pork from "../images/menu-images/Pan-Seared-Pork-Chops.jpg";
import chicken from "../images/menu-images/Gnocchi-Chicken-Soup-cropped.jpg";
import burschetta from "../images/menu-images/brushetta.webp";
import lemon from "../images/menu-images/lemon-dessert.jpg";
import Swal from "sweetalert2";

const MenuShow = () => {
  function handleorder() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been processing.",
          icon: "success",
        });
      }
    });
  }
  return (
    <>
      <section className="dish-header">
        <div className="dish-header-img">
          <img src={headerImg} alt="" />
        </div>

        <div className="dish-menu">
          <h2>Our Menu</h2>
          <p>
            Celebrate the vibrant flavors of the Mediterranean, where every dish
            is a journey through sun-soaked landscapes and time-honored
            traditions. Experience a symphony of taste that transports you to
            the shores of the Mediterranean Sea, one exquisite bite at a time
          </p>
        </div>
      </section>
      <section className="menu-show">
        <div className="menu-container">
          <div className="cards">
            <div className="menu-items">
              <img src={greekSalad} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>Greek Salad</h5>
                  <p>$12.99</p>
                </div>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives, and
                  Chicago style feta cheese, garnished with crunchy garlic and
                  rosemary croutons.
                </p>
                <button className="orderBtn2" onClick={handleorder}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="menu-items">
              <img src={salmon} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>Salmon Fillet</h5>
                  <p>$15.99</p>
                </div>
                <p>
                  The salmon fillet is expertly seasoned with Mediterranean
                  spices, such as a blend of aromatic herbs, tangy lemon zest,
                  and a hint of garlic.
                </p>
                <button className="orderBtn2" onClick={handleorder}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="menu-items">
              <img src={pork} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>Pork & veggies</h5>
                  <p>$14.99</p>
                </div>
                <p>
                  This delightful dish showcases the flavors of pork infused
                  with the vibrant Mediterranean trio of tomatoes, onions, and
                  cilantro.
                </p>
                <button className="orderBtn2" onClick={handleorder}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="menu-items">
              <img src={chicken} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>Chicken Gnocchi Soup</h5>
                  <p>$11.99</p>
                </div>
                <p>
                  Bite-sized, pillowy dumplings simmered gently in chicken stock
                  are the epitome of comfort food. Throw in mushrooms, carrots,
                  celery and onions.
                </p>
                <button className="orderBtn2" onClick={handleorder}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="menu-items">
              <img src={burschetta} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>Bruschetta</h5>
                  <p>$16.99</p>
                </div>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil. It's
                  a great appetizer to start with!
                </p>
                <button className="orderBtn2" onClick={handleorder}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="menu-items">
              <img src={lemon} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>Lemon Dessert</h5>
                  <p>$5</p>
                </div>
                <p>
                  This comes straight from grandma's recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <button className="orderBtn2" onClick={handleorder}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuShow;
