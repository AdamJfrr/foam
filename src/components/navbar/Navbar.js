import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {showCart} from '../../store/cartSlice';
const Navbar = () => {
  const dispatch = useDispatch()
  const showCartHandler = ()=>{
    dispatch(showCart())
  }
  return (
    <div className={classes.navbar}>
      <Link className={classes.link} to='/'><div className={classes.title}>FOAM</div></Link>
      <div className={classes.links}>
        <Link className={classes.link} to='/about'><div className={classes.link}>ABOUT</div></Link>
        <Link className={classes.link} to ='/shop'><div className={classes.link}>SHOP</div></Link>
        <button onClick={showCartHandler} type='button' className={classes.cartButton}><div className={classes.cart}>CART</div></button>
      </div>
    </div>
  )
}
export default Navbar;
