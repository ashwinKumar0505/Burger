import axios from "axios";

const instance=axios.create({
  baseURL:"https://react-myburger-50e7f.firebaseio.com/"
})

export default instance;