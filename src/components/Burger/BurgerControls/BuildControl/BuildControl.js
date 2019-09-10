import React from 'react';
import classes from "./BuildControl.module.css"

function BuildControl(props){
   return(<div className={classes.BuildControl}>
        <div className={classes.Label}>{props.Label}</div>
        <button className={classes.Less} onClick={props.removeIngredients} disabled={props.disabledInfo}>Less</button>
        <button className={classes.More} onClick={props.addIngredients}>More</button>
   </div>)
}
export default BuildControl;