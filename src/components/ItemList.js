import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constant";

const ItemList = (data) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <>
      <div>
        {data?.items?.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between"
          >
            <div className="data font-semibold max-w-[72%] ">
              <span>{item.card.info.name}</span> -
              <span>
                &nbsp;₹
                {item.card.info.price === undefined
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
              <p className="font-thin">
                {item.card.info.description === undefined
                  ? ""
                  : item.card.info.description}
              </p>
            </div>
            <span>
              <img
                src={IMG_CDN_URL + item.card.info.imageId}
                className="w-[184px] h-[116px] block rounded-md"
              />

              <button
                className="border-solid border-2 border-indigo-600 px-6 py-1 rounded-md text-center mx-auto block"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
