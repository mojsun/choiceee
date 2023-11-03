import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
//for decode jwt
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";

import CountdownTimer from "./components/Timer/index";
import Home from "./pages/Home";
import Nav from "./components/Nav/index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer/index";
import ProductListmen from "./pages/ProductListmen";
import ProductListwomen from "./pages/ProductListwomen";
import ProductDetails from "./pages/ProductDetails";
import MenProductDetails from "./pages/MenProductDetails";
import OrderHistory from "./pages/OrderHistory";

const httpLink = createHttpLink({
  uri: "/graphql",
});
//we are chceking if we have token attach it to request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <CountdownTimer />
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/ProductListmen" element={<ProductListmen />} />
              <Route path="/ProductListwomen" element={<ProductListwomen />} />
              <Route
                path="/ProductDetails/:womenProductItems"
                element={<ProductDetails />}
              />
              <Route
                path="/MenProductDetails/:menProductItems"
                element={<MenProductDetails />}
              />
              <Route path="/OrderHistory" element={<OrderHistory />} />
              {/* <Switch>
                <Route path="/product/:category" component={ProductDetails} />
              </Switch> */}
            </Routes>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
