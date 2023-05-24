import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../config";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useAllRestaurant from "../utils/useAllRestaurant";



const Body = () => {

    const {searchText, allRestaurants, filteredRestaurant, onSearchChange, setFilteredRestaurant} = useAllRestaurant()
  

  return (allRestaurants.length === 0)?<Shimmer />: (
    <>
      <div className="my-4 mx-3">
        <div className="flex justify-center">
          <input
            type="search"
            placeholder="search for restaurant"
            onChange={onSearchChange}
            className="border w-80 rounded-md placeholder:text-center"
          />
          <button
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurant(data);
            }}
            className="ml-3 border shadow-md"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-between">
          {filteredRestaurant.map((restaurant) => (
            <Link className="link-style" to={'/restaurant/'+restaurant.data.id} key={restaurant.data.id}><RestaurantCard  {...restaurant.data} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
