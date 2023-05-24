import { useState, useEffect } from "react";


const useAllRestaurant = () =>{

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

  return {searchText, allRestaurants, filteredRestaurant, onSearchChange , setFilteredRestaurant }
}

export default useAllRestaurant