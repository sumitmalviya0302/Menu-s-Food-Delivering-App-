/* eslint-disable react/prop-types */

import { IMG_CDN_URL } from "../config";
const RestaurantCard = (props) => {
  
    const{name,cuisines,cloudinaryImageId,costForTwoString,minDeliveryTime,avgRating} = props;


  return (
    <>
      <div className="restaurant-card">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="image"
        />
        <h3>{name}</h3>
        <p>{cuisines}</p>
        <div className="essential-data">
            <p className="rating-star-style">&#9733; &nbsp;{avgRating}</p>
            <p>{minDeliveryTime}</p>
            <p>{costForTwoString}</p>
        </div>
        <div className="hover-restaurant-card">
            <hr />
            <p>Quick View</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
