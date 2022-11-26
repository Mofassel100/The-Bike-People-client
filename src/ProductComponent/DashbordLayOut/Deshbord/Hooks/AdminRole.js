import { useEffect, useState } from "react";

const AdminRole = email=>{
    const [AdminRoles,setAdminRole]=useState(false)
    const [AdminLoadins,setAdminLoaders] =useState(true)

useEffect(
    ()=>{

        if(email){
            fetch(`http://localhost:4000/userInfo/adminRole/${email}`)
            .then(res=>res.json())
            .then(admin=>{
                setAdminRole(admin)
                setAdminLoaders(false)

            })
        }
    },[email])
    return [AdminRoles,AdminLoadins]


}
export default AdminRole;
