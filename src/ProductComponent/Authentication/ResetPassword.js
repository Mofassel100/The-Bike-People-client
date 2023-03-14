import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ResetPassword = () => {
    const {resetePassword}=useContext(AuthContext)
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const handleRrsetPassword = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;

        resetePassword(email)
            .then((result) => {
                console.log(result);
                toast.success('Send Password Reset Email')
                form.reset();
                navigate(from, { replace: true })
               
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
       
        <div className=' grid justify-center items-center bg-black text-white font-bold mx-2'>
        <form onSubmit={handleRrsetPassword} >
            <p className='text-5xl text-center my-6'>Reset Password</p>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="">Email</span>
                </label>
                <input type="email" required name='email' className="input input-bordered w-full text-black max-w-xs" placeholder="Enter Your Email" />
                <br />
                {/* 
                {error.email && <p className='text-red-700' role="alert"> {errors.email?.message}</p>} */}
            </div>
           
            <div className='text-center my-4'>
                <button className='btn btn '>Reset Password</button>
            </div>
        </form>
    
        <div className='mb-7'>
        </div>
    </div>
    );
};

export default ResetPassword;