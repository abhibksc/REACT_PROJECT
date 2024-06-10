import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
  
      <div className=" p-2 m-2 flex flex-col bg-transparent  rounded-lg w-56 transition-transform duration-300 hover:scale-90 ">
      <img
        className="w-48 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <div className="flex flex-col">
        <h3>{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  
  );
};

export default RestaurantCard;
