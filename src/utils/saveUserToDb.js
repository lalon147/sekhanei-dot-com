export const saveUserToDb=(email,role,img)=>{
   const   user={email,role,img}
    fetch("http://localhost:5000/users",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(user)
      }).then(res=>res.json()).then(data=>console.log(data)).catch(error=>console.log(error))

}

