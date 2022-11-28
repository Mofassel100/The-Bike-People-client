import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";





// const useAdmin=email=>{

//     const [isAdmin,setAdmin]=useState(false)
//     const [AdminLoadins,setAdminLoaders] =useState(true)
    

//     useEffect(()=>{

//         if(email){
// fetch(`https://final-resale-project-assignment.vercel.app/userInfo/adminRole/${email}`)
// .then(res=>res.json())
// .then(data=>{

//     console.log(data);
//     setAdmin(data?.isAdmin)
   
// })

//         }
//     },[email])
//     return [isAdmin]
// }
// export default useAdmin;


const AdminRole = email=>{
    const [isAdminRole,setAdminRole]=useState(false)
    const [AdminLoadins,setAdminLoaders] =useState(true)
   

useEffect(
    ()=>{

        if(email){
            fetch(`https://final-resale-project-assignment.vercel.app/adminRole/${email}`)
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
