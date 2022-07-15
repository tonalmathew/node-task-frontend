import http from "./httpRequest";  
class getCompanyDetails {  
     
    getAll() {  
        return http.get("/api/v1/company");
      }  
        
}  
export default new getCompanyDetails(); 