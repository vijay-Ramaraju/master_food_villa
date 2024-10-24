import { useState, useContext, useEffect } from "react";
  import { Fetch_url_restaurant } from "../Contents";
  import Shimer from "../Shimer/Shimer";
import UserContext from "../../Utils/UserContext";
import { handleFiltered } from "../Contents";

  import RestaurantCard from './RestaurantCard'

  const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const { loggedInUser, setUserName } = useContext(UserContext);
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
           ?.restaurants || [];

       setFilteredRestaurantList(result);

       setAllFilteredRestaurant(result);
     }
    
    
    const handleOnChange = (e) => {
      setSearchInput(e.target.value);
    };
    const handleButtonClick = () => {
      const data = handleFiltered(searchInput, allFilteredRestaurant);
      setFilteredRestaurantList(data);
    };
console.log(filteredRestaurantList);
    return allFilteredRestaurant?.length === 0 ? (
      <div className="mt-[120px] flex justify-center mx-auto max-w-7xl">
        <Shimer />
      </div>
    ) : (
      <>
        <div className="font-sans flex flex-col gap-5 p-5 min-h-screen max-h-full ">
          <div className=" shadow-md  flex gap-3 items-center bg-pink-50 py-2 ">
            <input
              className="border-2 bg-orange-100 focus:bg-red-100 focus:border-orange-300  outline-none rounded-md p-2 text-md"
              type="search"
              value={searchInput}
              placeholder="Search item"
              onChange={handleOnChange}
            />
            <button
                onClick={handleButtonClick}
                data-testid="search"
              className="p-2 text-md rounded-md bg-red-400 text-white font-semibold"
            >
              Search
            </button>
            <div className="text-xl">
              <label>Username : </label>
              <input
                className="border border-gray-200 rounded px-2 py-1 outline-none"
                value={loggedInUser}
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="rounded-md h-full flex justify-center m-auto ">
            <ul className="flex flex-wrap gap-3 justify-start items-stretch w-full max-w-7xl">
              {filteredRestaurantList.length > 0 ? (
                filteredRestaurantList.map((each) => {
                  return <RestaurantCard each ={each} />
                                                   
                })
              ) : (
                <h1 className="flex justify-center text-4xl items-center">
                  Not found what your trying to search...!😪
                </h1>
              )}
            </ul>
          </div>
        </div>
      </>
    );
  };

export default Body;
