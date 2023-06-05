/* eslint-disable react/prop-types */

import { IMG_CDN_URL } from "../config";
const RestaurantCard = (props) => {
  
    const{name,cuisines,cloudinaryImageId,costForTwoString,minDeliveryTime,avgRating,user} = props;


  return (
    <>
      <div className="w-72 mt-5 box-border relative group border shadow-transparent ">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="image"
          className="block mx-auto w-64 h-44 mt-3"
        />
        <h3 className="ml-5 mt-2 font-bold">{name}</h3>
        <p className="mx-5 text-md from-neutral-800 overflow-clip mt-2 ">{cuisines}</p>
        <div className="flex justify-between mx-auto w-64 my-2 ">
            <p className="border border-solid border-green-500 bg-green-500 text-white">&#9733; &nbsp;{avgRating}</p>
            <p>{minDeliveryTime}</p>
            <p>{costForTwoString}</p>
        </div>
        <div className="hidden group-hover:block mt-2 border shadow-lg">
            <hr className="w-10/12 text-center mx-auto text-blue-600  " />
            <p className="text-center text-blue-600">Quick View</p>
        </div>
        <h1>{user.name}</h1>
      </div>
    </>
  );
};

export default RestaurantCard;
