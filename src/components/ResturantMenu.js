import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";
const ResturantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuAPI = await fetch(MENU_API_URL + resId);
    console.log(menuAPI);
    const json = await menuAPI.json();
    setresInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; // destructing on the fly

  // console.log(resInfo);

  return (
    <>
      <div className="menu">
        <h1 className="hotel-name">{name}</h1>
        <h2 className="menu-detail">
          {cuisines.join("")} - {costForTwoMessage}
        </h2>
        <h3 className="menu-title">Menu</h3>
        <ul className="menu-list">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResturantMenu;
