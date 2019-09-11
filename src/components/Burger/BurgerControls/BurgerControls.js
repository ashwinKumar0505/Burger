import React from 'react';
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BurgerControls.module.css"

const controls=[
  {Label:"Saldad" , Type:"salad"},
  {Label:"Bacon" , Type:"bacon"},
  {Label:"Meat" , Type:"meat"},
  {Label:"Cheese" , Type:"cheese"}
]
const BurgerControls=(props)=>
  (  
   <div className={classes.BurgerControls}>
     <h3>price : ${props.totalPrice}</h3>
   {controls.map((ctrl)=>
   <BuildControl 
   key={ctrl.Label} 
   Label={ctrl.Label} 
   addIngredients={()=>props.addIngredients(ctrl.Type)}
   removeIngredients={()=>props.removeIngredients(ctrl.Type)}
   disabledInfo={props.disabledInfo[ctrl.Type]}
   />
   )}
   <button className={classes.OrderButton} 
   onClick={props.shouldShowOrder}
   disabled={!props.purchasable}>ORDER NOW</button>
   </div>)

export default BurgerControls;