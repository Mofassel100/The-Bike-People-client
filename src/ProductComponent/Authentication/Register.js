import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {NewRegisterUser}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const hadleLogingSubmit = (data) => {
        NewRegisterUser(data.email,data.password)
        .then((result)=>{

            console.log(result);
            toast.success('login Success full')
        })
        .catch(error=>{
            toast.error(error.message)
        })


    }
    return (
        <div>
            <form onSubmit={handleSubmit(hadleLogingSubmit)}>
                <p className='text-2xl '>Login From</p>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Name in required" })} placeholder="Enter Your name" />
                   

                </div>
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
                    <button className='btn btn '>Register</button>
                    </div>



             

            </form>
        </div>
    );
};

export default Register;