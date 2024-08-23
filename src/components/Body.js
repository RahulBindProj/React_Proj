import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  let [searchText, setsearchText] = useState("");

  let [listOfResturants, setlistOfResturants] = useState([]);
  let [filteredResturants, setfilteredResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0693128&lng=72.842814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistOfResturants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredResturants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //coditional rendering
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* <div className="search-container">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the resturant cards and update the UI.
              // To perfom this searchbox value required
              const filteredRest = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRest.tolowerC);

              setfilteredResturants(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterRest = listOfResturants.filter((res) => {
              // return res.info.rating.rating_text > 4;
              return res.info.avgRating > 4;
            });

            setlistOfResturants(filterRest);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="rest-container">
        {/* {console.log(resturant.info)} */}
        {filteredResturants.map((resturant) => (
          <Link
            key={resturant?.info.id}
            to={"resturants/" + resturant?.info.id}
          >
            <ResturantCard restData={resturant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
