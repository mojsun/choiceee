import React from "react";
// import { Link } from "react-router-dom";
import "../../scss/components/Footer.scss";

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
function Footer() {
  return (
    <section className="Footer bg-info p-5">
      <section className="Footer-Header d-flex justify-content-between">
        <div className="Footer-Header-offers">
          <h2>Exclusive Offers</h2>
          <p>
            Discover exclusive offers that redefine luxury and savings in one
            delightful package.
          </p>
          <ul>
            <li>
              <a href="#">Offers For Summer</a>
            </li>
            <li>
              <a href="#">Sales of the month </a>
            </li>
            <li>
              <a href="#">End Seasone Sales</a>
            </li>
            <li>
              <a href="#">Hollowin Sales</a>
            </li>
          </ul>
        </div>

        <div className="Footer-Header-email me-7">
          <h2>What styles are you interested?</h2>

          <ul className="Footer-Header-email-details d-flex flex-row hstack gap-5 mt-4 list-unstyled me-3 ">
            <li>
              <a href="/ProductListwomen" className="text-decoration-none">
                Women
              </a>
            </li>
            <li>
              <a href="/ProductListmen" className="text-decoration-none">
                Men
              </a>
            </li>
          </ul>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email!"
              ></input>
              <button className="btn btn-outline-secondary">Submit</button>
            </div>
          </form>
        </div>
      </section>
      <section className="Footer-Main d-flex flex-row justify-content-between">
        <div className="Footer-Main-AboutUs">
          <h2>About Choice</h2>
          <ul>
            <li className="list-unstyled mb-2">
              Choice: Where Style Meets Individuality.
            </li>
            <li className="list-unstyled mb-2">
              Elevate Your Wardrobe with Choice.
            </li>
            <li className="list-unstyled mb-2">
              Unleash Your Fashion Freedom with Choice.
            </li>
          </ul>
        </div>
        <div className="Footer-Main-ContactUs me-7 d-flex flex-column align-items-start ">
          <h3 className="ps-6">Contact with Us Give us FeedBack!</h3>

          <div className="footer-social text-center ps-3">
            <a href="#">
              <i className="fab fa-facebook fa-3x text-primary m-5"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter fa-3x text-primary m-5"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin fa-3x text-primary m-5"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-3x text-primary m-5"></i>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Footer;
