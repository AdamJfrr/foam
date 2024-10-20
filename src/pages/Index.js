import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Index.module.css';
import orange from '../images/orange.png';
import bubble from '../images/bubble.png';
const Index = () => {
  return (
    <div className={classes.indexPage}>
      <div className={classes.topDiv}>
        <div className={classes.imageBox}><img src={orange}/></div>
        <div className={classes.title}>FOAM</div>
        <Link className={classes.container} to="/shop">
          <img className={classes.bubbleImage} src={bubble} alt="Bubble Image" />
        </Link>
      </div>
      <div className={classes.bottomDiv}>
        Discover FOAM, an organic soap brand crafted with natural ingredients and captivating, all-natural scents.
        Each bar is infused with aromatic blends designed to awaken the senses. Indulge in a refreshing, toxin-free cleanse
        that leaves you feeling revitalized and connected to nature.
      </div>
    </div>
  )
}
export default Index;
