import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../scss/pages/ProductDetails.scss";
import { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS, UPDATE_CURRENT_PRODUCTS } from "../../utils/actions";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import "../../scss/components/ProductDetailsRightWomen.scss";
function ProductDetailsRightWomen(item) {
  const { womenProductItems } = useParams();
  const [state, dispatch] = useStoreContext();
  const { products } = state;
  const { name, _id, price, quantity } = item;

  const { cart } = state;
  const { loading, data: productsData } = useQuery(QUERY_ALL_PRODUCTS);
  useEffect(() => {
    if (productsData) {
      dispatch({
        type: UPDATE_PRODUCTS,
        productsData: productsData.products,
      });
    } else if (!loading) {
      idbPromise("products", "get").then((productsData) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          productsData: productsData,
        });
      });
    }
  }, [productsData, loading, dispatch]);
  // const handleClick = (id) => {
  //   dispatch({
  //     type: UPDATE_CURRENT_PRODUCTS,
  //     currentproductsData: id,
  //   });
  // };
  console.log("productsData:", productsData);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (
    !productsData ||
    !productsData.products ||
    productsData.products.length === 0
  ) {
    return <p>No products available.</p>;
  }

  const renderWomenProductCards = () => {
    const filteredProducts = productsData.products.filter(
      (product) =>
        product.name === womenProductItems && product.category === "women"
    );

    if (filteredProducts.length === 0) {
      return <p>No products available for this category.</p>;
    }
    // const addToCart = () => {
    //   const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    //   if (itemInCart) {
    //     dispatch({
    //       type: UPDATE_CART_QUANTITY,
    //       _id: _id,
    //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
    //     });
    //     idbPromise("cart", "put", {
    //       ...itemInCart,
    //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
    //     });
    //   } else {
    //     dispatch({
    //       type: ADD_TO_CART,
    //       product: { ...item, purchaseQuantity: 1 },
    //     });
    //     idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    //   }
    // };

    const addToCart = () => {
      const itemInCart = cart.find(
        (cartItem) =>
          cartItem._id === _id &&
          cartItem.name === name &&
          cartItem.price === price &&
          cartItem.price === quantity
      );

      if (itemInCart) {
        // If the item is already in the cart, update its quantity
        const newQuantity = parseInt(itemInCart.purchaseQuantity) + 1;

        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: _id,
          purchaseQuantity: newQuantity,
        });

        // Update the item's quantity in IndexedDB
        idbPromise("cart", "put", {
          ...itemInCart,
          purchaseQuantity: newQuantity,
        });
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        dispatch({
          type: ADD_TO_CART,
          product: { ...item, purchaseQuantity: 1 },
        });

        // Add the item to IndexedDB with a quantity of 1
        idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
      }
    };

    return filteredProducts.map((product) => (
      <div
        className="card p-4 m-4 d-inline-block border rounded-3 shadow"
        key={product._id}
      >
        <Link to={`/products/${product._id}`}>
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="card-imge border rounded-2"
          />
        </Link>
        <div className="card-body ">
          <ul className="list-unstyled d-flex flex-column justify-content-centre">
            <li>Name: {product.name}</li>
            <li>
              Price: <strong>${product.price}</strong>
            </li>
            <li>Color: {product.color}</li>
            <li>Size: {product.size}</li>
          </ul>
          <button
            // onClick={addToCart}
            className=" card-body-button btn btn-warning border rounded-3 p-2 w-100 text-white shadow "
          >
            <a href="#" className="text-decoration-none">
              Add to cart
            </a>
          </button>
        </div>
      </div>
    ));
  };

  return <div>{renderWomenProductCards()}</div>;
}

export default ProductDetailsRightWomen;
