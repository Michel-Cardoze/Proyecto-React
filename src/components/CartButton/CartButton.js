import React from 'react';
import styles from './CartButton.module.css'
//import { BsCartCheck } from 'react-icons/bs'

const CartButton = (props) => {
  return <button className={styles.boton} onClick={props.setShowed} >

  </button>;
};

export default CartButton;
