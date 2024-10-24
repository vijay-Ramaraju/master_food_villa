import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { Img_url} from "../Contents";


const RestaurantCard = ({ each }) => {
    
  return (
    <Link to={`/restaurant/${each.info.id}`} key={each.info.id}>
      <li className="hover:shadow-2xl font-sans rounded-lg flex flex-col bg-gray-200 p-1 gap-2 shadow-md w-[290px] whitespace-wrap flex-1 min-h-[400px] h-full">
        <div className="flex flex-col p-1">
          <img
            className="h-[220px] w-full object-cover rounded-lg"
            src={`${Img_url}${each.info.cloudinaryImageId}`}
            alt=""
          />
          <div className="absolute text-xl font-bold bg-black text-white m-auto rounded-md">
            {each.info?.aggregatedDiscountInfoV3 && (
              <div className="flex p-1 gap-1">
                <p>{each.info?.aggregatedDiscountInfoV3.header}</p>
                <p>{each.info?.aggregatedDiscountInfoV3.subHeader}</p>
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <p className="whitespace-wrap px-2 text-xl font-semibold truncate">
          {each.info.name}
        </p>

        {/* Cuisines */}
        <p className="text-lg px-2 flex whitespace-normal break-words">
          {each.info.cuisines.join(", ")}
        </p>

        {/* Rating */}
        <p className="px-2 whitespace-normal text-lg flex items-center gap-1">
          <IoIosStar /> {each.info.avgRating}
        </p>
        <p className="px-2 whitespace-normal text-lg flex items-center gap-1">
          {each.info.costForTwo}
        </p>
        {/* Locality */}
        <p className="px-2 whitespace-wrap truncate">{each.info.locality}</p>
      </li>
    </Link>
  );
};
export default RestaurantCard;
