 
function verifytoken(){

    

    try {
      
      return  localStorage.getItem("token") ===null ? false : true;
      
     
      
    } catch (error) {
            
    }


}
module.exports=verifytoken;