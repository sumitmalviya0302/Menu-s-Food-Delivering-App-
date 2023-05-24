export const filterData = (searchText, restaurants) => {
    const filteredRestaurant = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredRestaurant;
  };