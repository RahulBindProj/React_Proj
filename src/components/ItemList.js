import { IMG_CDN_URL } from "../utils/constant";
const ItemList = (data) => {
  return (
    <>
      <div>
        {data?.items?.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between"
          >
            <div className="data font-semibold">
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
            <span className="flex flex-wrap justify-end ml-12 w-2/4">
              <img
                src={IMG_CDN_URL + item.card.info.imageId}
                className="w-[184px] h-[116px] block rounded-md"
              />
              <button className="border-solid border-2 border-indigo-600 px-6 py-1 rounded-md text-center mx-auto block">
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
