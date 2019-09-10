import React from "react"
import BurgIng from "./BurgerIngrediants/BurgerIngrediants"
import classes from "./burger.module.css";
const Burger=(props)=>{
    console.log(props.ingredient)
    let newBurger=Object.keys(props.ingredient)
    .map( (igKey) =>{
      return [...Array(props.ingredient[igKey])].map(( _ , index)=>{
        return <BurgIng key={igKey + index} type={igKey} />
      }
    )}) 
    .reduce((old,present)=>{
        return old.concat(present)
    })
    console.log(newBurger)
    if(newBurger.length===0){
           newBurger=(<p>Please Start Adding ingredient</p>)
    }
  return(
      <div className={classes.burger}>
        <BurgIng type="bread-top"/>
        {newBurger}
        <BurgIng type="bread-bottom"/>
      </div>
  );
}
export default Burger;