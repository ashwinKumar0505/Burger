import React from 'react';
import './App.css';
import Layout from "./components/layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import CheckOut from "./containers/CheckOut/CheckOut"
import { Route , Switch } from "react-router-dom"
import MyOrders from "./containers/MyOrders/MyOrders"
function App() {
  return (
    <div>
      <Layout>
      <Switch>
      <Route path="/checkout" component={CheckOut}/>
      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/myorders" component={MyOrders} />
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
