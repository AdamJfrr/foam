import React from 'react';
import classes from './AmountButton.module.css';
import {useState} from 'react';

const AmountButton = ({updateAmount}) => {
  const [amount,setAmount] = useState(0);
  const incrementHandler = () => {
    setAmount(prev=>prev+1)
  }
  const decreaseHandler = () => {
    if(amount>0){
      setAmount(prev=>prev-1)
    }
    else {
      setAmount(0)
    }
  }

  React.useEffect(()=>{
    updateAmount(amount)
  },[amount,updateAmount])

  return (
    <div className= {classes.buttonDiv}>
      <div onClick = {incrementHandler} className={classes.addButton}><button className={classes.button} type='button'>+</button></div>
      <div className={classes.amount}>{amount}</div>
      <div onClick = {decreaseHandler} className={classes.removeButton}><button className={classes.button} type='button'>-</button></div>
    </div>
  )
}

export default AmountButton;
