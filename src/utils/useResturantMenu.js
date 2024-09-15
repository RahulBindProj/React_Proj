import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constant";

const useResturantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const menuAPI = await fetch(MENU_API_URL + resId);
    const json = await menuAPI.json();
    setresInfo(json.data);
  };

  return resInfo;
};

export default useResturantMenu;
