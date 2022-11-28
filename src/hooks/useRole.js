
import {  useEffect, useState } from "react"
import toast from "react-hot-toast"


const useRole=(email)=>{
    const [isRole,setIsRole]=useState(false)
    const [isRoleLoading,setIsRoleLoading]=useState(true)
    
    // 
    //sekhanei-dot-com-server-lalon147.vercel.app
    useEffect(()=>{
        if(email){
            fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
             .then(data=>{
                console.log(data)
                if(data.message==="Forbidden"){
                    toast.error("LOGIN AGAIN")
                    setIsRoleLoading(false)
                    return 
                }
                console.log(data)
                setIsRole(data.role)
                setIsRoleLoading(false)
            }).catch(error=>{
                setIsRoleLoading(false)
                console.log(error)
                return
            })
        }
        
    
    },[email])
    return [isRole,isRoleLoading] 


}
export default useRole