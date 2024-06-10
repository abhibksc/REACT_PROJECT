import { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { ContextApi } from "./Context/ContextApi";
 
const RestaurantCategory = ({ data }) => {
    console.log(data);
    const [ShowItems, setShowItems] = useState(false);

    // Abhi ke liye koi context use nahi ho raha hai.

    const handleClick = () => {
        
        if(ShowItems === false){
            setShowItems(true)
        }
        else {
            setShowItems(false)
        }
        
    }
    return (<li className="p-2 rounded-sm flex flex-col gap-3  " key={data.title}>
        <div className="flex justify-between" onClick={handleClick}>
            <h2 className="font-bold text-2xl text-left mx-12" >{data.title}</h2>
            <span>🔻</span>
        </div>
        {ShowItems && <ItemList key={data.title} items={data.itemCards} />}
    </li>)
}
export default RestaurantCategory;