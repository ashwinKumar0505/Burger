import React, { Component } from 'react';
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls"
import Modal from "../../components/Modal/Modal"
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummar';
import axios from "../../axios-orders"
import Spinner from "../../components/UI/Spinner/Spinner"
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler"
import {connect} from "react-redux";
import * as actionTypes from "../../Store/action"

// const INGREDIENT_PRICE={
//   salad:0.5,
//   cheese:1,
//   meat:2,
//   bacon:1
// }
class BurgerBuilder extends Component{
   state={
     totalPrice:4,
     showOrder:false,
     loading:false,
     ingredientsLoaded:true
   }
   componentDidMount(){
    //  axios.get("https://react-myburger-50e7f.firebaseio.com/ingredients.json")
    //     .then(Response=>{
    //       this.setState({
    //         ingredient:Response.data,
    //         ingredientsLoaded:true,
    //         purchasable:true
    //       })
    //     })
   }
   updatePurchaseState=()=>{
     const ingredients={
       ...this.props.ings
     }
     const sum=Object.values(ingredients).reduce((total,el)=>{
         return total+el;
     },0)
     return sum>0;
   }
   shouldShowOrder=()=>{
     this.setState({
       showOrder:true
     })
   }
   closeOrderSummary=()=>{
     this.setState({
       showOrder:false
     })
   }
   continueCheckOut =()=>{
    
    this.props.history.push('/checkout')
   }
   render(){
     console.log("props below")
      console.log(this.props)
      const disabledInfo={
        ...this.props.ings
      }
      for(let key in disabledInfo){
        disabledInfo[key]=disabledInfo[key]<=0;
      }
     return(
       <Aux>
         {this.state.ingredientsLoaded ? 
         <div>
         <Modal show={this.state.showOrder} close={this.closeOrderSummary}>
           {this.state.loading ? <Spinner /> :
           <OrderSummary ingrediant={this.props.ings} 
           totalPrice={this.props.totalPrice}
           continueCheckOut={this.continueCheckOut}
           cancelCheckOut={this.closeOrderSummary}/>}
         </Modal>
         <Burger ingredient={this.props.ings}/>
         <BurgerControls 
         addIngredients={this.props.onIngredientAdded}
         removeIngredients={this.props.onIngredientRemoved}
         totalPrice={this.props.totalPrice}
         disabledInfo={disabledInfo}
         purchasable={this.updatePurchaseState}
         shouldShowOrder={this.shouldShowOrder}
         />
         </div> :<Spinner />}       
       </Aux> 
     )
   }
}
const mapStateToProps=state=>{
        return {
              ings:state.ingredients,
              totalPrice:state.totalPrice
        }
}
const mapDispatchToProps=dispatch=>{
       return {
          onIngredientAdded : (ingName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
          onIngredientRemoved : (ingName)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
       }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios)); 