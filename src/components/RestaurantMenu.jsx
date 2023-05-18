import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const RestaurantMenu = () => {

    const params = useParams()
    const {resId} = params

    const [menu, setMenu] = useState([])

useEffect(()=>{
    getMenuDetails()
},[])

const getMenuDetails = async() =>{
    const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId="+resId+"&submitAction=ENTER")

    const json = await menuData.json();
    console.log(json)
    setMenu(json)
}

    return(
        <>
            <p>{resId}</p>
            <p>{menu?.data?.cards?.[0]?.card?.card?.info?.name}</p>
        </>
    )
}

export default RestaurantMenu