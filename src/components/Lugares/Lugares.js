import React from 'react'
import { Inventory } from '../Inventory/Inventory'
import styles from './Lugares.module.css'


const Lugares= ({ data, setData }) => {
  return (
    <>
      <h1 className={styles.Lugares_listItem__yA0eC} >Centros Turísticos</h1>

        <ul className="list-group" className={styles.lista}>
          <li>
            <Inventory data={data} setData={setData} />
          </li>
        </ul>


    </>
  )
}



export default Lugares