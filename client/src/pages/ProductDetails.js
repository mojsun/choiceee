import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/pages/ProductDetails.scss";
import { useEffect } from "react";
import ProductDetailsRightWomen from "../components/ProductDetailsRightWomen/index";

function ProductDetails() {
  const { womenProductItems } = useParams();
  // const { name, id } = useParams();
  const [selectedSize, setSelectedSize] = useState(""); // State variable to store selected size
  const [productData, setProductData] = useState({
    image: "",
    name: "",
    price: 0,
    quantity: 0,
    size: "",
    color: "",
  });
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
  // Fetch product data or set it from your source here (e.g., an API call)

  useEffect(() => {
    // Simulated data fetching (replace with actual API call)
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(
          `http://localhost:3000/ProductDetails/${womenProductItems}/`
        );
        const data = await response.json();

        // Update productData state with the fetched data
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };

    // Call the fetchData function to fetch product data
    fetchData();
  }, [womenProductItems]);
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
  // Function to handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="ProductDetails mb-5">
      <div className="ProductDetails-Header p-4 ms-4">
        <h1 className="mt-3 mb-4 ">Details for {womenProductItems}</h1>
        <p className="lh-lg">
          <span className="text-warning fw-bold">Choice</span> is a reputable
          clothing company known for its commitment to delivering high-quality
          fashion options for both men and women. With a passion for style and a
          dedication to craftsmanship, Choice has gained a strong following
          among fashion enthusiasts seeking timeless and on-trend apparel. Their
          extensive collection features a diverse range of clothing items, from
          classic essentials to cutting-edge designs, ensuring that every
          customer can find the perfect pieces to express their individuality
          and elevate their wardrobe. Choice's unwavering focus on quality,
          paired with a keen sense of customer satisfaction, makes them a go-to
          destination for those who value both style and substance in their
          clothing choices.
        </p>
      </div>
      <div className="ProductDetails-Main d-flex flex-row ">
        <div className="ProductDetails-Main-Left col-md-3 d-flex flex-column ms-5 mt45">
          <div className="ProductDetails-Main-Left-size p-4 ">
            <h4>Choose The Size You Want</h4>
            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                Size
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedSize === "small" ? "active" : ""
                    }`}
                    onClick={() => handleSizeSelect("small")}
                  >
                    small
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedSize === "medium" ? "active" : ""
                    }`}
                    onClick={() => handleSizeSelect("medium")}
                  >
                    medium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`dropdown-item ${
                      selectedSize === "large" ? "active" : ""
                    }`}
                    onClick={() => handleSizeSelect("large")}
                  >
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
                className="btn btn-warning dropdown-toggle text-white"
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
          {/* <div className="ProductDetails-Main-Left-image-woman">
            <img src="../images/woman5.png" alt="women-face"></img>
          </div> */}
        </div>
        <div className="ProductDetails-Main-Right col-md-8  d-felx flex-row d-inline bg-warning boredr rounded-4 shadow ">
          <div className="product-card-container">
            <ProductDetailsRightWomen
              key={productData}
              item={productData} // Pass the fetched data as props
              selectedSize={selectedSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
