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
import { addingTheIngredient, removingTheIngredient,getTheIngredients } from '../../Store/action/burgerBuilderActionCreator';

// const INGREDIENT_PRICE={
//   salad:0.5,
//   cheese:1,
//   meat:2,
//   bacon:1
// }
class BurgerBuilder extends Component{
   
   componentDidMount(){
    console.log("mounting")
    this.props.onIngredientLoaded();
   }  
   state={
     totalPrice:4,
     showOrder:false,
     loading:false,
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
      const disabledInfo={
        ...this.props.ings
      }
      for(let key in disabledInfo){
        disabledInfo[key]=disabledInfo[key]<=0;
      }
      console.log(this.props.ingredientsLoaded)
      console.log(this.props.ings)
     return(
       <Aux>
         {this.props.ingredientsLoaded ? 
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
         purchasable={this.updatePurchaseState()}
         shouldShowOrder={this.shouldShowOrder}
         />
         </div> :<Spinner />}       
       </Aux> 
     )
   }
}
const mapStateToProps=state=>{
        return {
              ings:state.burgBuilder.ingredients,
              totalPrice:state.burgBuilder.totalPrice,
              ingredientsLoaded:state.burgBuilder.ingredientsLoaded
        }
}
const mapDispatchToProps=dispatch=>{
       return {
          onIngredientLoaded: ()=>dispatch(getTheIngredients()),
          onIngredientAdded : (ingName)=>dispatch(addingTheIngredient(ingName)),
          onIngredientRemoved : (ingName)=>dispatch(removingTheIngredient(ingName))
       }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios)); 