import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    // const bd ={
    //     role:"sellar"
    // }
    // const { sellarData:data=[], isLoading } = useQuery({
    //     queryKey: ['catagory'],
    //     queryFn: async () => {
    //     //   const res = await fetch(`http://localhost:4000/userInfoSellar?role=${bd}`)
    //       const sellarData = await res.json()

    //       return sellarData;
    //     }
    //   })

    //   if (isLoading) {
    //     return <h1>Loaserd</h1>
    //   }
    const [data, setDatas] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(
        () => {

            fetch('http://localhost:4000/userInfoUserData')
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
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
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
          <label><td>Delete</td>
            <input  type="checkbox" className="checkbox" />
          </label>
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