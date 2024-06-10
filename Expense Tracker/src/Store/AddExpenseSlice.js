import { createSlice } from "@reduxjs/toolkit";



const AddExpenseSlice = createSlice({
    name : "AddExpenses",
    initialState : {
        expense : [],


        Updated_Amount : 'Empty',
        Updated_Description : 'Empty',
        Updated_Category : 'Empty',
        Updated_Id : "Empty",
        updation : "Empty"
    },
    reducers : {
        addItems(state, action){
            state.expense = action.payload;
        },
        clearItem(state){
            state.expense = [];
        },
        dltItem(state, action){
           state.expense =  state.expense.filter((exe)=>exe.id!=action.payload);
        },
        updateItem(state, action){
            let {amount, category, description, id, updations } = action.payload;
            console.log(amount, category, description, id);

            state.Updated_Amount = amount
            state.Updated_Description = description
            state.Updated_Category = category
            state.Updated_Id = id
            state.updation = updations
        }
    }
})

export const addExpense =  AddExpenseSlice.reducer;
export const {addItems,clearItem,dltItem,updateItem} = AddExpenseSlice.actions;
