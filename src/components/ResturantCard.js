import { IMG_CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, id, costForTwo, sla } =
    restData?.info; // optional chaining and destructiong
  return (
    <>
      <div className="rest-card">
        <img
          className="res-logo"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt=""
        />
        <h3 className="Amber-foods">{name}</h3>
        <br />
        <h4 className="cuisine">{cuisines.join(",")}</h4>
        <span className="rating">{avgRating} star</span>

        <span className="cost">{costForTwo}</span>

        <span className="eta">{sla.deliveryTime} minutes Away</span>
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

export default ResturantCard;
