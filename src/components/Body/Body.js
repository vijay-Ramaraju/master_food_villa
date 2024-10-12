import React, {useEffect, useState} from "react";
import { Img_url } from "../Contents";
import Shimer from "../Shimer/Shimer";
import "./Body.css";
import { Link } from "react-router-dom";


const handleFiltered = (searchInput, filteredRestaruntList) => {
  return filteredRestaruntList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()))
}

const Home = () => {
const [allFilteredRestaurant, setAllFilteredRestaurant] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaruntList ,setFilteredRestaruntList] = useState([])
  
  const handleOnChange = (e) => {
    setSearchInput(e.target.value) 
    

  }
  const handleButtonClick = () => {
    const data = handleFiltered(searchInput, allFilteredRestaurant);
    setFilteredRestaruntList(data);
  }


  useEffect(() => {
    
    handleFetch();
    
  },[]) 

  async function handleFetch() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const result =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   console.log(
    //  /data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   );
    setFilteredRestaruntList(result)
      // data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    
    setAllFilteredRestaurant(
      result
    );
   
  }
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
        </div>
        <ul className="restaurant-card">
            {(filteredRestaruntList.length > 0 ) ?
              (
                filteredRestaruntList.map((each) => {
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
                        <h4 className="headings">
                          Rating: {each.info.avgRating}
                        </h4>
                        <h5 className="headings">{each.info.locality}</h5>
                      </li>
                    </Link>
                  );
                })
              ) : <h1>Not found what your trying to search...</h1>}
        </ul>
      </div>
    </>
  );
};

export default Home;
