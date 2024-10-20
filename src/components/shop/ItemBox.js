import React from 'react';
import classes from './ItemBox.module.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const ItemBox = (props) => {
  const [isHover,setIsHover] = useState(false);
  const expandImageHandler = () => {
    setIsHover(prev=>true)
  }

  const decreaseImageHandler = () => {
    setIsHover(prev=>false)
  }

  return (
    <Link className={classes.itemLink} to={`/shop/item/${props.itemNumber}`}>
      <div className={classes.itemBox} onMouseOver = {expandImageHandler} onMouseLeave ={decreaseImageHandler}>
        <img className={isHover?classes.hoveredImage:classes.image} src={props.source}/>
        <div className={classes.overlayText}>
          <div>{props.topItemName}</div>
          <div>+</div>
          <div>{props.bottomItemName}</div>
        </div>
      </div>
    </Link>
  )
}
export default ItemBox;
