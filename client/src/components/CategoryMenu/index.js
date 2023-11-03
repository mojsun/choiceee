import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import "../../scss/components/CategoryMenu.scss";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="CategoryMenu-container d-flex justify-content-center align-items-center m-5 hstack gap-5">
      {categories.map((item) => (
        <Link
          to={item.name === "women" ? "/ProductListwomen" : "/ProductListmen"}
          key={item._id}
        >
          <button
            onClick={() => {
              handleClick(item._id);
            }}
            className="CategoryMenu-container-button p-5 m-5 fw-bold "
          >
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default CategoryMenu;

///////////111111111111111//////////////////
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { useStoreContext } from "../../utils/GlobalState";
// import {
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
// } from "../../utils/actions";
// import { QUERY_CATEGORIES } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// import "../../scss/components/CategoryMenu.scss";
// function CategoryMenu() {
//   const [state, dispatch] = useStoreContext();

//   const { categories } = state;

//   const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

//   useEffect(() => {
//     if (categoryData) {
//       dispatch({
//         type: UPDATE_CATEGORIES,
//         categories: categoryData.categories,
//       });
//       categoryData.categories.forEach((category) => {
//         idbPromise("categories", "put", category);
//       });
//     } else if (!loading) {
//       idbPromise("categories", "get").then((categories) => {
//         dispatch({
//           type: UPDATE_CATEGORIES,
//           categories: categories,
//         });
//       });
//     }
//   }, [categoryData, loading, dispatch]);

//   const handleClick = (id) => {
//     dispatch({
//       type: UPDATE_CURRENT_CATEGORY,
//       currentCategory: id,
//     });
//   };

//   return (
//     <div>
//       <div className="CategoryMenu-container d-flex justify-content-center align-items-center m-5 hstack gap-5">
//         if(categories[0])=>
//         {
//           <Link to="/ProductListwomen">
//             <button
//               key={item._id}
//               onClick={() => {
//                 handleClick(item._id);
//               }}
//               className="CategoryMenu-container-button p-5 m-5 "
//             >
//               {item.name}
//             </button>
//           </Link>
//         }
//         else if(categories[1])=>
//         {
//           <Link to="/ProductListmen">
//             <button
//               key={item._id}
//               onClick={() => {
//                 handleClick(item._id);
//               }}
//               className="CategoryMenu-container-button p-5 m-5 "
//             >
//               {item.name}
//             </button>
//           </Link>
//         }
//         {/* {categories.map((item) => (
//           <Link to="/ProductList">
//             <button
//               key={item._id}
//               onClick={() => {
//                 handleClick(item._id);
//               }}
//               className="CategoryMenu-container-button p-5 m-5 "
//             >
//               {item.name}
//             </button>
//           </Link>
//         ))} */}
//       </div>
//     </div>
//   );
// }
// export default CategoryMenu;
