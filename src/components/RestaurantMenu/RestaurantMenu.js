/* eslint-disable jsx-a11y/img-redundant-alt */
import { IoIosStar } from "react-icons/io";
import { Img_url } from "../Contents";
import Shimer from "../Shimer/Shimer";
import { useParams } from "react-router-dom";
import useFetchRestaurant from "../../Utils/useFetchRestaurant";
import TopPicksMenu from "./TopPicksMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, title, topPicks] = useFetchRestaurant(id);
  

  if (!restaurant) {
    return <Shimer />;
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

  const categoryData = topPicks.filter(
    (item) =>
      item.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex flex-col items-center py-5 ">
      <div className="w-full flex flex-col items-center ">
        <div>
          <h1 className="text-3xl font-bold text-left">{title}</h1>
        </div>

        <div className="p-5 rounded-lg my-3 shadow-2xl flex w-6/12 gap-2 justify-between items-center py-2 border-b-2 bg-gray-100">
          <div className="flex flex-col w-9/12 justify-between gap-[6px] text-2xl font-semibold   ">
            <div className="flex gap-2 items-center">
              <p className="flex items-center gap-1"><IoIosStar />{avgRating} </p> <p>( {totalRatingsString})</p>
              <p>{costForTwoMessage}</p>
            </div>

            <div className="flex gap-1 items-center text-orange-600 underline-offset-2 underline">
              {cuisines.map((each, index) => {
                return <p key={index}>{each}</p>;
              })}
            </div>

            <p>
              Outlet: <span className="text-gray-500">{areaName}</span>
            </p>
            <p>{sla.slaString}</p>
          </div>
          <div className="w-3/12 p-4">
            
            <img
              className="h-48 w-full object-cover rounded-lg"
              src={`${Img_url}${cloudinaryImageId}`}
              alt="Restaurant Image"
            />
          </div>
        </div>

        <div className="w-6/12 text-left items-start">
          <TopPicksMenu category={categoryData} />
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
