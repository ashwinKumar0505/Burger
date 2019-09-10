import React from 'react';
import Aux from "../../../hoc/Aux"
import Button from "../../UI/Button/Button"
const OrderSummary=(props)=>{
 const ingrediantSummary=Object.keys(props.ingrediant).map((ing)=>{
        return (
          <li key={ing}> 
          <span style={{textTransform:"capitalize"}}>
          {ing} 
          </span>
           :
           {props.ingrediant[ing]}
           </li>)
  })
  return(
    <Aux>
      <h1>ORDER SUMMARY</h1>
      <h3>YOur Delicious Burger Is Ready</h3>
      <ul>
          {ingrediantSummary}
      </ul>
      <h3>The Total Amount is ${props.totalPrice}</h3>
      <p>Continue to CheckOut</p>
      <Button btnType="Success" clicked={props.continueCheckOut}>CONTINUE</Button>
      <Button btnType="Danger" clicked={props.cancelCheckOut}>CANCEL</Button>
    </Aux>
  )
}
export default OrderSummary;