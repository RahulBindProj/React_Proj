import { IMG_CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
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
      </div>
      {/* <div className="card">
        <img src={IMG_CDN_URL + restData.info.cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{restData.info.cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <span>
          <h4
            style={
              avgRatingString < 4
                ? { backgroundColor: "var(--light-red)" }
                : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {avgRatingString}
          </h4>
          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </span>
      </div> */}
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
