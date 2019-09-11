import React from 'react';
import classes from "./Input.module.css"
const Input=(props)=>{
  let inputElement=null;
  switch(props.elementType){
    case ("input"):
      inputElement=<input className={classes.InputElement} value={props.value}{...props.elementConfig} onChange={props.changeHandler}/>
      break;
    case ("textarea"):
      inputElement=<input className={classes.InputElement} {...props.elementConfig} onChange={props.changeHandler}/>
      break;
    case ("select"):
      inputElement=(
        <select className={classes.InputElement} value={props.value} onChange={props.changeHandler}>
        {props.elementConfig.options.map((option)=>{
          return (<option value={option.value}>{option.displayValue}</option>)
        })}
        </select>
      )
      break;
    default:break;
  }
  return(
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}
export default Input;