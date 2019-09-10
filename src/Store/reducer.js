import * as actionTypes from "../Store/action";

const INGREDIENT_PRICE={
  salad:0.5,
  cheese:1,
  meat:2,
  bacon:1
}
const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    bacon: 0,
    cheese: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  console.log(state.totalPrice)
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

    default:
      return state;
  }
};

export default reducer;
