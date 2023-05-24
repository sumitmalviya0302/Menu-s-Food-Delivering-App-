import { useEffect, useState } from "react"

const useRestaurantMenu = (resId) => {
    const [menu, setMenu] = useState([])

useEffect(()=>{
    getMenuDetails()
})

const getMenuDetails = async() =>{
    const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId="+resId+"&submitAction=ENTER")

    const json = await menuData.json();
    setMenu(json.data)
}

return menu
}

export default useRestaurantMenu