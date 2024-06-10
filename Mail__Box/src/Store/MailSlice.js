import { createSlice } from "@reduxjs/toolkit";


import { createSlice } from '@reduxjs/toolkit';

const ExpendationSlice = createSlice({
  name: 'Expendation',
  initialState: {
    expendation: false,
  },
  reducers: {
    toggleExpendation(state) {
      state.expendation = !state.expendation;
    },
  },
});




export const Expendations = ExpendationSlice.reducer;
export const {toggleExpendation} = ExpendationSlice.actions;



const InboxSlice = createSlice({
    name : "AddExpenses",
    initialState : {
        RecivedMail : [],
        Updated_Id : "Empty",
        updation : "Empty"
    },
    reducers : {
        addRecivedMail(state, action){
            state.Recived = action.payload;
        },
        clearRecivedMail(state){
            state.Recived = [];
        },
        dltRecivedMail(state, action){
           state.Recived =  state.Recived.filter((exe)=>exe.id!=action.payload);
        },
    }
})

export const Recived =  InboxSlice.reducer;
export const {addRecivedMail,clearRecivedMail,dltRecivedMail} = InboxSlice.actions;


// starred


const starredSlice = createSlice({
    name : "AddExpenses",
    initialState : {
        StarredMail : [],
        Updated_Id : "Empty",
        updation : "Empty"
    },
    reducers : {
        addStarredMail(state, action){
            state.Recived = action.payload;
        },
        clearStarredMail(state){
            state.Recived = [];
        },
        dltStarredMail(state, action){
           state.Recived =  state.Recived.filter((exe)=>exe.id!=action.payload);
        }
    }
})

export const Starred =  starredSlice.reducer;
export const {AddStarredMail,clearStarredMail,dltStarredMail} = starredSlice.actions;


// send




const SendSlice = createSlice({
    name : "AddExpenses",
    initialState : {
        RecivedMail : [],
        SendMail : [],
        StarredMail : [],
        Updated_Id : "Empty",
        updation : "Empty"
    },
    reducers : {
        addSendMail(state, action){
            state.Recived = action.payload;
        },
        clearSendMail(state){
            state.Recived = [];
        },
        dltSendMail(state, action){
           state.Recived =  state.Recived.filter((exe)=>exe.id!=action.payload);
        }
    }
})

export const Send =  SendSlice.reducer;
export const {addSendMail,clearSendMail,dltSendMail} = SendSlice.actions;


