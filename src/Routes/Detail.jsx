import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [dentista, setDentista] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  console.log(params);

  const traerDentista = async() => {
    const res = await axios(url)
    console.log(res.data);
    setDentista(res.data);
  }

  useEffect(() => {
    traerDentista();
    
  }, [])


  return (
    <>
      <h1>Detail Dentist id </h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail