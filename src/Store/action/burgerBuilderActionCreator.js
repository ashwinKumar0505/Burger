import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders"
export const addingTheIngredient = ingName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName,
  };
};

export const removingTheIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName,
  };
};

const setTheIngredients=(ings)=>{
  return{
    type:actionTypes.SET_THE_INGREDIENTS,
    ingredients:ings
  }
}
const settingIngredientsFailed=()=>{
  return{
    type:actionTypes.SETTING_INGREDIENTS_FAILED,
  }
}

export const getTheIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-myburger-50e7f.firebaseio.com/ingredients.json")
      .then(Response => {
            dispatch(setTheIngredients(Response.data))
      })
      .catch(error =>{
        dispatch(settingIngredientsFailed())
      })
  };
};
