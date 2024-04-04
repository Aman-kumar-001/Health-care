import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
 name : "login",
 initialState : false,
 reducers :{
    setlogin:(state , action) =>{
        state(state => !state);
    }
 }
})

export const  {setlogin} = loginSlice.actions;
export default loginSlice.reducer;