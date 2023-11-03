import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      price
      quantity
      size
      color
      image
      category
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
export const QUERY_WOMENCATEGORIES = gql`
  {
    womenProductItems {
      _id
      name
    }
  }
`;
export const QUERY_MENCATEGORIES = gql`
  {
    menProductItems {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    User {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
