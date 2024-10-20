import React from 'react';
import classes from './Grid.module.css';
const Grid = () => {
  return (
    <div className={classes.grid}>
      {Array.from({length: 8}).map((_,index)=>(
        <div className={classes.column} key={index}></div>
      ))}
    </div>
  )
}
export default Grid;
