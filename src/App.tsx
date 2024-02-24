import { useEffect, useState } from 'react'
import axios from 'axios';

export const App = () => {
  
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

  return (
    <>
     
    </>
  )
}
