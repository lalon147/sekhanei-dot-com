export const getUserToken=(email)=>{
    fetch(`https://sekhanei-dot-com-server-lalon147.vercel.app/jwt?email=${email}`)
     .then(res=>res.json())
       .then(data=>{
        if(data.token){
            console.log(data)
            localStorage.setItem("token",data.token)
        }
       })
  }