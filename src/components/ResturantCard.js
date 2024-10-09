import { IMG_CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// console.log(loggedInUser);

const ResturantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, id, costForTwo, sla } =
    restData?.info; // optional chaining and destructiong
  return (
    <>
      <div className="rest-card m-4 p-4 w-[300] rounded-md bg-gray-200 hover:shadow-lg">
        <img
          className="res-logo rounded-md"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt=""
        />
        <h3 className="rest-name  font-bold">{name}</h3>
        <h4 className="cuisine">{cuisines.join(",")}</h4>
        <p className="rating">{avgRating} star</p>
        <p className="cost">{costForTwo}</p>
        <p className="eta">{sla.deliveryTime} minutes Away</p>
        <p className="userName">User : {loggedInUser}</p>
      </div>
    </>
  );
};

//Higher Order Component - It takes component as a Input and return a component

export const withOpenLabel = (ResturantCard) => {
  //Compnent returning a function ,, iskliye humlog ne ye return main function ko return kiya hai
  return (props) => {
    //Ye retunr normal function main jaise JSX return krte hai woh hai yes
    return (
      <>
        <label className="bg-black px-3   py-1 absolute text-white rounded-md">
          Open Now
        </label>
        <ResturantCard {...props} />
      </>
    );
  };
};

export default ResturantCard;
