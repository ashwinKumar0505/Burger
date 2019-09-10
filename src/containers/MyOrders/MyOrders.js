import React, { Component } from 'react';
import Orders from "../../components/Orders/Orders"
import axios from "../../axios-orders"
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler"
import Spinner from "../../components/UI/Spinner/Spinner"
class MyOrders extends Component {
  state={
    orders:null,
    loading:null
  } 
  componentWillMount(){
    console.log("here to myorders")
    axios.get('/orders.json')
       .then(res=>{
         const fetchedOrders=[];
         for(let key in res.data){
           fetchedOrders.push({
             ...res.data[key],
             id:key
           })
         }
         this.setState({
           loading:true,
           orders:fetchedOrders
         })
        
       })
       .catch(error=>error)
  }
  render() { 
    console.log(this.state.orders)
    return (
      <div>
      {this.state.loading?
      <div>
       {this.state.orders.map((order)=><Orders key={order.id} ingredients={order.ingredients} price={order.price}/>)}
      </div> :<Spinner />}
      </div>
      );
  }
}
 
export default WithErrorHandler(MyOrders,axios);