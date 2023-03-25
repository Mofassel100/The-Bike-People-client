import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { loginUsers, googleLogIn, resetePassword, FacebookSignIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"
    const hadleLogingSubmit = (data) => {
        loginUsers(data.email, data.password)
            .then((result) => {
                console.log(result);
                toast.success('login Success full')
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const FaceboosinInWithLogin = () => {
        FacebookSignIn()
            .then(result => {
                navigate(from, { replace: true });
            })
    }
    const GooglesinInWithLogin = () => {
        googleLogIn()
            .then(result => {
                toast.success("Facebook Login succefull")
                navigate(from, { replace: true });
                console.log(result);

            })
    }

    // const hadleResetPassword = ()=>
    // {
    //     updatePassword(user,new)
    // }
    return (
        <div className=' grid justify-center items-center bg-black text-white font-bold mx-2'>
            <form onSubmit={handleSubmit(hadleLogingSubmit)} >
                <p className='text-5xl text-center my-6'>Login From</p>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="">Email</span>

                    </label>
                    <input type="email" className="input input-bordered w-full text-black max-w-xs" {...register("email", { required: "Email Address in required" })} placeholder="Enter Your Email" />
                    <br />
                    {/* 
                    {error.email && <p className='text-red-700' role="alert"> {errors.email?.message}</p>} */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type="Password" className="input input-bordered w-full text-black max-w-xs" {...register("password", {
                        required: "Password address is Required",
                        minLength: { value: 6, message: "password min mum 6 caracters" }
                    })} placeholder="Enter Your Password" />
                    <br />
                    {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <div className='text-center'>
                <div className='text-center my-4 tooltip tooltip-primary tooltip-top' data-tip="Login Now">
                    <button className='btn btn px-14'>Login</button>
                </div>
                </div>
               
            </form>
            <div className='text-center btn text-red-500 text-xl pt-2 my-2 tooltip tooltip-primary tooltip-top' data-tip="Forgate Password">
                <Link to="/resetpass">Reset Paassword</Link>
            </div>
            <div className='flex text-center py-8 pl-10'>
                {/* google login */}
                <div className='grid justify-center tooltip tooltip-primary tooltip-top items-center ml-11' data-tip="Google Login">
                    <button onClick={GooglesinInWithLogin}> <FcGoogle className='text-5xl' />  </button>
                    {/* <Link >  </Link> */}
                </div>
                {/* ----------------- */}
                {/* google login */}
                <div className='grid justify-center tooltip tooltip-primary tooltip-top items-center ml-11' data-tip="FaceBook Login">
                    <button onClick={FaceboosinInWithLogin}> <BsFacebook className='text-5xl bg-blue-600 rounded ' />  </button>
                    {/* <Link >  </Link> */}
                </div>
                {/* ----------------- */}
            </div>
            <div className='mb-7'>
                <p>Are You New User ? <Link className='text-teal-400 tooltip tooltip-primary tooltip-top hover:text-black hover:bg-white' to='/register' data-tip="Register Now">Create new Account</Link></p>
            </div>
        </div>
    );
};

export default Login;