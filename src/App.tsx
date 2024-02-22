import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  
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

export default App
