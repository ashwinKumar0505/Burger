import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/InputFields/Input";
class ContactData extends Component {
  state = {
    ingredients: this.props.ingredients,
    totalPrice: this.props.price,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your-Name",
          required:true
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your-Email",
          required:true
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your-Street",
            required:true
        
        },
        value: "",
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your-Postal Code",
          required:true
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "cash on delivery", displayValue: "cash on delivery" },
            { value: "online payment", displayValue: "Online payment" },
          ],
        },
        value: "cash on delivery",
      },
    },
    loading: false,
  };
  storeTheData = event => {
    event.preventDefault();
    const formData={};
    for(let formIdentifier in this.state.orderForm){
      console.log(this.state.orderForm[formIdentifier].value)
      formData[formIdentifier]=this.state.orderForm[formIdentifier].value
    }
    const orderInfo = {
      PersonData: formData,
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
    };
    this.setState({
      loading: true,
    });
    axios
      .post("/orders.json", orderInfo)
      .then(Response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error =>
        this.setState({
          loading: false,
        }),
      );
  }
  changeHandler(event, id) {
    const updatedOrderForm = this.state.orderForm;
    updatedOrderForm[id].value=event.target.value;
    this.setState({
      orderForm:updatedOrderForm
    })
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.storeTheData}>
            {formElementsArray.map(formElement => {
              return (
                <Input
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  changeHandler={event =>
                    this.changeHandler(event, formElement.id)
                  }
                />
              );
            })}
            <br></br>
            <Button btnType="Success">
              Order
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactData;
