import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const MyOrders = () => {
    const [data,setData]=useState([])
    useEffect(
      ()=>{
        fetch('https://final-resale-project-assignment.vercel.app/book')
        .then(res=>res.json())
        .then(data=>{
          setData(data)
         
          toast.success("Product Success Full")
        })
      },[])
    return (
        <div>
            {
                data.map(
                    book =><>
                    </>
                )
            }
            
            
        </div>
    );
};

export default MyOrders;