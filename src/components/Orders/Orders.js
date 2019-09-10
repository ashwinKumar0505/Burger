import React from 'react';
import classes from "./Orders.module.css"
const orders=(props)=>{
  const ingredients=[]
  for(let ingredientName in props.ingredients){
    ingredients.push({
      name:ingredientName,
      amount:props.ingredients[ingredientName]
    })
  }
    return(
    <div className={classes.Orders}>
        <p className={classes.AllIngredients}>ingredients:{ingredients.map((ingredient)=>{
          return(<span className={classes.EachIngredient} key={ingredient.name}>{ingredient.name}({ingredient.amount})</span>)
        })}</p>
        <p style={{textAlign:"center",marginTop:"20px",fontSize:"1.5em"}}><strong>Price : ${props.price}</strong></p>
    </div>
  )
}
export default orders;