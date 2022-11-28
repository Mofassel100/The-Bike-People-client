import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AdminRole from "../Hooks/AdminRole";
import BuyerRole from "../Hooks/BuyerRole";






const BuyerPrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const [isBuyer,setBuyerLoading]= BuyerRole(user?.email)
    const location =useLocation()
  
        if(loader || setBuyerLoading){
          return <p className="text-center ">L<span className='animate-pulse bg-lime-600'>o</span>aders</p>
        }
        if(! user && isBuyer){
            return <Navigate to='/login' state={{from:location}} replace />
        }
        return children ;

};

export default BuyerPrivateRoute ;