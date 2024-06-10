import { DbUrl } from "../../Constants/URLs"
import GetExpense from "./GetExpense";


const DeleteExpense = async(userId,id)=>{

    console.log(userId, id);
    try {
      let response = await fetch(
        `${DbUrl}${userId}/${id}.json`,
        {
          method: "DELETE",
        }
      );

      alert("🗑 deleted")
  
      return GetExpense(userId);
    } catch (err) {
      console.log(err);
    }
}

export default DeleteExpense;