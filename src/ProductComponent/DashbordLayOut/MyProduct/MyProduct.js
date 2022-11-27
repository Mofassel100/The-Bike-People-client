import { useQuery } from '@tanstack/react-query';
import { success } from 'daisyui/src/colors';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
          toast.success("Product Success Full")
        })
      },[user?.email])


    
     
      const handleDeleteProduct =id =>{

        fetch(`http://localhost:4000/SellarProduct/Delete/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(deletes =>{
          console.log(deletes);
            const confirms = window.confirm("Are You Sure Delete")
            if(deletes.deletedCount > 0 &&  confirms){  
                    toast.error("delete Succes Fully Items Removes")
                    const ProductRemaining = data.filter(remain => remain?._id !==id)
                     setData(ProductRemaining)  
            }
            else{
                toast.error('Not Delete item')
            }
        })
    }
 
  
    return (
        <div>
          <p className='text-center my-7'> MY PRODUCT Total :  {data.length}</p>
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
     <p className="py-6 mr-2">purchars Times : {addProduct.Year}</p>
     <p className="py-6">Location : {addProduct.location}</p>
     <p className="py-6">Phone : {addProduct.phone}</p>
     <p className="py-6">Title  : {addProduct.name}</p>
     <p> {addProduct.description}</p>
    
     </div>
     <div className='text-center my-6'>
     <button onClick={()=>handleDeleteProduct(addProduct?._id)} className="btn btn-primary">Delete Product</button>
     </div>
     
    
    </div>
  </div>
</div>


          </div>






          
          )}
           
        </div>
    );
};

export default MyOrders;