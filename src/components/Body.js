import ResturantCard, { withOpenLabel } from "./ResturantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [searchText, setsearchText] = useState("");
  let [listOfResturants, setlistOfResturants] = useState([]);
  let [filteredResturants, setfilteredResturants] = useState([]);

  const RestaurantCardOpen = withOpenLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0693128&lng=72.842814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const resData = checkJsonData(json);

    setlistOfResturants(resData);
    setfilteredResturants(resData);

    //optional Chaining
    // setlistOfResturants(
    //   json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setfilteredResturants(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return <h1>Looks like your are offline</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  //coditional rendering
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* <div className="search-container">Search</div> */}
      <div className="filter flex items-center">
        <div className="search mt-3 mb-3">
          <input
            type="text"
            className="search-box border-solid border-black border"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="ml-5 bg-red-300 py-2 px-4 rounded-lg "
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
          className="filter-btn ml-5 bg-red-300 py-2 px-4 rounded-lg"
          onClick={() => {
            filterRest = listOfResturants.filter((res) => {
              // return res.info.rating.rating_text > 4;
              return res.info.avgRating > 4.5;
            });

            setlistOfResturants(filterRest);
          }}
        >
          Top Rated Resturant
        </button>
        <div className="search mt-3 mb-3 ml-10">
          UserName
          <input
            type="text"
            className="search-box border-solid border-black border p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="rest-container flex flex-wrap justify-center">
        {filteredResturants.map((resturant) => (
          <Link
            key={resturant?.info.id}
            to={"resturants/" + resturant?.info.id}
          >
            {resturant.info.isOpen ? (
              <RestaurantCardOpen restData={resturant} />
            ) : (
              <ResturantCard restData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
