/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_url } from "../Contents";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [title,setTitle] = useState("")
  const { id } = useParams();
  useEffect(() => {
    getRestaurant()
    

  },[])
  // console.log(restaurant)
  async function getRestaurant() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await response.json()
    
      const json =
        data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    
      const menu = data.data?.cards[0]?.card?.card?.text || "Menu";
      setRestaurant(json);
      setTitle(menu);
      // console.log(data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);\
    }
    catch(error) {
      console.log('Failed to Fetch data',error)
    }
  }
  // console.log(title);
  console.log(restaurant);
    return (
      <>
        <h1>RestaurantMenu Page,{id}</h1>
        <h2>{title}</h2>
        
        {
          restaurant.map((each,index) => {
          return (
            <div key={index}>
              <h1>{each.card?.card?.title}</h1>
              {each.card?.card?.itemCards.length > 0?
              <div>{each.card?.card?.itemCards?.map((items,itemIndex) => {
                return (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <>
                  
                  {items.card.info?.imageId && (<img
                    key={itemIndex}
                    src={`${Img_url}/${items.card.info?.imageId}`}
                    />)}
                    </>
                );

              })}</div>
              
              :(each.card?.card?.categories?.itemCards)
            }
        }
          }
        
      </>
    );
}
export default RestaurantMenu;