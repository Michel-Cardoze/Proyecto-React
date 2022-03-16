import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'
import styles from './InventoryItem.module.css'

export const InventoryItem = ({ id,name,cost,email,province,district,Canton,Contact}) => {

    const [checked, setChecked] = useState(false)

    const { addRemoveLugares } = useContext(MyContext)


    const checkedOnHandler = (e, lugar) => {
        setChecked(e.target.checked)
        addRemoveLugares(e.target.checked, lugar)
    } 

    return (
        <div class="card mb-3" >
            <div class="card-body">
                <h5 class="card-title" className={ checked ? styles.checked : undefined }>{name}</h5>
                <p class="card-text">
                    Costo de entrada: ₡{cost}<br></br>
                    Ubicación: {district}, {Canton}, {province} <br></br>
                    Correo Electrónico: {email}<br></br>
                    Contacto: {Contact}<br></br>

                </p>
                <input type="checkbox" onChange={ e => checkedOnHandler(e, {id}, name, cost, email, province,Canton, district)} />
            </div>
        </div>     
    )
}

//<li className={styles.listItem}>
//<span className={ checked ? styles.checked : undefined }>
   // <Link to={`/Lugares/${id}`}> {id} Nombre: {name} Costo de entrada: {cost} {email} {province} {Canton} {district} </Link>
//</span> 
//<input type="checkbox" onChange={ e => checkedOnHandler(e, {id}, name, cost, email, province,Canton, district)} />
//</li>  
