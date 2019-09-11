import * as actionTypes from "../action/actionTypes";
import axios from "../../axios-orders";

const gettingTheOrder = fetchedOrders => {
  return {
    type: actionTypes.GETTING_THE_ORDERS,
    orders: fetchedOrders,
    loading: true,
  };
};

export const fetchingTheOrder = () => {
  return dispatch => {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(gettingTheOrder(fetchedOrders));
      })
      .catch(error => error);
  };
};
