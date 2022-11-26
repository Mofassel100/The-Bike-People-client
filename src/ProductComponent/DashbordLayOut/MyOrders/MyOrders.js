import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';




const MyOrders = () => {
  const {user,loader}= useContext(AuthContext)
 
 
    const [data,setData]=useState([])
    useEffect(
      ()=>{
        fetch(`http://localhost:4000/deshbord/deshbord/myorders/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
          setData(data)
          console.log(data);
        })
      },[user?.email])

console.log(data);

    // const { data, isLoading,refetch } =useQuery({
    //     queryKey: ['data'],
       
    //     queryFn: async () => {
    //       const res = await fetch(`http://localhost:4000/deshbord/deshbord/myorders/${user?.email}`)
    //       const data = await res.json()
          
       
    //       return data;
    //     }
    //   })
      console.log(data);
    
     
  
 
  
    return (
        <div>
          <p>{data.length}</p>
          {data.map(addProduct=><>
          <p>{addProduct.company}</p>
          </>)}
            My orders
        </div>
    );
};

export default MyOrders;