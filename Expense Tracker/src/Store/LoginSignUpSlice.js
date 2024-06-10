import { createSlice } from "@reduxjs/toolkit";




const LoginSignUpSlice = createSlice({
    name : "LoginSignUpSlice",
    initialState : {
        token : '',
        userId : '',
        email : '',
        password : '',
        image : '',
        name : ''
    },
    reducers : {
        signup(state, action){
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.email = action.payload.email;
        },
        signIn(state, action) {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.image = action.payload.url;
          },
          logout(state) {
            state.token = "";
            state.userId = "";
            state.email = "";
            state.name = "";
            state.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr36oDwlyD6PdPl0pTr13oxXuU1wsQNX_YjA&s";
          },
          update(state, action) {
            state.name = action.payload.name;
            state.image = action.payload.url;
          },

    }
})

const Islogin = createSlice({
  name : "Islogin",
  initialState : {
    login : false,
    signupp : false
  },
  reducers : {
    login(state){
     if(state.login){
      state.login = false;
     }
     else{
      state.login = true;
     }
    },
    signupCheck(state){
      if(state.signupp){
        state.signupp = false;
       }
       else{
        state.signupp = true;
       }
    }
  }
})

export const loginreducer =  Islogin.reducer;
export const {login,signupCheck} =  Islogin.actions;

export const  LoginSignUpSlicee  = LoginSignUpSlice.reducer;
export const {signup , signIn,logout,update}  = LoginSignUpSlice.actions;