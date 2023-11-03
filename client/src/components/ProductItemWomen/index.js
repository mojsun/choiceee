import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_WOMEN_PROUDUCTS,
  UPDATE_CURRENT_WOMEN_PROUDUCTS,
} from "../../utils/actions";
import { QUERY_WOMENCATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import "../../scss/components/ProductItemWomen.scss";
function ProductItem() {
  const [state, dispatch] = useStoreContext();

  const { womenProductItems } = state;

  const { loading, data: womenProductItemsData } = useQuery(
    QUERY_WOMENCATEGORIES
  );

  useEffect(() => {
    if (womenProductItemsData) {
      dispatch({
        type: UPDATE_WOMEN_PROUDUCTS,
        womenProductItems: womenProductItemsData.womenProductItems,
      });
      womenProductItemsData.womenProductItems.forEach((womenProductItems) => {
        idbPromise("products", "put", womenProductItems);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((womenProductItems) => {
        dispatch({
          type: UPDATE_WOMEN_PROUDUCTS,
          womenProductItems: womenProductItems,
        });
      });
    }
  }, [womenProductItemsData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_WOMEN_PROUDUCTS,
      currentWomenProductItems: id,
    });
  };

  return (
    <div>
      <div className="ProductItem-container d-flex justify-content-center align-items-center m-5  hstack gap-5">
        {womenProductItems.map((item) => (
          <Link to={`/ProductDetails/${item.name}/`} key={item._id}>
            <button
              key={item._id}
              onClick={() => {
                handleClick(item._id);
              }}
              className="ProductItem-container-button  "
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
