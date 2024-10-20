import React from 'react';
import Navbar from '../components/navbar/Navbar';
import classes from './Shop.module.css';
import ItemBox from '../components/shop/ItemBox';
import green from '../images/green.png';
import orange from '../images/orange.png';
import peach from '../images/peach.png';
import purple from '../images/purple.png';
import {useSelector} from 'react-redux';
import Cart from '../components/cart/Cart';
const Shop = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div className={classes.shopPage}>
      <Navbar/>
      <div className={classes.header}>OUR COLLECTION</div>
      <div className={classes.itemGrid}>
        <ItemBox itemNumber={1} source={green} topItemName='BASIL' bottomItemName='LIME'/>
        <ItemBox itemNumber={2} source ={orange} topItemName='ORANGE' bottomItemName='PAPAYA'/>
        <ItemBox itemNumber={3} source= {peach} topItemName='ROSE' bottomItemName='PEACH'/>
        <ItemBox itemNumber={4} source = {purple} topItemName='GRAPE' bottomItemName='LAVENDER'/>
      </div>
     {showCart&&<Cart/>}
    </div>
  )
}
export default Shop;
