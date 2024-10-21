import { IoIosStar } from "react-icons/io";
import { Img_url } from "../Contents";  
import { addItems } from "../../Utils/Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const ItemsList = ({ item }) => {
    const dispatch = useDispatch();
    console.log(item)
  const handelAddItems = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      
          {item.map(each => {
              return (
                <div
                  key={each?.card?.info?.name}
                  className=" border-b-2 gap-2 flex justify-between items-center border-gray-300 py-3"
                >
                  <div className="w-9/12">
                    <h2 className="font-bold text-left text-gray-600 text-2xl">
                      {each?.card?.info?.name}
                    </h2>

                    {each?.card?.info?.finalPrice ? (
                      <>
                        <span className="line-through text-left text-lg font-semibold">
                          {each?.card?.info?.defaultPrice
                            ? each?.card?.info?.defaultPrice / 100
                            : ""}
                        </span>{" "}
                        <span className="text-left text-lg font-semibold">
                          ₹{each?.card?.info?.finalPrice / 100}
                        </span>
                      </>
                    ) : each?.card?.info?.price ? (
                      <p className="text-left text-lg font-semibold">
                        ₹{each?.card?.info?.price / 100}
                      </p>
                    ) : (
                      <p className="text-left text-lg font-semibold">
                        ₹{each?.card?.info?.defaultPrice / 100}
                      </p>
                    )}

                    {each?.card?.info?.ratings?.aggregatedRating?.rating && (
                      <p className="text-left font-bold text-green-900 flex items-center gap-1  ">
                        <IoIosStar />
                        {each?.card?.info?.ratings?.aggregatedRating?.rating} (
                        {
                          each?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </p>
                    )}
                    <p className="text-left text-lg text-gray-500">
                      {each?.card?.info?.description}
                    </p>
                  </div>
                  <div className="w-3/12 p-4 flex flex-col">
                    <img
                      className="shadow-md h-40 w-full object-cover rounded-lg"
                      src={Img_url + each.card.info.imageId}
                      alt={each?.card?.info?.name}
                    />
                    <div className="absolute bg-black text-white font-semibold mr-6 align-bottom rounded-lg p-2">
                      <button
                        onClick={() => handelAddItems(each)}
                        className="text-lg "
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              );
        })
         
        }
    </div>
  );
};
export default ItemsList;
