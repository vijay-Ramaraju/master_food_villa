import { useEffect, useState } from "react";
import { Fetch_url_restaurant } from "../components/Contents";
const useFetchMenus = () => {
  const [allFilteredRestaurant, setAllFilteredRestaurant] = useState([]);

  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    const response = await fetch(Fetch_url_restaurant);
    const data = await response.json();
    const result =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setFilteredRestaurantList(result);

    setAllFilteredRestaurant(result);
  }
  return [
    allFilteredRestaurant,
    filteredRestaurantList,
    setFilteredRestaurantList,
  ];
};
export default useFetchMenus;
