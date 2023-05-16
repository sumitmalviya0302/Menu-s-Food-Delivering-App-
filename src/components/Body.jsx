import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const Body = () => {

   const [searchText , setSearchText] = useState("");


   const onSearchChange = (e) =>{
    setSearchText(e.target.value)
    searchText(setSearchText)
   }

  return (
    <>
      <div className="body-section">
        <div className="search-restaurant">
          <input type="search" placeholder="search for restaurant" onChange={onSearchChange}/>
          <button>Search</button>
        </div>
        <div className="restaurants-list">
        {
            restaurantList.map((restaurant)=>(
                <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            ))
        }
          
        </div>
      </div>
    </>
  );
};

export default Body;
