import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./SideDrawer.module.css"
import BackDrop from "../../../components/UI/BackDrop/BackDrop"
const SideDrawer=(props)=>{
  return(
       <div>
         <BackDrop show close={props.clicked}/>  
       <div className={classes.SideDrawer}>
         <Logo height="11%" marginBottom="50px"/>
         <nav>
           <NavigationItems />
         </nav>
       </div>
       </div>
  )
}
export default SideDrawer;