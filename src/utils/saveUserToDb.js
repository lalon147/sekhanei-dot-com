export const saveUserToDb=(email,role)=>{
   const   user={email,role}
    fetch("http://localhost:5000/users",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(user)
      }).then(res=>res.json()).then(data=>console.log(data)).catch(error=>console.log(error))

}

