import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from "axios"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentistas, setDentistas] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const obtenerDentistas = async() => {
    const res = await axios(url)
    setDentistas(res.data)
  }

  useEffect(() => {
    obtenerDentistas();
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map((dentista) => 
          <Card key={dentista.id}  dentista = {dentista} />
        )}
      </div>
    </main>
  )
}

export default Home

