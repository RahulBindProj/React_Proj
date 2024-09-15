import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useResturantMenu } from "../utils/useResturantMenu";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";
const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card.card.info;

  const { itemCards } =
    // destructing on the fly
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="menu text-center">
        <h1 className="hotel-name text-2xl font-extrabold mb-3">{name}</h1>
        <h2 className="menu-detail">
          {cuisines?.join("")} - {costForTwoMessage}
        </h2>
        <ResturantCategory />
        {categories?.map((category, index) => (
          <ResturantCategory
            showTitems={index === showIndex ? true : false}
            key={category?.card?.card?.title}
            data={category?.card?.card}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
        {/* <h3 className="menu-title text-2xl font-extrabold mb-5">Menu</h3>
        <ul className="menu-list">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default ResturantMenu;
