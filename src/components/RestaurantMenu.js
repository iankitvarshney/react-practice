import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // const [restaurant, setRestaurant] = useState();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant Id : {resId}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          className="restaurant-image"
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h2>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.city}</h2>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h2>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.costForTwo}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
            (card, index) => {
              return (
                <li key={index}>
                  <h3>{card?.card?.card?.title}</h3>
                  <ul>
                    {card?.card?.card?.title
                      ? card?.card?.card?.itemCards?.map((card) => (
                          <li key={card?.card?.info?.id}>
                            {card?.card?.info?.name}
                          </li>
                        ))
                      : null}
                  </ul>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
