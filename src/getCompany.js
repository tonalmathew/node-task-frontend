import http from "./httpRequest";  
class getCompanyDetails {  
     
    getAll(searchString) {  
        return http.get(`/api/v1/company/${searchString}`);
      }  
        
}  
export default new getCompanyDetails(); 