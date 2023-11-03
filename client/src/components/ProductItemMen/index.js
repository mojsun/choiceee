import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import "../../scss/components/ProductItemMen.scss";
import {
  UPDATE_MEN_PROUDUCTS,
  UPDATE_CURRENT_MEN_PROUDUCTS,
} from "../../utils/actions";
import { QUERY_MENCATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductItem() {
  const [state, dispatch] = useStoreContext();

  const { menProductItems } = state;

  const { loading, data: menProductItemsData } = useQuery(QUERY_MENCATEGORIES);

  useEffect(() => {
    if (menProductItemsData) {
      dispatch({
        type: UPDATE_MEN_PROUDUCTS,
        menProductItems: menProductItemsData.menProductItems,
      });
    } else if (!loading) {
      idbPromise("products", "get").then((menProductItems) => {
        dispatch({
          type: UPDATE_MEN_PROUDUCTS,
          menProductItems: menProductItems,
        });
      });
    }
  }, [menProductItemsData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_MEN_PROUDUCTS,
      currentmenProductItems: id,
    });
  };

  return (
    <div>
      <div className="ProductItem-container d-flex justify-content-center align-items-center m-5 hstack gap-5">
        {menProductItems.map((item) => (
          <Link to={`/MenProductDetails/${item.name}`} key={item._id}>
            <button
              key={item._id}
              onClick={() => {
                handleClick(item._id);
              }}
              className="ProductItemMen-container-button  "
            >
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ProductItem;
