/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_url } from "../Contents";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [title,setTitle] = useState("")
  const { id } = useParams();
  useEffect(() => {
    getRestaurant()
    

  },[id])
  // console.log(restaurant)
  async function getRestaurant() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await response.json()
      // console.log(response);
      
      setRestaurant(data?.data);
      
      setTitle(data?.data?.cards[0]?.card?.card?.text || "No Tittle Available");
      // console.log(data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    catch(error) {
      console.log('Failed to Fetch data',error)
    }
  }
  // console.log(restaurant);  
  if (!restaurant) {
    return <h1>Loading...</h1>
  }
  const mainCard = restaurant.cards[2].card.card.info;
  const reCommendedCards =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  console.log(reCommendedCards)
  // console.log(mainCard)
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
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <h2 style={{ fontSize: "32px" }}>{title}</h2>
      </div>

      <div
        style={{
          fontSize: "18px",
          border: "1px solid #dfdfdf",
          width: "50%",
          borderRadius: "24px",
          padding: "10px",
          boxShadow: "0px 10px 8px 10px #e4e5ea",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            padding: "0px",
          }}
        >
          <li style={{ listStyleType: "none" }}>
            <span>{mainCard.avgRating}</span>({" "}
            <span>{mainCard.totalRatingsString}</span> )
          </li>
          <li style={{ padding: "0px", listStyleType: "none" }}>
            {mainCard.costForTwoMessage}
          </li>
        </ul>
        <div
          style={{
            color: "#d7733f",
            fontSize: "24px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {mainCard.cuisines.map((cusin) => {
            return (
              <span style={{ textDecoration: "underline" }}>{cusin} </span>
            );
          })}
        </div>

        <p>{mainCard.locality}</p>
        <p>{mainCard.sla.slaString}</p>
      </div>

      {
        reCommendedCards.map(card => {
          return (
            <div key={card.card.info.id}>
              <h1>{card.card.info.name}</h1>
              <p>{card.card.info.description}</p>
              <p>{card.card.info.price}</p>
              <img src={`${Img_url}${card.card.info.imageId}`} />
            </div>
          );
        })
      }
    </div>
  );
}
export default RestaurantMenu;