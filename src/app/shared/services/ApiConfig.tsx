import axios from "axios";

export const DefaultConetion = () => {
    return axios.create({
        baseURL: 'http://localhost:5070/api',
        headers: {'Access-Control-Allow-Origin' : '*', 'Content-Type' : 'application/json'}

    })
}