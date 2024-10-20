import {useParams} from 'react-router-dom';
import React,{useState} from 'react';
import classes from './ItemPage.module.css';
import green from '../images/green.png';
import orange from '../images/orange.png';
import peach from '../images/peach.png';
import purple from '../images/purple.png';
import Navbar from '../components/navbar/Navbar';
import AmountButton from '../components/itempage/AmountButton';
import AddButton from '../components/itempage/AddButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import Cart from '../components/cart/Cart';

const ItemPage = () => {
   const { itemNumber } = useParams();
   const dispatch = useDispatch();
   const [amount, setAmount] = useState(0);

   const itemList = [{id:'1', image: green, name: 'BASIL + LIME', description: 'Indulge in the refreshing blend of sweet lime and aromatic basil with our handcrafted soap. This unique combination nourishes your skin while providing a soothing and uplifting scent, making each wash a rejuvenating experience. Perfect for daily use, this soap not only cleanses but also leaves your skin feeling soft and revitalized.'},
   {id:'2', image: orange, name: 'ORANGE + PAPAYA', description: 'Experience the tropical fusion of vibrant orange and juicy papaya in our luxurious soap. This delightful blend revitalizes your senses while gently cleansing your skin, leaving it refreshed and radiant. Infused with natural antioxidants, this soap promotes healthy skin and enhances your daily bathing ritual.'},
   {id:'3', image: peach, name: 'ROSE + PEACH', description: 'Indulge in the enchanting aroma of our Rose + Peach soap, where the delicate floral notes of rose meet the sweet, juicy scent of ripe peach. This exquisite blend nourishes your skin while offering a soothing and uplifting bathing experience. Enriched with natural oils, it hydrates your skin, leaving it soft, supple, and beautifully fragrant.'},
   {id:'4', image: purple, name: 'GRAPES + LAVENDER', description: 'Experience the calming blend of our Grapes + Lavender soap, where the rich, juicy scent of fresh grapes harmonizes with the soothing essence of lavender. This unique combination not only refreshes your senses but also promotes relaxation and tranquility during your bathing ritual. Infused with natural ingredients, it gently cleanses and nourishes your skin, leaving it feeling revitalized and delicately fragrant.'}]

   const matchedItem = itemList.find(element => element['id'] == itemNumber);
   console.log(matchedItem['description'])

   const showCart = useSelector((state) => state.cart.showCart);

   const updateAmountHandler = (amount) => {
     setAmount(amount)
   }

   const addToCartHandler = () => {
     const toBeAdded = {id:matchedItem['id'],name:matchedItem['name'],amount:amount,price: 13}
     dispatch(addItem(toBeAdded))
   }

   return (
     <div className={classes.itemPage}>
        <Navbar/>
        <div className={classes.layout}>
          <div className={classes.left}>
            <div className={classes.imageBox}><img src={matchedItem['image']}/></div>
            <div className={classes.description}>{matchedItem['description']}</div>
          </div>
          <div className={classes.right}>
            <div className={classes.name}>{matchedItem['name']}</div>
            <div className={classes.price}>13,00 $</div>
            <AmountButton updateAmount={updateAmountHandler}/>
            <AddButton clickHandler={addToCartHandler} amount={amount}/>
          </div>
        </div>
        {showCart&&<Cart/>}
     </div>
   )
}
export default ItemPage;
