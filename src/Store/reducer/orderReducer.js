 import * as actionTypes from "../action/actionTypes"
 
 const initialState={
    orders:null,
    loading:false
  }

  const orderReducer=(state=initialState,action)=>{
        switch(action.type){
          case (actionTypes.GETTING_THE_ORDERS):
             console.log(action.loading)
              return {
                  ...state,
                  orders:action.orders,
                  loading:action.loading
              }
           default:return state;     
        }
  }

  export default orderReducer
