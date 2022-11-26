import axios from "axios"
import {  useEffect, useState } from "react"


const useRole=(email)=>{
    const [isRole,setIsRole]=useState(false)
    const [isRoleLoading,setIsRoleLoading]=useState(true)
    
    // https://sekhanei-dot-com-server-lalon147.vercel.app
    useEffect(()=>{
        if(email){
            axios.get(`https://sekhanei-dot-com-server-lalon147.vercel.app/users/admin/${email}`,{
                headers:{
                     authorization:`bearer ${localStorage.getItem("token")}`
                } 
            })
            .then(res=>res.data)
             .then(data=>{
                console.log(data)
                setIsRole(data.role)
                setIsRoleLoading(false)
            })
        }
        
    
    },[email])
    return [isRole,isRoleLoading] 


}
export default useRole