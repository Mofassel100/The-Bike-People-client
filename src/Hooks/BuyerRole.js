import { useEffect, useState } from "react"

const BuyerRole = email=>{
    const [isBuyer,setBuyerRole]=useState(false)
    const [BuyerLoadins,setBuyerLoaders] =useState(true)
   

useEffect(
    ()=>{

        if(email){
            fetch(`https://final-resale-project-assignment.vercel.app/buyer/${email}`)
            .then(res=>res.json())
            .then(Buyer=>{
                setBuyerLoaders(false)
                setBuyerRole(Buyer?.isBuyer)
              

            })
        }
    },[email])
    return [isBuyer,BuyerLoadins]


}
export default BuyerRole;
