import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AdminRole = email=>{
    const [isAdminRole,setAdminRole]=useState(false)
    const [AdminLoadins,setAdminLoaders] =useState(true)
   

useEffect(
    ()=>{

        if(email){
            fetch(`https://final-project-server-assignmen.vercel.app/adminRole/${email}`)
            .then(res=>res.json())
            .then(admin=>{
                setAdminRole(admin?.isAdminRole)
                setAdminLoaders(false)

            })
        }
    },[email])
    return [isAdminRole,AdminLoadins]


}
export default AdminRole;
