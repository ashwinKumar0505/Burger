import React from 'react';
import classes from "./ToolBar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems"
function ToolBar(props){
  return(
    <header className={classes.ToolBar}>
        <div onClick={props.clicked} className={classes.DrawerToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Logo height="80%" marginBottom="0px"/>
        <nav className={classes.DesktopOnly}>
        <NavigationItems />
        </nav>
    </header>
  )
}
export default ToolBar;