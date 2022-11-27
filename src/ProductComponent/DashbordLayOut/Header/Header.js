import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import AdminRole from '../../../Hooks/AdminRole';




const Header = () => {
  const {user,loader}= useContext(AuthContext)

  // useEffect(()=>{
  //  useAdmin(user?)
  


  // },[user?.email])
  
const [isAdminRole]=AdminRole(user?.email)
   
    const deshbord = <React.Fragment>
    
    <li ><Link to='/deshbord'>Deshbord</Link></li>
    <li ><Link to='/deshbord/addproduct'>Add Product</Link></li>
    <li ><Link to='/deshbord/myproduct'>My Product </Link></li>
    {isAdminRole && <>
      <li ><Link to='deshbord/allsellers'>All Sellar</Link></li>
    <li ><Link to='deshbord/allbuyers'>All Buyers</Link></li>
    </>}
    
    
  
   
    <li ><Link to='deshbord/myorders'>My Orders</Link></li>

    
  </React.Fragment>
 
  

    
    return (
        <div>
            <div className="navbar bg-teal-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
      {deshbord}
           
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {deshbord}
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>
</div>
        </div>
    );
};

export default Header;