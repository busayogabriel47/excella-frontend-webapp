import  {jwtDecode} from "jwt-decode";



export const decodeToken = (token) => {
    try {
        //Decode the JWT token
        const decodedToken = jwtDecode(token);
        return decodedToken
    } catch (error) {
        console.error('Error decoding token:', error);
         return null;
    }
}