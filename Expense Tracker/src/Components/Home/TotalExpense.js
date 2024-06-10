import {  useSelector } from "react-redux"


const TotalExpense =()=>{

    let ex = useSelector((state) => state.addExpense.expense);
    let calculation = 0;

   if(ex !== undefined){
    ex.map((ele)=>{
        calculation = calculation + parseInt(ele.amount )
    })
   }

    return calculation;

}
export default TotalExpense;