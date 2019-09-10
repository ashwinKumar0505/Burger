import React,{Component} from "react"
import Aux from "../Aux";
import Modal from "../../components/Modal/Modal"
const WithErrorHandler=(WrappedComponent,axios)=>{
  return class extends Component
    {
    state={
      error:null,
    }
    componentWillMount(){
      this.reqInterceptor=axios.interceptors.request.use(request=>{
        this.setState({
          error:null
        })
        return request
      })
      this.resInterceptor=axios.interceptors.response.use(res=>res,error=>{
        this.setState({error:error})
      })
    }
    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
      
    }
    closeError=()=>{
     this.setState({
       error:null
     })
   }
    render(){
    return (
    <Aux>
    <Modal show={this.state.error} close={this.closeError}>{this.state.error ? this.state.error.message : null}</Modal>
    <WrappedComponent {...this.props} />
    </Aux>)
  }
}
}

export default WithErrorHandler;