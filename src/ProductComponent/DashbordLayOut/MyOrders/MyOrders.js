import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';




const MyOrders = () => {
  const {user,loader}= useContext(AuthContext)
 
 
    const [data,setData]=useState([])
    useEffect(
      ()=>{
        fetch(`http://localhost:4000/deshbord/myorders/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
          setData(data)
          console.log(data);
        })
      },[user?.email])

console.log(data);

   
      console.log(data);
    
     
  
 
  
    return (
        <div>
          <p>{data.length}</p>
          {data.map(addProduct=><div key={addProduct._id}>
            <div className="hero  my-8 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={addProduct?.picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{addProduct.company}</h1>
     <div className='grid grid-cols-1 lg:grid-cols-2'>
     <p className="py-6">Sellar Name : {addProduct.role}</p>
     <p className="py-6">Email : {addProduct.email}</p>
     <p className="py-6">Comments : {addProduct.commetsType}</p>
     <p className="py-6">Use Time : {addProduct.age}</p>
     <p className="py-6">purchars Times : {addProduct.year}</p>
     <p className="py-6">Location : {addProduct.location}</p>
     <p className="py-6">Phone : {addProduct.phone}</p>
     <p className="py-6">Title  : {addProduct.name}</p>
     <p> {addProduct.description}</p>
    
     </div>
     
      <button className="btn btn-primary">Delete Product</button>
    </div>
  </div>
</div>


          </div>






          
          )}
            My orders
        </div>
    );
};

export default MyOrders;