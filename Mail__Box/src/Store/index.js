import {loginreducer, LoginSignUpSlicee} from "./LoginSignUpSlice";
import { configureStore } from "@reduxjs/toolkit";
import { addExpense } from "./AddExpenseSlice";
import { Recived,Starred,Send, Expendations } from "./MailSlice";




const Store = configureStore({
reducer : {
    Expendation : Expendations,
    auth : LoginSignUpSlicee,
    recive : Recived,
    starred : Starred,
    send : Send,
    IsLogin : loginreducer
}
})

export default Store;