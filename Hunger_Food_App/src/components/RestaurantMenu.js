import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import "/index.css";
import { useParams } from "react-router-dom";

const RestaurantMenu = (props) => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  console.log(resData);

  if (resData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, sla } = resData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {cards} = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

    const arr = cards.filter((e)=>  e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


  return (
    <div className=" flex flex-col flex-wrap mt-5">


      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-3xl ">{name}</h1>
        <p>{cuisines.join(",")}</p>
        <p>{areaName + " ," + sla.lastMileTravelString}</p>
      </div>


      <ul className=" p-2 m-2 gap-6 flex flex-col max-w-4xl self-center bg-red-400 rounded-md">
          {arr.map((item) => (
            <li className="p-2 rounded-sm flex flex-col gap-3  " key={item.card.card.title}>
              <h2 className="font-bold text-2xl" >{item.card.card.title}</h2>
              <ul className=" p-2 m-2 gap-6 flex flex-col max-w-4xl self-center bg-red-400 rounded-md">
          {item.card.card.itemCards.map((item) => (
            <li className="p-2 rounded-sm flex flex-col gap-3  " key={item.card.info.id}>
              <h2 className="font-bold text-2xl" >{item.card.info.name}</h2>
              <p className=" font-medium">{"Rs " + item.card.info.defaultPrice / 100}</p>
              <p>{item.card.info.description}</p><hr/>
            
             
            </li>
            // <p>{item.card.info.name}</p>
          ))}
        </ul>
            
             
            </li>
            // <p>{item.card.info.name}</p>
          ))}
        </ul>
















        {/* <ul className=" p-2 m-2 gap-6 flex flex-col max-w-4xl self-center bg-red-400 rounded-md">
          {itemCards.map((item) => (
            <li className="p-2 rounded-sm flex flex-col gap-3  " key={item.card.info.id}>
              <h2 className="font-bold text-2xl" >{item.card.info.name}</h2>
              <p className=" font-medium">{"Rs " + item.card.info.defaultPrice / 100}</p>
              <p>{item.card.info.description}</p><hr/>
            
             
            </li>
            // <p>{item.card.info.name}</p>
          ))}
        </ul> */}



      </div>
  );
};

export default RestaurantMenu;
