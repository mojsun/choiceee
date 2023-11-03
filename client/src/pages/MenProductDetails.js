import React from "react";
import { useParams, Link } from "react-router-dom";
import "../scss/pages/ProductDetails.scss";
import { useEffect } from "react";
import ProductDetailsRightMen from "../components/ProductDetailsRightMen/index";

function MenProductDetails() {
  const { menProductItems } = useParams();

  const updateRangeValues = () => {
    const priceRange = document.getElementById("price-range");
    const rangeValueMin = document.getElementById("range-value-min");
    const rangeValueMax = document.getElementById("range-value-max");

    if (priceRange && rangeValueMin && rangeValueMax) {
      const [min, max] = priceRange.value.split(",");
      rangeValueMin.textContent = min;
      rangeValueMax.textContent = max;
    }
  };

  useEffect(() => {
    const priceRange = document.getElementById("price-range");

    if (priceRange) {
      // Add the event listener using the updateRangeValues function
      priceRange.addEventListener("input", updateRangeValues);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (priceRange) {
        priceRange.removeEventListener("input", updateRangeValues);
      }
    };
  }, []);

  return (
    <div className="ProductDetails">
      <div className="ProductDetails-Header p-4">
        <h1>Details for {menProductItems}</h1>
        <p>
          <span className="text-primary fw-bold">Choice</span> is renowned for
          its unwavering commitment to delivering exceptional quality in its
          men's products. With a meticulous attention to detail and a passion
          for craftsmanship, every Choice item reflects the brand's dedication
          to excellence. From finely tailored suits to everyday essentials,
          Choice offers a diverse range of clothing and accessories that not
          only exude style but also stand the test of time. Each product
          undergoes rigorous quality control to ensure durability and comfort,
          making Choice the go-to destination for those who seek both
          sophistication and substance in their wardrobe choices. When you
          choose Choice, you're choosing a standard of quality that elevates
          your personal style and enhances your confidence with every wear.
        </p>
      </div>
      <div className="ProductDetails-Main d-flex flex-row mb-5">
        <div className="ProductDetails-Main-Left col-md-3 d-flex flex-column">
          <div className="ProductDetails-Main-Left-size p-4 ">
            <h4>Choose The Size You Want</h4>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                Size
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" className="dropdown-item">
                    small
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    medium
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    large
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ProductDetails-Main-Left-color p-4">
            <h4>Choose The color You Want</h4>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                Color
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" className="dropdown-item">
                    black
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    blue
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    brown
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    green
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    white
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    orange
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    pink
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ProductDetails-Main-Left-price p-4">
            <h5>
              Price Range: $<span id="range-value-min">0</span> - $
              <span id="range-value-max">400</span>
            </h5>
            <input
              type="range"
              className="custom-range"
              id="price-range"
              min="0"
              max="400"
              step="50"
              value="0,400"
            ></input>
          </div>
          {/* <div className="ProductDetails-Main-Left-image-man">
            <img src="../images/men4.png" alt="women-face"></img>
          </div> */}
        </div>
        <div className="ProductDetails-Main-Right col-md-8 bg-primary d-felx flex-row d-inline border rounded-4 shadow">
          <div className="product-card-container">
            <ProductDetailsRightMen />
          </div>
        </div>
        <div className="col-md-1  "></div>
      </div>
    </div>
  );
}
export default MenProductDetails;
