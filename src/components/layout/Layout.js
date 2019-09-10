import React,{Component} from "react";
import Aux from "../../hoc/Aux"
import classes from "./layout.module.css"
import ToolBar from "../Navigation/ToolBar/ToolBar"
import SideDrawer from "../Navigation/SideDrawer/SideBrawer";
class Layout extends Component{
  state={
    openSideDrawer:false,
  }
  changeToSideDrawer=()=>{
    this.setState({
      openSideDrawer:true,
    })
  }
  changeToToolBar=()=>{
    console.log("here")
    this.setState({
      openSideDrawer:false
    })
  }

  render(){
  return(
  <Aux>
  <ToolBar clicked={this.changeToSideDrawer}/>
   {this.state.openSideDrawer ? <SideDrawer clicked={this.changeToToolBar}/> : null}
   <main className={classes.content}>
    {this.props.children}
  </main>
  </Aux>
  )
  }
}
export default Layout