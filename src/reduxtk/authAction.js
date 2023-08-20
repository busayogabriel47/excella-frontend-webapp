import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import axios from "axios"



const api = "https://excella-api.onrender.com/api"

//Register Trainer
export const registerTrainer = createAsyncThunk(
    'auth/register', 
    async(user, thunkApi) => {
        try {
            return await authService.registerTrainer(user)
        } catch (error) {
            const message = (error.response && error.response.data && 
                error.response.data.message) || error.message || error.toString()
                return thunkApi.rejectWithValue(message)
        }
    }
)

//Register Student
export const student = createAsyncThunk(
  'auth/login', 
  async(user, thunkApi) => {
      try {
          return await authService.registerStudent(user)
      } catch (error) {
          const message = (error.response && error.response.data && 
              error.response.data.message) || error.message || error.toString()
              return thunkApi.rejectWithValue(message)
      }
  }
)

//Register Admin

export const AdminReg = createAsyncThunk(
  'auth/adminreg', 
  async(user, thunkApi) => {
      try {
          return await authService.registerAdmin(user)
      } catch (error) {
          const message = (error.response && error.response.data && 
              error.response.data.message) || error.message || error.toString()
              return thunkApi.rejectWithValue(message)
      }
  }
)

//login Admin
export const adminLogin = createAsyncThunk(
  'user/adminlogin',
  async (user, { rejectWithValue }) => {
    try {
      var  res
      if(user) {
        res =  await axios.post(`${api}/adminSignin`, user);
        console.log(res) 
      }
      
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      if(user.email && user.password){
          window.location.href = "/dashboard/admin";
      } 
      
  } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)


//Login Trainer

export const trainerLogin = createAsyncThunk(
    'user/login',
    async (user, { rejectWithValue }) => {
      try {
        var  res
        if(user) {
          res =  await axios.post(`${api}/trainer-login`, user);
          console.log(res) 
        }
        
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        if(user.email && user.password){
            window.location.href = "/dashboard/trainer";
        } 
        
    } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )


  //Login Student

export const studentLogin = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      var  res
      if(user) {
        res =  await axios.post(`${api}/loginStudent`, user);
        console.log(res) 
      }
      
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      if(user.email && user.password){
          window.location.href = "/dashboard/student";
      } 
      
  } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)