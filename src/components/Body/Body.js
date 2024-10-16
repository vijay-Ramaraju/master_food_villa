  import { useState } from "react";
  import { Img_url, handleFiltered } from "../Contents";
  import Shimer from "../Shimer/Shimer";
  import { Link } from "react-router-dom";
  import useFetchMenus from "../../Utils/useFetchMenus";
  import useIsOnline from '../../Utils/useIsOnline'


  const Home = () => {
    const [searchInput, setSearchInput] = useState("");
    const isOnline = useIsOnline()
    const [
      allFilteredRestaurant,
      filteredRestaurantList,
      setFilteredRestaurantList,
    ] = useFetchMenus();
    const handleOnChange = (e) => {
      setSearchInput(e.target.value);
    };
    const handleButtonClick = () => {
      const data = handleFiltered(searchInput, allFilteredRestaurant);
      setFilteredRestaurantList(data);
    };

    return allFilteredRestaurant?.length === 0 ? (
      <div className="mt-[120px] flex justify-center mx-auto max-w-7xl">
        <Shimer />
      </div>
    ) : (
      <>
        <div className="font-sans flex flex-col gap-5 p-5 min-h-screen max-h-full mt-[120px]">
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
              className="p-2 text-md rounded-md bg-red-400 text-white font-semibold"
            >
              Search
            </button>

            <h1>{isOnline ? "🟢Online" : "🔴Offline"}</h1>
          </div>
          <div className="rounded-md h-full flex justify-center m-auto ">
            <ul className="flex flex-wrap gap-3 justify-start items-stretch w-full max-w-7xl">
              {filteredRestaurantList.length > 0 ? (
                filteredRestaurantList.map((each) => {
                  return (
                    <Link to={`/restaurant/${each.info.id}`} key={each.info.id}>
                      <li className="flex flex-col bg-white p-1 gap-2 shadow-md w-[290px] whitespace-wrap flex-1 min-h-[400px] h-full">
                        <img
                          className="h-[220px] w-full object-cover"
                          src={`${Img_url}${each.info.cloudinaryImageId}`}
                          alt=""
                        />
                        <h2 className="whitespace-wrap text-xl font-semibold">
                          {each.info.name}
                        </h2>
                        <h3 className="whitespace-normal break-words">
                          {each.info.cuisines.join(",")}
                        </h3>
                        <h4 className="whitespace-normal">
                          Rating: {each.info.avgRating}
                        </h4>
                        <h5 className="whitespace-wrap">
                          {each.info.locality}
                        </h5>
                      </li>
                    </Link>
                  );
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

  export default Home;
