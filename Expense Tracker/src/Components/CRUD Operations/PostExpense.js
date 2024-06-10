import { DbUrl } from "../../Constants/URLs"

import GetExpense from "./GetExpense";

const PostExpense = async (payload) => {
    const { amount, description, category, userId } = payload;

    let response = await fetch(`${DbUrl}${userId}.json`,
        {
            method: "POST",
            body: JSON.stringify({
                amount,
                description,
                category
            })
        }
    );

    let data = await response.json();

    if(data.error){
        return alert(data.err.message);
    }
    else{
       alert("Item Added");
       return GetExpense(userId);
    }



}

export default PostExpense