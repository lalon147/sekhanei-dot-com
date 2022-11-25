import axios from "axios"
import { useEffect, useState } from "react"

const useRole=(email)=>{
    const [isRole,setIsRole]=useState(false)
    const [isRoleLoading,setIsRoleLoading]=useState(true)

    useEffect(()=>{
        if(email){
            axios.get(`http://localhost:5000/users/admin/${email}`)
            .then(res=>res.data)
             .then(data=>{
                setIsRole(data.role)
                setIsRoleLoading(false)
            })
        }
    
    },[email])
    return [isRole,isRoleLoading] 


}
export default useRole