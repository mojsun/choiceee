const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type categories {
    _id: ID
    name: String
  }
  type womenProductItems {
    _id: ID
    name: String
  }
  type menProductItems {
    _id: ID
    name: String
  }

  type products {
    _id: ID
    name: String
    image: String
    price: Float
    size: String
    color: String
    quantity: Int
    category: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [categories]
    products: [products]
    users: [User]
    womenProductItems: [womenProductItems]
    menProductItems: [menProductItems]

    user: User
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    updateProduct(_id: ID!, quantity: Int!): products

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
