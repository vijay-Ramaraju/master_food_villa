import { useState } from "react";
import { Img_url, handleFiltered } from "../Contents";
import Shimer from "../Shimer/Shimer";
import "./Body.css";
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
    <Shimer />
  ) : (
    <>
      <div className="home-main ">
        <div className="search-container">
          <input
            className="input-search"
            type="search"
            value={searchInput}
            placeholder="Search item"
            onChange={handleOnChange}
          />
          <button onClick={handleButtonClick} className="search-btn">
            Search
          </button>

            <h1>
            {isOnline ? "🟢Online":"🔴Offline"}
            </h1>
        </div>
        <ul className="restaurant-card">
          {filteredRestaurantList.length > 0 ? (
            filteredRestaurantList.map((each) => {
              return (
                <Link to={`/restaurant/${each.info.id}`} key={each.info.id}>
                  <li className="card">
                    <img
                      className="image"
                      src={`${Img_url}${each.info.cloudinaryImageId}`}
                      alt=""
                    />
                    <h2 className="main-headings">{each.info.name}</h2>
                    <h3 className="headings cuisines">
                      {each.info.cuisines.join(",")}
                    </h3>
                    <h4 className="headings">Rating: {each.info.avgRating}</h4>
                    <h5 className="headings">{each.info.locality}</h5>
                  </li>
                </Link>
              );
            })
          ) : (
            <h1>Not found what your trying to search...</h1>
          )}
        </ul>
      </div>
    </>
  );
};

export default Home;
