import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
     
    const [buyers, setBuyers] = useState([])
    const [loader, setLoader] = useState(true)

const handleDelete =id =>{

    fetch(`http://localhost:4000/userBuyer/Delete/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(deletes =>{
        const confirms = window.confirm("Are You Sure Delete")
        if(deletes.deletedCount > 0 &&  confirms){  
                
                const Buyerrremaining = buyers.filter(remain => remain._id !==id)
                toast.error("delete Succes Fully Items Removes")
                 setBuyers(Buyerrremaining)  
        }
        else{
            toast.error('Not Delete item')
        }
    })
}
    useEffect(
        () => {

            fetch('http://localhost:4000/userInfoUserData')
                .then((res) => res.json())
                .then(buyer => {
                    const filters = buyer.filter(buyer => buyer?.role === "buyer")
                    setLoader(false)
                   setBuyers(filters)

                    console.log(buyer);
                })
        }
        , [])

    
    return (
        <div>
              <div>
            <h1 className='text-center my-6'> All SEllars Total :  {buyers?.length}</h1>

            {buyers?.map(buyer=><>
            
                <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
            <button>Deletet</button>
        
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
        <button onClick={()=>handleDelete(buyer?._id)} className='btn btn-warning'>Delete</button>
         
         </th>
        <td>
          <div className="flex items-center space-x-3">
          
            {buyer?.name}
            
          </div>
        </td>
        <td>
         {buyer?.email}
          <br/>
          <span className="badge badge-ghost badge-sm">Sellar Email</span>
        </td>
       
        <th>
        <div>
              <div className="font-bold mx-2">{buyer?.role}</div>
              
            </div>
        </th>
      
      </tr>
     
      
    </tbody>
   
   
    
  </table>
</div>
            
            </>)}

        </div> 
            
        </div>
    );
};

export default AllBuyers;