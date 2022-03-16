import React, {useState} from 'react'
import styles from './ColoresItem.module.css'


export const ColoresItem = ({ id,color }) => {

    const [checked, setChecked] = useState(false)

    const checkedOnHandler = e => setChecked(e.target.checked)

    return (
      

        <li className={styles.listItem}>
            <p>Color favorito:</p>
        <span className={ checked ? styles.checked : undefined }>
            {id} {color}
        </span> 
        <input className='checkbox' type="checkbox" onChange={ e => checkedOnHandler(e)} />
    </li>  
    )
}