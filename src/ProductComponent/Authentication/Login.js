import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {loginUsers}=useContext(AuthContext)
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
        <div className=' grid justify-center items-center bg-purple-200 mx-2'>
            <form onSubmit={handleSubmit(hadleLogingSubmit)} >
                <p className='text-2xl text-'>Login From</p>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address in required" })} placeholder="Enter Your Email" />
                    <br />
                    {/* 
                    {error.email && <p className='text-red-700' role="alert"> {errors.email?.message}</p>} */}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>

                    </label>
                    <input type="Password" className="input input-bordered w-full max-w-xs" {...register("password", {
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

            <div>
                <p>New to Doctors Portal <Link className='text-teal-400' to='/register'>Create new Account</Link></p>

                <br />
                <div className='text-center text-3xl'>-----------Or--------------</div>
                <button className='btn btn-circle w-full'>CONTINUE WITH GOOGLE ACCOUNT</button>
            </div>
        </div>
    );
};

export default Login;