import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";



const PrivateRouter =({children}) => {
  
    const {user,loader}=useContext(AuthContext)
    const location =useLocation()
   
     if(loader){
        return <h3 className='text-3xl'>Loading</h3>
     }
     if(!user){
        return <Navigate to='/login' state={{from:location}} replace />


     }
     return children
     
    
}; 
    


export default PrivateRouter;