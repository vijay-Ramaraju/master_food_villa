import { Img_url } from "../Contents";
import Shimer from "../Shimer/Shimer";
import { useParams } from "react-router-dom";
import useFetchRestaurant from "../../Utils/useFetchRestaurant";
import './Restaurant.css'


const RestaurantMenu = () => {
  const {id} = useParams()
  const [restaurant,title] = useFetchRestaurant(id)
  
  if (!restaurant) {
    return <Shimer />
  }
  const {
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    cloudinaryImageId,
  } = restaurant?.card?.card?.info;
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "14px",
      }}
    >
      <h1>RestaurantMenu Page,{id}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "10px" }}>{title}</h1>
        <div className="menu-card">
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <h3 style={{ padding: "0px", margin: "0px" }}>{avgRating} </h3>{" "}
              <h3 style={{ padding: "0px", margin: "0px" }}>
                ( {totalRatingsString})
              </h3>
              <h3 style={{ padding: "0px", margin: "0px" }}>
                {costForTwoMessage}
              </h3>
            </div>

            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              {cuisines.map((each,index) => {
                return <p key={index}>{each}</p>;
              })}
            </div>

            <h3 style={{ padding: "0px", margin: "0px" }}>
              Outlet: {areaName}
            </h3>
            <h3 style={{ padding: "0px", margin: "0px" }}>{sla.slaString}</h3>
          </div>
          <div>
            <img
              className="menu-image"
              src={`${Img_url}${cloudinaryImageId}`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h1>Recommended</h1>
      </div>
    </div>
  );
}
export default RestaurantMenu;