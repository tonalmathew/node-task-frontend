import axios from "axios";  

export default axios.create({  
  baseURL: "https://riafy-test-api.herokuapp.com/",  
  headers: {  
    "Content-type": "application/json"  
  }  
}); 