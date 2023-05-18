import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  const filteredRestaurant = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestaurant;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  },[]);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
  };

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
    searchText(setSearchText);
  };

  return (
    <>
      <div className="body-section">
        <div className="search-restaurant">
          <input
            type="search"
            placeholder="search for restaurant"
            onChange={onSearchChange}
          />
          <button
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurants-list">
          {filteredRestaurant.map((restaurant) => (
            <Link className="link-style" to='/restaurant/:resId' key={restaurant.data.id}><RestaurantCard  {...restaurant.data} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
