import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AdminRole from '../../Hooks/AdminRole';
import SellarRole from '../../Hooks/SellarRoles';
import ContactModal from '../ContactUS/ContactModal';
const Navber = () => {
  const { LogOutUser, user, googleLogIn } = useContext(AuthContext)
  const googleLogin = () => {
    googleLogIn()
      .then(
        result => {
          const user = result.user;
          const usersdata = {
            name: user.displayName,
            email: user.email,
            role: 'buyer'
          }
          fetch('https://final-project-server-assignmen.vercel.app/usersInfo', {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(usersdata)
          })
            .then(result => {
              toast.success('Google Login Succefull')

              console.log(result);
            })
            .catch(error => {
              toast.error(error.message)
            })
        }
      )
      .catch(error => {
        toast.error(error.message)
      })
  }
  const [isAdminRole] = AdminRole(user?.email)
  const [isSeller] = SellarRole(user?.email)
  const myInfo = <React.Fragment>
    <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip="Home"><Link to='/'>Home</Link></li>
    <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip="About Us Info"><Link to='/about'>About Us</Link></li>
    <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip  lg:tooltip-left  sm:tooltip-top' data-tip="Contact Information"><label htmlFor="my-modal-4" className="">Contact Us</label></li>
    <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip="Blog Details"><Link to='/blogs'>Blog</Link></li>
    {user?.uid ?
      <>
        <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip="User Log Out"><Link ><button onClick={LogOutUser}>Log Out</button></Link></li>
        <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip="User Profile"><Link >{
          user?.photoURL ? <> <img className='w-10 h-10 rounded-full' src={user?.photoURL} /></>:<> <img className='w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH6TfTtq91hzmeIvm_4JOdb5y1UWjTlYZdA&usqp=CAU" /></>
        }</Link></li>
      </>
      :
      <>
        <li className='px-2   mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip="User Login"> <Link to='login'>Login</Link></li>
        <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip="User Register"><Link to='register'>Register</Link></li>

      </>}
    {/* <div className="relative group">
              <div className="flex items-center cursor-pointer py-1">
                <button className="bg-blue p-3 inline-flex justify-center items-center ">
                  <span>Features</span>
                  <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
              </div>
              <div className="items-center  absolute  invisible group-hover:visible">
                <ul className="list-reset text-black">
                  <li><Link to="/TaskManagement/TaskManagement" className="px-2  py-2   block">Task Management</Link></li>
                  <li><Link to="/teamManagement/createMember" className="px-2 py-2   block">Create Team</Link></li>
                  <li><Link to="/teamManagement/teamMembers" className="px-2 py-2   block">TeamMember</Link></li>
                  <li> <Link className="px-2 py-2   block" to='/Features/features'>Portfolios</Link></li>
                  <li> <Link className="px-2 py-2   block" to='/AllProjects/AllProjects'>My Projects</Link></li>

                  <li> <Link className="px-2 py-2   block" to='/integration/integrations'>Integration</Link></li>
                  <li> <Link className="px-2 py-2   block" to="/myGoals">Goals</Link></li>
                </ul>
              </div>
            </div> */}
    {isAdminRole && <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-left  sm:tooltip-top' data-tip='Deshboard'><Link to='/deshbord'>Deshbord</Link></li>}
    {isSeller && <li className='px-2 mx-2 hover:text-lime-400 tooltip-primary tooltip lg:tooltip-right  sm:tooltip-top' data-tip=" Admin Dashbord "><Link to='/deshbord'>Deshbord</Link></li>}
  </React.Fragment>
  const deshbord = <React.Fragment>
  </React.Fragment>
  return (
    <div className="navbar bg-black text-white font-bold" >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
            {myInfo}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-lime-600 ">RS MOTOR BIKE</a>
      </div>
      <div className="navbar-center hidden lg:flex">

        {/* <div className="relative group">
              <div className="flex items-center cursor-pointer py-1">
                <button className="bg-blue p-3 inline-flex justify-center items-center ">
                  <span>Features</span>
                  <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
              </div>
              <div className="items-center absolute  invisible group-hover:visible">
                <ul className="list-reset text-black">
                  <li><Link to="/TaskManagement/TaskManagement" className="px-2 py-2   block">Task Management</Link></li>
                  <li><Link to="/teamManagement/createMember" className="px-2 py-2   block">Create Team</Link></li>
                  <li><Link to="/teamManagement/teamMembers" className="px-2 py-2   block">TeamMember</Link></li>
                  <li> <Link className="px-2 py-2   block" to='/Features/features'>Portfolios</Link></li>
                  <li> <Link className="px-2 py-2   block" to='/AllProjects/AllProjects'>My Projects</Link></li>

                  <li> <Link className="px-2 py-2   block" to='/integration/integrations'>Integration</Link></li>
                  <li> <Link className="px-2 py-2   block" to="/myGoals">Goals</Link></li>


                </ul>

              </div>

            </div> */}
        <ul className="menu menu-horizontal p-0">
          {
            myInfo
          }
        </ul>
      </div>
      <div className="">
        {/* <div className="navbar-end hidden lg:flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {deshbord}
          </ul>
        </div>
          
        </div> */}
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {deshbord}
          </ul>
        </div>
     */}
      </div>
      <ContactModal></ContactModal>
    </div>
  );
};

export default Navber;