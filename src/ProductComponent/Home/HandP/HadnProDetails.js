import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HadnProDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
       <div className='bg-black text-white'>
         <div className='grid justify-center items-center py-6'>

<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-6'>
    <div>
    <div className="hero min-w-screen  hidden lg:block mg:block min-h-screen" style={{ backgroundImage: `url(${data?.picture})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5"></p>
      
    </div>
  </div>
</div>
    </div>
    <div>
        <div className='card card-title min-w-max py-9 sm:w-72'>{data?.name}</div>
    <div className="card  shadow-xl">
 <div  className='lg:hidden md:hidden block'> <figure><img src={data?.picture} className='w-72 h-56' alt="Album"/></figure></div>
  <div className="card-body">
    <h2 className="card-title">Price : <span className='text-lime-600 pr-10'>{data?.OrginalePrice}</span>Size : {data?.size}  <span></span></h2>
    <h2>Color : {data?.age}</h2>
    <h2> {data?.commetsType}</h2>
   
    <p>Click the button to Product Add.</p>
    <div className="card-actions  justify-center">
      <button className="btn btn-primary w-full">Add To Card</button>
    </div>
  </div>
</div>
    </div>
</div>

</div>
       </div>
    );
};

export default HadnProDetails;