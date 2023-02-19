import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const AllBuyers = () => {
     
    const [buyers, setBuyers] = useState([])
    const [loader, setLoader] = useState(true)

const handleDelete =id =>{

    fetch(`https://final-resale-project-assignment.vercel.app/userBuyer/Delete/${id}`,{
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

            fetch('https://final-resale-project-assignment.vercel.app/userInfoUserData')
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
            <h1 className=''> All SEllars Total :  {buyers?.length}</h1>

            {buyers?.map(buyer=><>
            
                <div className="">
  {/* <table className="table w-full">
   
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
      
         
         </th>
        <td>
          <div className="flex items-center space-x-3">
          
           
            
          </div>
        </td>
        <td>
        
          <br/>
          <span className="badge badge-ghost badge-sm">Sellar Email</span>
        </td>
       
        <th>
        <div>
              <div className="font-bold mx-2"></div>
              
            </div>
        </th>
      
      </tr>
     
      
    </tbody>
   
   
    
  </table> */}
  <Table >
  <Thead>
    <Tr>
      <Th></Th>
      <Th></Th>
      <Th>{buyer[2]}</Th>
      <Th>{buyer [4]}</Th>
    </Tr>
    
  </Thead>
  <Tbody>
    <Tr>
      <Td> {buyer?.name}</Td>
      <Td> {buyer?.email}</Td>
      <Td>{buyer?.role}</Td>
      <Td>  <button onClick={()=>handleDelete(buyer?._id)} className='btn btn-warning'>Delete</button></Td>
    </Tr>
  </Tbody>
</Table>
</div>
            
            </>)}

        </div> 
            
        </div>
    );
};

export default AllBuyers;