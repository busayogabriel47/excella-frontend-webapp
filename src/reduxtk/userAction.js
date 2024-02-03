import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const api = "https://excella-api.onrender.com/api"

//User Profile
export const teacherprofile = createAsyncThunk(
    'user/profile', 
    async(pic, { rejectWithValue }) => {
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
          };
    

          try {
            //  await axios.post('/api/users/removeStudent',{postId});
            // const response2 = await axios.get(`/api/users/allStudent`);
           const res = await axios.put(`${api}/trainerPicUpdate`, { pic }, config);
           console.log(res)
            window.location.href = "/dashboard/trainer";
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