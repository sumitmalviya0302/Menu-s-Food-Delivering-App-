// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"



const RestaurantMenu = () => {

    const params = useParams()
    const {resId} = params

    const restaurantMenu = useRestaurantMenu()
    

    return(
        <>
            <p>{resId}</p>
            <p>{restaurantMenu?.cards?.[0]?.card?.card?.info?.name}</p>
        </>
    )
}

export default RestaurantMenu