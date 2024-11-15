import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  UPDATE_CURRENT_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
  UPDATE_WOMEN_PROUDUCTS,
  UPDATE_CURRENT_WOMEN_PROUDUCTS,
  UPDATE_MEN_PROUDUCTS,
  UPDATE_CURRENT_MEN_PROUDUCTS,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case UPDATE_CURRENT_PRODUCTS:
      return {
        ...state,
        currentProduct: action.currentProduct,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case UPDATE_WOMEN_PROUDUCTS:
      return {
        ...state,
        womenProductItems: [...action.womenProductItems],
      };

    case UPDATE_CURRENT_WOMEN_PROUDUCTS:
      return {
        ...state,
        currentWomenProductItems: action.currentWomenProductItems,
      };
    case UPDATE_MEN_PROUDUCTS:
      return {
        ...state,
        menProductItems: [...action.menProductItems],
      };

    case UPDATE_CURRENT_MEN_PROUDUCTS:
      return {
        ...state,
        currentmenProductItems: action.currentmenProductItems,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
