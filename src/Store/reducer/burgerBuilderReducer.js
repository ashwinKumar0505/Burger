import * as actionTypes from "../action/actionTypes";

const INGREDIENT_PRICE={
  salad:0.5,
  cheese:1,
  meat:2,
  bacon:1
}
const initialState = {
  ingredients: null,
  totalPrice: 4,
  ingredientsLoaded:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice:state.totalPrice+INGREDIENT_PRICE[action.ingredientName]
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice:state.totalPrice-INGREDIENT_PRICE[action.ingredientName]
      };
    case actionTypes.SET_THE_INGREDIENTS:
      return{
        ...state,
        ingredients:action.ingredients,
        ingredientsLoaded:true
      }
    case actionTypes.SETTING_INGREDIENTS_FAILED:
      return{
        ...state,
        ingredients:null
      }
    default:
      return state;
  }
};

export default reducer;
