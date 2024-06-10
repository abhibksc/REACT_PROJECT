import {loginreducer, LoginSignUpSlicee} from "./LoginSignUpSlice";
import { configureStore } from "@reduxjs/toolkit";
import { addExpense } from "./AddExpenseSlice";




const Store = configureStore({
reducer : {
    auth : LoginSignUpSlicee,
    addExpense : addExpense,
    IsLogin : loginreducer
}
})

export default Store;