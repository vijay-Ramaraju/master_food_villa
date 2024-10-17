import { IoIosStar } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'
import {Img_url} from '../Contents'

const TopPicksMenu = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openedLists,setIsOpenedList] = useState([])
  
    const handleAccordian = (title) => {
        setIsOpen(!isOpen)
        setIsOpenedList((prev) => {
            if (prev.includes(title)) {
                return prev.filter(each => each !== title)
        
            } else {
                return [...prev, title]
            }
})
        
            
    }
    console.log(category);
  return (
    <div className="text-left flex flex-col justify-between">
      {category.map((item) => {
        return (
          <div className="w-full p-8 mt-2 rounded-lg my-3 shadow-2xl flex flex-col gap-2 justify-between py-2 border-b-2 bg-gray-100">
            <div
              className="flex justify-between items-center my-2"
              onClick={() => handleAccordian(item?.card?.card?.title)}
            >
              <h2 className="text-2xl font-bold">
                {item?.card?.card?.title} ({item?.card?.card?.itemCards?.length}
                )
              </h2>
              <p className="text-3xl">
                <IoIosArrowDown />
              </p>
            </div>
            {openedLists.includes(item?.card?.card?.title) && (
              <div>
                {item?.card?.card?.itemCards.map((each) => {
                  return (
                    <div className=" border-b-2 gap-2 flex justify-between items-center border-gray-300 py-3">
                      <div className="w-9/12">
                        <h2 className="font-bold text-gray-600 text-2xl">
                          {each?.card?.info?.name}
                        </h2>

                        {each?.card?.info?.finalPrice ? (
                          <>
                            <span className="line-through">
                              {each?.card?.info?.defaultPrice
                                ? each?.card?.info?.defaultPrice / 100
                                : ""}
                            </span>{" "}
                            <span>₹{each?.card?.info?.finalPrice / 100}</span>
                          </>
                        ) : (
                          <p>₹{each?.card?.info?.price / 100}</p>
                        )}

                        {each?.card?.info?.ratings?.aggregatedRating
                          ?.rating && (
                          <p className="font-bold text-green-900 flex items-center gap-1  ">
                            <IoIosStar />
                            {
                              each?.card?.info?.ratings?.aggregatedRating
                                ?.rating
                            }{" "}
                            (
                            {
                              each?.card?.info?.ratings?.aggregatedRating
                                ?.ratingCountV2
                            }
                            )
                          </p>
                        )}
                        <p className="text-lg text-gray-500">
                          {each?.card?.info?.description}
                        </p>
                      </div>
                      <div className="w-3/12 p-4">
                        <img
                          className="shadow-sm h-40 w-full object-cover rounded-lg"
                          src={Img_url + each.card.info.imageId}
                          alt={each?.card?.info?.name}
                        />
                        <div className="absolute z-10">
                          <button className="bg-black text-white text-lg p-2 m-auto rounded-lg ">
                            Add +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default TopPicksMenu;
