import React from 'react';
import classes from './About.module.css';
import Navbar from '../components/navbar/Navbar';
import Cart from '../components/cart/Cart';
import about from '../images/about.jpg';
import {useSelector} from 'react-redux';

const About = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div className={classes.aboutPage}>
      <Navbar/>
      <div className={classes.header}>ABOUT</div>
      <div className={classes.aboutDiv}>
        <div className={classes.aboutLeft}>
          FOAM is an organic soap brand founded in Berlin, known for its commitment to sustainability and eco-conscious living. Using only natural, plant-based ingredients, FOAM produces hand-crafted soaps that are gentle on the skin and the environment. Their products are free from synthetic chemicals, artificial fragrances, and harmful preservatives, making them suitable for all skin types. FOAM emphasizes minimalistic packaging, often using recycled or biodegradable materials. The brand supports local farmers and artisans, sourcing organic ingredients from sustainable farms.
        </div>
        <div className={classes.aboutRight}>
          FOAM’s product line includes a variety of scents, from lavender to eucalyptus, each crafted with essential oils.
          Their mission is to promote a cleaner, greener lifestyle through high-quality, eco-friendly personal care products. FOAM is also cruelty-free, ensuring no animal testing is involved in their production process. With a focus on transparency and ethical production, FOAM has become a trusted name in Berlin’s organic skincare scene.
        </div>
      </div>
      <div className={classes.imageDiv}><img src={about}/></div>
      {showCart&&<Cart/>}
    </div>
  )
}
export default About;
