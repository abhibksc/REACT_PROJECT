
import { useEffect , useState} from "react";
import { MENU_URL } from "../utils/constants";


const useRestaurantMenu = (resId)=>{


    const [resData, setResData] = useState(null);
    
  
  
    useEffect(() => {
      resinfo();
    }, []);
  
    const resinfo = async () => {
      const dataa = await fetch(MENU_URL + resId);
      const jsons = await dataa.json();
      setResData(jsons.data);
      console.log(jsons.data);
    };


    return resData;
}

export default useRestaurantMenu;