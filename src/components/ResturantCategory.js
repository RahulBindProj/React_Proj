import { useState } from "react";
import ItemList from "./ItemList";
// import UserContext from "../utils/UserContext";

const ResturantCategory = ({ data, showTitems, setShowIndex }) => {
  // const [showTitems, setshowTitems] = useState(false);
  const handleEvent = () => {
    setShowIndex();
  };

  return (
    <>
      {data?.title != undefined ? (
        <div className="category w-6/12 bg-slate-200 px-6 py-3 shadow-lg m-auto my-3">
          <div
            className="flex justify-between cursor-pointer "
            onClick={handleEvent}
          >
            <span className="font-bold text-lg">
              {data?.title}({data?.itemCards?.length})
            </span>
            <span>&#x2b07; &#xfe0f;</span>
          </div>
          {showTitems && <ItemList items={data?.itemCards} />}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ResturantCategory;
