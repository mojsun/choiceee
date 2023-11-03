import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";
// 1) creating context
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    users: [],
    user: "",
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
    womenProductItems: [],
    currentWomenProductItems: "",
    menProductItems: [],
    currentmenProductItems: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
