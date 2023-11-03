import "intersection-observer"; // Import the intersection-observer polyfill
import React from "react";
import { useEffect } from "react";

import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart/index";
import { useState } from "react";
import "../scss/pages/home.scss";
import ChatWindow from "../components/chat/index";
import ChatButton from "../components/ChatButton/index";
import "../assets/js/chat";
import HandleScroll from "../assets/js/scroll";
import "../assets/js/popup-model";
export default function Home() {
  //****for making animation to start after that user scroll 20% of the height
  useEffect(() => {
    // Call the handleScroll function when the page loads
    HandleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", HandleScroll);
    };
  }, []); // Empty dependency array to run this effect only once

  //**** for having the minichat opens and closes
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <Cart />
      <section className="Popup-Model">
        <div className="Popup-Model-modal-container " id="modal-container">
          <div className="Popup-Model-modal d-flex flex-column ">
            <span
              className="close-button close-button-icon align-self-start"
              id="close-button"
            >
              &times;
            </span>
            <h1 className="p-1">Give 20$ ,Get 20$</h1>
            <h3 className="m-5">Refer friend and you both get discount</h3>
            <form className="Popup-Model-modal-form" id="modal-form">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <button type="submit">Submit</button>
              <div
                id="submitted-message"
                className="submitted-Message text-primary"
              >
                Form Submitted
              </div>
            </form>
          </div>
          <div className="Popup-Model-modal-2 ">
            <img
              src="./images/homepage-pictures/section-popular/image11.jpeg"
              alt="women in beautifull black dress"
            ></img>
          </div>
        </div>
      </section>
      <section className="headerVideo">
        <video className="headerVideo_content" autoPlay muted loop>
          <source src="/videos/header-video.mp4" type="video/mp4"></source>
        </video>
        <div className="headerVideo_text">
          <h1 className="headerVideo_text_h1">Your Choice</h1>
          {/* <h1 className="headerVideo_text_h2">Since 1985</h1> */}
          <h1 className="headerVideo_text_h3">Your Way</h1>
        </div>
      </section>

      <section className="CategoryMenu">
        <h1 className="text-center mt-7">Choose By Category</h1>
        <CategoryMenu />
        <img
          src="./images/woman6.png"
          alt="women-face"
          className="CategoryMenu-women"
        ></img>
        <img
          src="./images/man2.png"
          alt="men-face"
          className="CategoryMenu-men "
        ></img>
      </section>

      <section className="container">
        <img
          src="./images/homepage-pictures/section-picture/image7.jpeg"
          alt="model-women-one"
          className="left-to-right-1"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image3.jpeg"
          alt="model-men-one"
          className="right-to-left-1"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image4.jpeg"
          alt="model-women-one"
          className="left-to-right-2"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image17.jpeg"
          alt="model-men-one"
          className="right-to-left-2"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image8.jpeg"
          alt="model-women-one"
          className="left-to-right-3"
        ></img>
        <img
          src="./images/homepage-pictures/section-picture/image5.jpeg"
          alt="model-men-one"
          className="right-to-left-3"
        ></img>
      </section>

      <section className="latest-Trend ">
        <div className="  latest-Trend-all d-flex col-md-11 border rounded-end-5 flex-column bg-info  mt-7 pt-5">
          <div className="latest-Trend-header py-5 ps-8 d-flex  justify-content-between hstack gap-7">
            <h1 className="">
              Get The Latest Trends At Our <br></br>Affordable Prices
            </h1>
            <button className="me-8 p-3 border rounded-4 shadow bg-primary text-info ">
              Show Products
            </button>
          </div>
          <div className="latest-Trend-main mt-3 d-flex justify-content-center py-5 vstacl gap-5">
            <div className="col-md-3">
              <h1 className="mb-4">Elegance Suits</h1>
              <p>
                Elegance Suits embodies sophistication and style with its
                meticulously tailored suits, designed to elevate your wardrobe.
                Each suit exudes timeless elegance, crafted from premium
                materials and showcasing impeccable attention to detail. Whether
                for formal occasions or daily refinement, Elegance Suits ensures
                you make a lasting impression with every wear.
              </p>
              <a
                href="#"
                className="text-decoration-none"
                alt="show more details"
              >
                show more
              </a>
            </div>
            <div className="col-md-3">
              <h1 className="mb-4">Formal Clothes</h1>
              <p>
                Formal Clothes is your go-to destination for impeccable attire
                that makes a statement at every formal event. Our exquisite
                collection features finely tailored suits, tuxedos, and evening
                gowns, perfect for weddings, galas, and black-tie affairs. With
                a focus on quality, fit, and design, Formal Clothes ensures you
                radiate confidence and sophistication on every formal occasion.
              </p>
              <a
                href="#"
                alt="show more details"
                className="text-decoration-none"
              >
                show more
              </a>
            </div>
            <div className="col-md-3">
              <h1 className="mb-4">Leather Jacket</h1>
              <p>
                Leather Jackets at their finest! Our collection showcases
                premium leather jackets crafted with precision and style in
                mind. Whether you're seeking a classic biker look, a timeless
                bomber, or a contemporary design, our Leather Jackets offer both
                fashion-forward aesthetics and durability. Elevate your
                outerwear game with these versatile and iconic pieces that stand
                the test of time.
              </p>
              <a
                href="#"
                alt="show more details"
                className="text-decoration-none"
              >
                show more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Opinion">
        <div className="container ps-8 pe-8 my-7">
          <div className=" d-flex col-md-12 justify-content-center">
            <div className="Opinion-image col-md-5">
              <img
                src="./images/homepage-pictures/section-opinion/fabric-3.jpg"
                alt="Picture1"
                className="w-100 h-100"
              />
            </div>
            <div className="Opinion-details d-flex align-items-center col-md-5">
              <div className="Opinion-details-image  col-md-5">
                <img
                  src="./images/homepage-pictures/section-opinion/opinion-man3.jpg"
                  alt="Picture1"
                  className="w-75 h-75 py-3"
                />
              </div>
              <div className="Opinion-details-quote col-md-5">
                <h3> Choice Becomes Your Choice</h3>
                <p>
                  Choice becomes your ultimate fashion destination, where your
                  unique style finds a perfect match. we're offering you
                  selection of clothing
                </p>
                <h6> Andrea-lawrence/Fashion-Artist</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular">
        <h1 className="popular-header text-center p-5 m-5">
          Most popular clothes of the week
        </h1>
        <div className="carousel slide" id="slider">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex">
                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image11.jpeg"
                    alt="Picture1"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image12.jpeg"
                    alt="Picture2"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image13.jpeg"
                    alt="Picture3"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="d-flex">
                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image15.jpeg"
                    alt="Picture1"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image9.jpeg"
                    alt="Picture2"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image16.jpeg"
                    alt="Picture3"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="d-flex">
                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image6.jpeg"
                    alt="Picture1"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image2.jpeg"
                    alt="Picture2"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>

                <div>
                  <img
                    src="./images/homepage-pictures/section-popular/image14.jpeg"
                    alt="Picture3"
                    className="w-100 h-100"
                  />
                  <div className="carousel-caption d-none bg-secondary opacity-50">
                    <h5>mode1</h5>
                    <p>this is the first popular dress of the week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#slider"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#slider"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <ChatButton onClick={toggleChat} isOpen={isChatOpen} />
      {isChatOpen && (
        <div className="chat-overlay">
          <ChatWindow onClose={toggleChat} />
        </div>
      )}
    </div>
  );
}
