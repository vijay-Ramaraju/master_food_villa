  import { useState, useContext } from "react";
  import { Img_url, handleFiltered } from "../Contents";
  import Shimer from "../Shimer/Shimer";
  import { Link } from "react-router-dom";
  import useFetchMenus from "../../Utils/useFetchMenus";
  import UserContext from "../../Utils/UserContext";
  import { IoIosStar } from "react-icons/io";

  const Home = () => {
    const [searchInput, setSearchInput] = useState("");
    const { loggedInUser, setUserName } = useContext(UserContext);
    
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
                  return (
                    <Link to={`/restaurant/${each.info.id}`} key={each.info.id}>
                      <li className="hover:shadow-2xl flex flex-col bg-gray-50 p-1 gap-2 shadow-md w-[290px] whitespace-wrap flex-1 min-h-[400px] h-full">
                        <div className="flex flex-col p-1">
                          <img
                            className="h-[220px] w-full object-cover rounded-lg"
                            src={`${Img_url}${each.info.cloudinaryImageId}`}
                            alt=""
                          />
                          <div className="absolute text-xl font-bold bg-black text-white m-auto rounded-md">
                            {each.info?.aggregatedDiscountInfoV3 && (
                              <div className="flex p-1 gap-1">
                                <p>
                                  {each.info?.aggregatedDiscountInfoV3.header}
                                </p>
                                <p>
                                  {
                                    each.info?.aggregatedDiscountInfoV3
                                      .subHeader
                                  }
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Name */}
                        <p className="whitespace-wrap text-xl font-semibold truncate">
                          {each.info.name}
                        </p>

                        {/* Cuisines */}
                        <p className="text-lg flex whitespace-normal break-words">
                          {each.info.cuisines.join(", ")}
                        </p>

                        {/* Rating */}
                        <p className="whitespace-normal text-lg flex items-center gap-1">
                          <IoIosStar /> {each.info.avgRating}
                        </p>

                        {/* Locality */}
                        <p className="whitespace-wrap truncate">
                          {each.info.locality}
                        </p>
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
