import { useEffect, useState } from "react";


const useFetchRestaurant = (props) => {
    const [restaurant, setRestaurant] = useState(null);
    const [title, setTitle] = useState("");
    
    useEffect(() => {
         getRestaurant();
    },[])
    async function getRestaurant() {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${props}&catalog_qa=undefined&submitAction=ENTER`
        );
        const data = await response.json();

        setRestaurant(Object.values(data)[1].cards[2]);
        setTitle(Object.values(data)[1].cards[0].card.card.text);

        console.log();
      } catch (error) {
        console.log("Failed to Fetch data", error);
      }
    }
    // console.log(id)
    return [restaurant,title];
}
export default useFetchRestaurant;