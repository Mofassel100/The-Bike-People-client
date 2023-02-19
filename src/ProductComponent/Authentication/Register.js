import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { NewRegisterUser, UpdateUsersProfils,loader,googleLogIn } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();

//     <select name="slot" className="select select-bordered w-full">
//     {
//         slots.map((slot, i) => <option
//             value={slot}
//             key={i}
//         >{slot}</option>)
//     }
// </select>

    const hadleLogingSubmit = (data) => {
        const userProfile ={

           
            name:data.name,
            email:data.email,
            role:data.role,
            
        }
        
        
       fetch('https://final-resale-project-assignment.vercel.app/usersInfo',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(userProfile)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
        
        NewRegisterUser(data.email, data.password)
            .then((result) => {

              

                const profils = {
                    displayName: data.name,

                }
                UpdateUsersProfils(profils)
                    .then(result => {
                        toast.success('Update Success full')
                        console.log(result);
                       
                        navigate(from, { replace: true });


                    })
                    .catch(error => {
                        toast.error(error.message)
                        console.log(error);
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })


    }
    // if(loader){

    //     return <h1>Loader</h1>
    // }
  
    return (
        <div className=' grid justify-center items-center bg-black text-white mx-2'>
            <form onSubmit={handleSubmit(hadleLogingSubmit)}>
                <p className='text-2xl text-center '>Register </p>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-white font-bold">Name</span>

                    </label>
                    <input type="text" className="input font-bold  input-bordered w-full max-w-xs" {...register("name", { required: "Name in required" })} placeholder="Enter Your name" />


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold text-white">Photo URL</span>

                    </label>
                    <input type="text" className="input font-bold input-bordered w-full max-w-xs" {...register("photoURL")} placeholder="Enter Your photo URL" />


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-white font-bold">Email</span>

                    </label>
                    <input type="email" className="input fond-bold input-bordered w-full max-w-xs" {...register("email", { required: "Email Address in required" })} placeholder="Enter Your Email" />
                    <br />
                    {/* 
                    {error.email && <p className='text-red-700' role="alert"> {errors.email?.message}</p>} */}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-white font-bold">Password</span>

                    </label>
                    <input type="Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                        required: "Password address is Required",
                        minLength: { value: 6, message: "password min mum 6 caracters" }
                    })} placeholder="Enter Your Password" />
                    <br />
                    {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}


                </div>
                <div className='flex'>
                      
                <select required className='px-5 font-bold text-black py-3' {...register("role")}>
        <option className='p-3 ' value="buyer">Buyers</option>
        <option className='p-3' value="sellar">sellars</option>
        
      </select> 
      <div className='grid justify-center items-center ml-11'>
        <button onClick={googleLogIn}> <FcGoogle className='text-5xl'/>  </button>
      {/* <Link >  </Link> */}
      </div>
     

                </div>




                <div className='text-center my-4'>
                    <button className='btn btn '>Register</button>
                </div>


              

            </form>
           
        </div>
    );
};

export default Register;