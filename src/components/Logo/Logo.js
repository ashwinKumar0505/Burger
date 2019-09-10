import React from "react";
import burgerImage from "../../assets/images/burger-logo.png"
import classes from "./Logo.module.css"
const Logo=(props)=>{
  return(
    <div className={classes.Logo} style={{height:props.height , marginBottom:props.marginBottom}}>
      <img src={burgerImage} alt="Burger" />
    </div>
  )
}
export default Logo