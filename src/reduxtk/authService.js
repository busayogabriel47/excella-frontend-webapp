import axios from "axios"



const api = "https://excella-api.onrender.com/api"


const registerTrainer = async (userData) => {
    const response = await axios.post(`${api}/add-trainer`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const registerStudent = async (userData) => {
    const response = await axios.post(`${api}/addStudent`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}



const registerAdmin = async (userData) => {
    const response = await axios.post(`${api}/adminReg`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}



const authService = {
    registerTrainer,
    registerAdmin,
    registerStudent
}




export default authService