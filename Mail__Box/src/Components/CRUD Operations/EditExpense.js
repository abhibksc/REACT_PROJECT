import { DbUrl } from "../../Constants/URLs"
import GetExpense from "./GetExpense";


const EditExpense = async(userId,id,data)=>{

  const {  amount,category,description} = data;

    try {
      let response = await fetch(
        `${DbUrl}${userId}/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
           amount,
        description,
         category
          })
        }
      );
      let data = await response.json();
      if (data.error) return alert(data.error.message);
      else {
        return GetExpense(userId);
      }
    } catch (err) {
      console.log(err);
    }
}

export default EditExpense;