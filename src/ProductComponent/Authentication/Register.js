import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const hadleLogingSubmit = (data) => {
    //     (data.email,data.password)
    //     .then((result)=>{

    //         console.log(result);
    //         toast.success('login Success full')
    //     })
    //     .catch(error=>{
    //         toast.error(error.message)
    //     })


    // }
    return (
        <div>
            
        </div>
    );
};

export default Register;