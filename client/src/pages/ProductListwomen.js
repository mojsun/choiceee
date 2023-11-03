import React, { useEffect } from "react";
import ProductItemWomen from "../components/ProductItemWomen";
import { useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
// import spinner from "../assets/spinner.gif";
import "../scss/pages/ProductList.scss";
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
          <source src="/videos/ProductList.mp4" type="video/mp4"></source>
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

      <section className="ProductList-main ">
        <h1 className="text-center pt-6 pb-4 text-warning ">Choose By Items</h1>
        <ProductItemWomen />
      </section>

      <section className="ProductList-details m-3 p-3 d-flex flex-row  ">
        <div className="ProductList-details-detail-1  col-md-6 ms-6">
          <h2 className="mb-5 mt-7">Discover Choice Women's Fashion </h2>
          <p className="mt-5 ms-3 me-7 lh-lg">
            for this paragraph gives me a title Choice, the epitome of style and
            sophistication, offers an exquisite range of women's clothing that
            effortlessly combines elegance with comfort. Our curated collection
            reflects the latest fashion trends, ensuring that every piece not
            only complements your individuality but also showcases the highest
            standards of craftsmanship and quality. From timeless classics to
            contemporary designs, Choice empowers women to express their unique
            sense of style and confidence through our meticulously crafted
            attire. Elevate your wardrobe with Choice, where fashion meets
            excellence, and experience the unparalleled joy of looking and
            feeling your best every day.
          </p>
          <button className="btn btn-warning mt-3">
            {" "}
            <a href="#" className="text-decoration-none">
              learn more
            </a>
          </button>
        </div>
        <div className="ProductList-details-picture-1 col-md-6">
          <img
            src="./images/ProductList-pictures/woman-yellow-3.jpg"
            alt="happy-woman"
          ></img>
        </div>
      </section>
      <section className="ProductList-details m-3 p-3 d-flex flex-row ">
        <div className="ProductList-details-picture-2 col-md-6 ms-6">
          <img
            src="./images/ProductList-pictures/shine-bright.jpeg"
            alt="happy-woman"
          ></img>
        </div>

        <div className="ProductList-details-detail-2   col-md-6 ">
          <h2 className="mb-5 mt-7">
            Elevating Women's Fashion to New Heights{" "}
          </h2>
          <p className=" pe-3 mt-5 ms-3 me-7 lh-lg">
            Choice, the epitome of style and sophistication, offers an exquisite
            range of women's clothing that effortlessly combines elegance with
            comfort. Our curated collection reflects the latest fashion trends,
            ensuring that every piece not only complements your individuality
            but also showcases the highest standards of craftsmanship and
            quality.<br></br> From timeless classics to contemporary designs,
            Choice empowers women to express their unique sense of style and
            confidence through our meticulously crafted attire. Elevate your
            wardrobe with Choice, where fashion meets excellence, and experience
            the unparalleled joy of looking and feeling your best every day.
          </p>
          <button className="btn btn-warning mt-3">
            <a href="#" className="text-decoration-none">
              learn more
            </a>
          </button>
        </div>
      </section>

      {/* <section className="ProductList-info">
       
      </section> */}
    </div>
  );
}

export default ProductList;
