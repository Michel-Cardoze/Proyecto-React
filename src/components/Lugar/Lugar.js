import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Lugar = () => {

    const { id } = useParams()
    const [lugar, setLugar] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3002/${id}`)
        .then( response => response.json())
        .then( lugar => setLugar(lugar))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h3>{lugar.name}</h3>
        <Link to='/lugares/' >Volver a listado de Sitios</Link>
    </div>
  )
}

export default Lugar