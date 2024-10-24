
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'


import ItemsList from './ItemsList'

const TopPicksMenu = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);
  const [openedLists, setIsOpenedList] = useState("")
  
    const handleAccordian = (title) => {
        setIsOpen(!isOpen)
        setIsOpenedList(prev => {
            if (prev === title) {
                return ""
            } else {
                return title;
            }
        })
                  
  }
  


  
  return (
    <div className="text-left flex flex-col justify-between">
      {category.map((item) => {
        return (
          <div
            key={item?.card?.card?.title}
            className="w-full p-8 mt-2 rounded-lg my-3 shadow-2xl flex flex-col gap-2 justify-between py-2 border-b-2 bg-gray-100"
          >
            <div
              className="cursor-pointer flex justify-between items-center my-2"
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
            {openedLists === item?.card?.card?.title && (
              <div>
                
                  <ItemsList item={item?.card?.card?.itemCards} />
                
              </div>  
            )}
          </div>
        );
      })}
    </div>
  );
};
export default TopPicksMenu;
