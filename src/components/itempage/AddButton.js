import React from 'react';
import classes from './AddButton.module.css';

const AddButton = ({amount,clickHandler}) => {
  return (
    <button onClick={clickHandler} disabled={amount===0} type='button' className={amount==0?classes.buttonDisabled:classes.addButton}>ADD TO CART</button>
  )
}

export default AddButton;
