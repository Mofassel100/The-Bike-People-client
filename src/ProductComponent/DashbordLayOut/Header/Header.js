import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import AdminRole from '../../../Hooks/AdminRole';
import BuyerRole from '../../../Hooks/BuyerRole';
import SellarRole from '../../../Hooks/SellarRoles';
import Footer from '../../Footer/Footer';
const Header = () => {
  const { user, loader } = useContext(AuthContext);
  // useEffect(()=>{
  //  useAdmin(user?)
  // },[user?.email])
  const [isAdminRole] = AdminRole(user?.email);
  const [isSeller] = SellarRole(user?.email);
  const [isBuyer] = BuyerRole(user?.email);
  const deshbord = (
    <React.Fragment>
      <li
        className="px-2 mx-2 hover:text-lime-400  tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
        data-tip="Home"
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className="px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
        data-tip="DEshbord"
      >
        <Link to="/deshbord">Deshbord</Link>
      </li>
      {isSeller && (
        <>
          <li
            className="px-2 mx-2 hover:text-lime-400tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="Add Product"
          >
            <Link to="/deshbord/addproduct">Add Product</Link>
          </li>
          <li
            className="px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="My Product"
          >
            <Link to="/deshbord/myproduct">My Product </Link>
          </li>
        </>
      )}
      {isAdminRole && (
        <>
          <li
            className="px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="All Sellar"
          >
            <Link to="deshbord/allsellers">All Sellar</Link>
          </li>
          <li
            className="px-2 mx-2 hover:text-lime-400  tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="All Buyer"
          >
            <Link to="deshbord/allbuyers">All Buyers</Link>
          </li>
          <li
            className="px-2 mx-2 hover:text-lime-400tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="Add Product"
          >
            <Link to="/deshbord/addproduct">Add Product</Link>
          </li>
          <li
            className="px-2 mx-2 hover:text-lime-400tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="Add Product"
          >
            <Link to="/deshbord/addGuantiHand">Add Hand Product</Link>
          </li>
          <li
            className="px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="My Product"
          >
            <Link to="/deshbord/myproduct">My Product </Link>
          </li>
          <li
            className="px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
            data-tip="My Orders"
          >
            <Link to="deshbord/myorders">My Orders</Link>
          </li>
        </>
      )}
      {isBuyer && (
        <li
          className="px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top"
          data-tip="My Orders"
        >
          <Link to="deshbord/myorders">My Orders</Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div className="bg-black text-white">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              {deshbord}
            </ul>
          </div>
        </div>
        <Link
          to="deshbord"
          className="btn btn-ghost normal-case text-lime-400 "
        >
          RS MOTOR Bikes
        </Link>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{deshbord}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Header;
