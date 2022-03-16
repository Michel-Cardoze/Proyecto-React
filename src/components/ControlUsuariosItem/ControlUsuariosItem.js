import React, {useState} from 'react'
import styles from './ControlUsuariosItem.module.css'

export const ControlUsuariosItem = ({ id, name, last_name, job }) => {

    const [checked, setChecked] = useState(false)

    const checkedOnHandler = e => setChecked(e.target.checked)

    return (
            <li className={styles.listItem}>
                <span className={ checked ? styles.checked : undefined }>
                    {id}  {name}  {last_name}  
                </span> 
                <span className={ checked ? styles.checked : undefined }>
                   {job}
                </span>
                <input type="checkbox" onChange={ e => checkedOnHandler(e)} />
            </li>            
    )
}