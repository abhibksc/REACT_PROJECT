
import { DbUrl } from "../../Constants/URLs"

const GetExpense = async (userId) => {

    let response = await fetch(`${DbUrl}${userId}.json`);

    let data = await response.json();


    if(data !== null){
            let arr = [];
            for (let key in data) {
                data[key].id = key;
                arr.push(data[key]);
            }
            arr = arr.reverse();
            return arr;

    }

 

}

export default GetExpense;