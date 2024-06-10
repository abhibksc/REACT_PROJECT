import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../Store/AddExpenseSlice";
import PostExpense from "../CRUD Operations/PostExpense";
import { updateItem } from "../../Store/AddExpenseSlice";
import { useNavigate } from "react-router-dom";
import EditExpense from "../CRUD Operations/EditExpense";




const AddExpenses = () => {

    const {Updated_Amount,Updated_Description,Updated_Category,Updated_Id ,updation} = useSelector((state) => state.addExpense);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate()



    useEffect(()=>{

        if(updation == true){

            setAmount(Updated_Amount)
            setDescription(Updated_Description)
            setCategory(Updated_Category)

        }

    },[updation])

   

    const userId = useSelector((state)=>state.auth.userId);
    const dispatch = useDispatch();


    const handleForm = async(e)=>{
        e.preventDefault();


        if(updation === true){

            const obj1 = {
                amount : amount,
                description : description,
                category : category,
                id : Updated_Id,
                updations : true
            }
             dispatch(updateItem(obj1));
                let obj2 =  {
    
                    amount : amount ,
                    description : description,
                    category : category,
              
               
                }

              
                const update =  await EditExpense(userId, Updated_Id, obj2);
                if(update){
                    alert("Updated")
                }
                 navigate("/")



                const obj3 = {
                    amount : "Empty",
                    category : "Empty",
                    description : "Empty",
                    id : "Empty",
                    updations : "Empty"
                }



                 dispatch(updateItem(obj3));
  
        }
        else{
            let response = await PostExpense({amount,description,category,userId});
            setAmount("");
            setDescription("");
            setCategory("");
            dispatch(addItems(response));
            navigate("/")
        }
    }
    return <div className="div_20">
       <form onSubmit={handleForm} 
       data-aos="fade-up" 
       className="div_21">
       <h1 className="text-center font-bold">Add New Expenses</h1>
        <div className="flex justify-around mx-4">
            <label htmlFor="">Amount</label>
            <input id="Amount" 
            value={amount} 
            onChange={(e)=>setAmount(e.target.value)}  
            className="div_22" 
            type="number" 
            placeholder="Amount" />
        </div>
        <div className="flex justify-around ">
            <label htmlFor="">Description</label>
            <input id="description" 
            value={description} 
            onChange={(e)=>setDescription(e.target.value)} 
            className="div_22" 
            type="text"  
            placeholder="description"/>

        </div>
        <div className="flex justify-around text-right">
            <label htmlFor="">Category</label>
             <input id="category" 
             value={category} 
             onChange={(e)=>setCategory(e.target.value)} 
             className="div_22" 
             type="text"  
             placeholder="Category"/>

        </div>
        <button className="addbtn">{updation == "Empty" ? "Add" : "Update"}</button>
       </form>
    </div>
}

export default AddExpenses;