import axios from "axios";
import { useEffect } from "react";


export const Dashboard = () => {
    const axiosInstance = 'http://localhost:5070/api/postagens';
    const teste = async() => {
        await axios.get(axiosInstance)
        .then(response => {
          console.log(response.data);
        }).catch(error => {
          console.log(error);
        }); 
      }
    
      useEffect(() =>{
        teste();
      });
    
    return(
        <>
        </>
    );
}