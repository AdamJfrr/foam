import React from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { removeItem, increment, decrement } from '../../store/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeItem(props.id))
  }
  const addItemHandler = () => {
    dispatch(increment({id:props.id,name:props.name,amount:props.amount,price: props.price}))
  }
  const decreaseItemHandler = () => {
    dispatch(decrement({id:props.id,name:props.name,amount:props.amount,price: props.price}))
  }
  return (
    <div className={classes.cartItem}>
      <div className={classes.left}>
        <div className={classes.info}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.price}>{props.price}</div>
        </div>
        <div className={classes.deleteItem}>
          <button onClick={deleteHandler} type='button'> DELETE </button>
        </div>
      </div>
      <div className={classes.right}>
        <button onClick = {addItemHandler} className={classes.addButton} type='button'> + </button>
        <div className={classes.amount}>{props.amount}</div>
        <button onClick = {decreaseItemHandler} className={classes.subtractButton} type='button'> - </button>
      </div>
    </div>
  )
}

export default CartItem;
