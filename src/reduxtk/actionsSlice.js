import { createSlice } from "@reduxjs/toolkit";
import { registerTrainer, userLogin, AdminReg } from "./authAction";



//Get usertoken from localStorage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
  
  


const initialState = {
    isError: false,
    isSuccess: false,
    currentUser: userToken,
    isLoading: false,
    message: ""
}




export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },


    extraReducers: (builder) =>{
        //Register trainers
        builder.addCase(registerTrainer.pending, (state)=> {
            state.isLoading = false
        })
        .addCase(registerTrainer.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerTrainer.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })


    //Register Admin
        builder.addCase(AdminReg.pending, (state)=> {
            state.isLoading = false
        })
        .addCase(AdminReg.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(AdminReg.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }



})


export const reset = authSlice.actions
export default authSlice.reducer