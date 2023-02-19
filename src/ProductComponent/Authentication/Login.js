import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {loginUsers,googleLogIn}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const hadleLogingSubmit = (data) => {
        loginUsers(data.email,data.password)
        .then((result)=>{

            console.log(result);
            toast.success('login Success full')
            navigate(from ,{replace:true})
        })
        .catch(error=>{
            toast.error(error.message)
        })


    }

    
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
                    <div className='text-center my-4'>
                    <button className='btn btn '>Login</button>
                    </div>

            </form>

            <div className='mb-7'>
        <div className='text-center my-5 mx-3'>
        <button onClick={googleLogIn}> <FcGoogle className='text-5xl'/>  </button>
        </div>
                <p>New to Doctors Portal <Link className='text-teal-400' to='/register'>Create new Account</Link></p>
 
            </div>
        </div>
    );
};

export default Login;