import { createSlice } from "@reduxjs/toolkit";
import { 
    teacherprofile
} from "./userAction";



//Get usertoken from localStorage

  const currentUser = localStorage.getItem('currentUser') 
  ? JSON.parse(localStorage.getItem('currentUser')) : null
  
  


const initialState = {
    isError: false,
    isSuccess: false,
    currentUser,
    isLoading: false,
    message: ""
}




export const userSlice = createSlice({
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

    //Tprofile
        builder.addCase(teacherprofile.pending, (state)=> {
            state.isLoading = false
        })
        .addCase(teacherprofile.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(teacherprofile.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

    }



})


export const reset = userSlice.actions
export default userSlice.reducer