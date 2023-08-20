import { createSlice } from "@reduxjs/toolkit";
import { 
    registerTrainer, 
    trainerLogin, 
    AdminReg, 
    student,
    studentLogin,
    adminLogin
} from "./authAction";



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

    
    //Trainers Login reducer
    [trainerLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [trainerLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.currentUser = payload.currentUser
      },
      [trainerLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },

      //Students Login reducer
    [studentLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [studentLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.currentUser = payload.currentUser
      },
      [studentLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },


    extraReducers: (builder) =>{
        //Register Students
        builder.addCase(student.pending, (state)=> {
            state.isLoading = false
        })
        .addCase(student.fulfilled, (state, action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(student.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })


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


        //adminLogin reducer
        builder.addCase(adminLogin.pending, (state, action)=> {
            state.isLoading = true
            state.isError = null
        })
        .addCase(adminLogin.fulfilled, (state, action)=> {
            state.isLoading = false
            state.userInfo = action.payload
            state.currentUser = action.currentUser
        })
        .addCase(adminLogin.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = action.payload
        })
    }



})


export const reset = authSlice.actions
export default authSlice.reducer