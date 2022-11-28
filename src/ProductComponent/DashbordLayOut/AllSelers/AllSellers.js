import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
   
    const [data, setDatas] = useState([])
    const [loader, setLoader] = useState(true)






const handleDelete =id =>{

    fetch(`https://final-resale-project-assignment.vercel.app/userSeler/Delete/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(deletes =>{

        const confirms = window.confirm("Are Are Sure Delete Items")
   
        if( deletes.deletedCount > 0 && confirms){

            
            const Sellarremaining = data.filter(remain => remain._id !==id)
            toast.error("delete Succes Fully Items Removes")
            setDatas(Sellarremaining)

            
        }
        else{
            toast.error('Not Delete item')
        }


    })
}
    useEffect(
        () => {

            fetch('https://final-resale-project-assignment.vercel.app/userInfoUserData')
                .then((res) => res.json())
                .then(sellar => {
                    const filters = sellar.filter(sell => sell?.role === "sellar")
                    setLoader(false)
                    setDatas(filters)

                    console.log(filters);
                })
        }
        , [])


    return (
        <div>
            <h1 className='text-center my-6'> All SEllars Total :  {data?.length}</h1>

            {data?.map(sellar=><>
            
                <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
            <button>Deletet</button>
          {/* <label>
            <input  type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>
        <button onClick={()=>handleDelete(sellar?._id)} className='btn btn-warning'>Delete</button>
         
        </th>
        <td>
          <div className="flex items-center space-x-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div> */}
            {sellar?.name}
            
          </div>
        </td>
        <td>
         {sellar?.email}
          <br/>
          <span className="badge badge-ghost badge-sm">Sellar Email</span>
        </td>
       
        <th>
        <div>
              <div className="font-bold mx-2">{sellar?.role}</div>
              
            </div>
        </th>
        {/* <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th> */}
      </tr>
     
      
    </tbody>
   
   
    
  </table>
</div>
            
            </>)}

        </div>
    );
};

export default AllSellers;