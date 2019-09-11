import React, { Component } from "react";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
import { Route }  from "react-router-dom";
import ContactData from "../CheckOut/ContactData/ContactData"
import {connect} from "react-redux"
class CheckOut extends Component {
  
  // componentWillMount(){
  //   const query=new URLSearchParams(this.props.location.search);
  //   const ingredients={}
  //   let price=null;
  //   for(let param of query.entries()){
  //     if(param[0]==="price"){
  //         price=param[1]
  //     }
  //     ingredients[param[0]]=+param[1]
  //   }
  //   this.setState({
  //     ingredients:ingredients,
  //     price:price
  //   })
  // }
  cancelOrder=()=>{
    this.props.history.goBack();
  }
  continueOrder=()=>{
    this.props.history.replace('/checkout/contact-data')
  }
  render() {
    console.log(this.props.ings)
    return (
      <div>
        <CheckOutSummary ingredients={this.props.ings} cancelOrder={this.cancelOrder} continueOrder={this.continueOrder}/>
        <Route path={this.props.match.path + '/contact-data'}
        exact
        render={(props)=>(<ContactData ingredients={this.props.ings} price={this.props.totalPrice}{...props}/>)}/>
      </div>
    );
  }
}


const mapStateToProps=state=>{
        return {
             ings:state.burgBuilder.ingredients,
              totalPrice:state.burgBuilder.totalPrice
              }
}

export default connect(mapStateToProps)(CheckOut);
