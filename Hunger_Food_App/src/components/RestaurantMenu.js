import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import "/index.css";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = (props) => {
  const { resId } = useParams();
  const [shortArr, setShortArr] = useState([]);
  const [show, setShow] = useState(false);

  // useEffect(()=>{
  //   setShow(true);
  // },[])


  const resData = useRestaurantMenu(resId);
  console.log(resData);

  if (resData === null) {
    return <Shimmer />;
  }
  console.log(resData);

  const { name, cuisines, areaName, sla } = resData?.cards[2]?.card?.card?.info;


  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;




  const { cards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(resData);

  const arr = cards.filter((e) => e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(arr);


  const handleCategory = (item, e) => {
    console.log(e);
    const filter = cards.filter((ele)=>ele.card.card.title === item.card.card.title);
    console.log(filter);
    const filter2 =  filter[0].card.card.itemCards;
    console.log(filter2);
    setShortArr(filter2);
    setShow(true);

  }




  return (
    <div className=" flex flex-col flex-wrap mt-5">


      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-3xl ">{name}</h1>
        <p>{cuisines.join(",")}</p>
        <p>{areaName + " ," + sla.lastMileTravelString}</p>
      </div>

      
       <ul  className=" p-3 m-2 gap-6 flex flex-col w-screen max-w-5xl mx-auto  bg-stone-50 shadow-lg rounded-md">
        { arr.map((category)=>(
          <RestaurantCategory data = {category.card.card}/>
        ))}
       </ul>
     




     {/* { <ul className=" p-2 m-2 gap-6 flex flex-col max-w-4xl self-center bg-red-400 rounded-md">
        {arr.map((item) => (
          <li className="p-2 rounded-sm flex flex-col gap-3  " key={item.card.card.title}>
            <h2 onClick={(e) => (handleCategory(item, e))} className="font-bold text-2xl" >{item.card.card.title}</h2>


            {show && <ul className=" p-2 m-2 gap-6 flex flex-col max-w-4xl self-center bg-red-400 rounded-md">
              {shortArr.map((items) => (
                <li className="p-2 rounded-sm flex flex-col gap-3  " key={items.card.info.id}>
                  <h2 className="font-bold text-2xl" >{items.card.info.name}</h2>
                  <p className=" font-medium">{"Rs " + items.card.info.defaultPrice / 100}</p>
                  <p>{items.card.info.description}</p><hr />


                </li>
                // <p>{item.card.info.name}</p>
              ))}
            </ul>}


          </li>
          // <p>{item.card.info.name}</p>
        ))}
      </ul>} */}



















    </div>
  );
};

export default RestaurantMenu;
