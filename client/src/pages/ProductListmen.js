import React, { useEffect } from "react";
import ProductItemMen from "../components/ProductItemMen";
import { useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
// import spinner from "../assets/spinner.gif";
import "../scss/pages/ProductListMen.scss";
function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className=" ProductList my-2">
      <section className="ProductList-header">
        <video className="ProductList-header_Video" autoPlay muted loop>
          <source src="/videos/ProductDetailsMen.mp4" type="video/mp4"></source>
        </video>
        <div className="ProductList-header-text">
          <h1 className=" ProductList-header-text-1 text-white">
            ELEVATE YOUR STYLE,
          </h1>
          <h1 className="ProductList-header-text-2 text-white">
            WHERE FASHION MEETS INDIVISUALITY
          </h1>
          <button className="ProductList-header-text-3  p-2 text-warning border rounded-2">
            <a
              href="/"
              alt="link to home page"
              className="text-decoration-none "
            >
              WITH <strong>CHOICE</strong>
            </a>
          </button>
        </div>
      </section>

      <section className="ProductList-main">
        <h1 className="text-center pt-6 text-primary ">Choose By Items</h1>
        <ProductItemMen />
      </section>

      <section className="ProductList-details m-3 p-3 d-flex flex-row  ">
        <div className="ProductList-details-detail-1  col-md-6 ms-6">
          <h2 className="mb-5 mt-7">
            Elevate Your Style: Men's Fashion Redefined at Choice"
          </h2>
          <p className="mt-5 ms-3 me-7 lh-lg">
            At Choice, we take pride in offering an exceptional selection of
            men's clothing that exudes style and quality. Our diverse collection
            seamlessly fuses modern fashion trends with enduring classics,
            guaranteeing that each piece not only complements your personal
            style but also maintains the highest standards of craftsmanship.
            From refined formal attire to relaxed casual wear, Choice provides
            men with the freedom to express themselves with confidence. Upgrade
            your wardrobe with Choice, where fashion meets excellence, and revel
            in the pleasure of looking and feeling your best every day.
          </p>
          <button className="btn btn-primary mt-3">
            {" "}
            <a href="#" className="text-decoration-none text-dark">
              learn more
            </a>
          </button>
        </div>
        <div className="ProductList-details-picture-1 col-md-6">
          <img
            src="./images/ProductList-pictures/men-green-1.jpg"
            alt="happy-woman"
          ></img>
        </div>
      </section>
      <section className="ProductList-details m-3 p-3 d-flex flex-row ">
        <div className="ProductList-details-picture-2 col-md-6 ms-6">
          <img
            src="./images/ProductList-pictures/men-green-2.jpg"
            alt="happy-man"
          ></img>
        </div>

        <div className="ProductList-details-detail-2   col-md-6 ">
          <h2 className="mb-5 mt-7">
            Reimagining Men's Fashion: Choice's Distinctive Collection{" "}
          </h2>
          <p className=" pe-3 mt-5 ms-3 me-7 lh-lg">
            Choice presents a remarkable collection of men's clothing that
            embodies style, quality, and comfort. Our carefully curated range
            effortlessly blends contemporary trends with timeless classics,
            ensuring that every garment not only reflects your unique taste but
            also upholds the highest standards of craftsmanship. From
            sophisticated formal wear to versatile casual attire, Choice
            empowers men to embrace their individuality with confidence. Elevate
            your wardrobe with Choice, where fashion meets excellence, and enjoy
            the satisfaction of looking and feeling your best every day.
          </p>
          <button className="btn btn-primary mt-3">
            <a href="#" className="text-decoration-none text-dark">
              learn more
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
