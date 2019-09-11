import React, { Component } from 'react';
import Orders from "../../components/Orders/Orders"
import axios from "../../axios-orders"
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler"
import Spinner from "../../components/UI/Spinner/Spinner"
import {fetchingTheOrder} from "../../Store/action/orderActionCreator"
import { connect } from 'react-redux';
class MyOrders extends Component {
  componentDidMount(){
    this.props.gettingTheOrders();
    console.log(this.props.loading)
  }
  render() { 
    return (
      <div>
      {this.props.loading?
      <div>
       {this.props.orders.map((order)=><Orders key={order.id} ingredients={order.ingredients} price={order.price}/>)}
      </div> :<Spinner />}
      </div>
      );
  }
}

const mapStateToProps = state=>{
  return {
    orders:state.order.orders,
    loading:state.order.loading
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    gettingTheOrders:()=>dispatch(fetchingTheOrder())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(MyOrders,axios));