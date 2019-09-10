import React from 'react';
import Burger from "../../Burger/Burger"
import Button from "../../UI/Button/Button"
import classes from "./CheckOutSummary.module.css"
const CheckOutSummary=(props)=>{
       return(
         <div className={classes.CheckOutSummary}>
           <h1>It tastes Damn Good</h1>
           <div style={{width:"100%", margin:"auto"}}>
            <Burger ingredient={props.ingredients}/>
           </div>
           <Button
                btnType="Success"
                clicked={props.continueOrder}>Continue</Button>
           <Button
                btnType="Danger"
                clicked={props.cancelOrder}>Cancel</Button>
         </div>
       )
}
export default CheckOutSummary;