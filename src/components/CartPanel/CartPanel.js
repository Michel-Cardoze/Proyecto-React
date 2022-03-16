import React, { useContext } from 'react'
import { MyContext } from '../../App'
import styles from './CartPanel.module.css'


const CartPanel = ({ showed }) => {

  const { selectedLugares } = useContext(MyContext)


  return (
    <ul className={`${styles.panel} ${showed ? null : styles.hidden}`}>
        {selectedLugares.map(lugar => <li key={lugar.id}>{lugar.name}</li>)}
    </ul>
  )
}

export default CartPanel