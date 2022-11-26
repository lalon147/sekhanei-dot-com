import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import { saveUserToDb } from "../../utils/saveUserToDb";
import {FcGoogle} from "react-icons/fc";



const Register = () => {
  const nav=useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {createUser,profileUpdate,logInWithGoogle}=useContext(AuthContext); const imgHostKey=process.env.REACT_APP_IMAGE 
  const location =useLocation();
  const from =location.state?.from?.pathname || "/"
  const handleRegister=async(data)=>{     
   const image=data.image[0]; 
   const formData=new FormData();
   formData.append("image",image);
   
   
   createUser(data.email,data.password)
    .then(result=>{
      const user=result.user;
      const url=`https://api.imgbb.com/1/upload?key=${imgHostKey}`
      fetch(url,{
         method:"POST",
         body:formData       
        }).then(res=>res.json()).then(imgData=>{
               
               profileUpdate(user,data.name,imgData.data.url).then(()=>toast.success("PROFILE UPDATED"))
               saveUserToDb(data.email,data.role,imgData.data.url); 
          })      
     
      nav(from ,{replace:true})
      console.log(user)})
     .catch(error=>{
      toast.error(`${error.message.slice(10,60)}`) 
      console.log(error)})
    

  }
  const handleGoogle=()=>{
    logInWithGoogle().then(result=>{
      const user=result.user;
      console.log(user);
      saveUserToDb(user.email,"user",user.photoURL);nav(from ,{replace:true})
   }).catch(error=>{
     const message=error.message.slice(10,50);
     toast.error(`${message}`)
   })
  }

  

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto">
                  <div>
                          <img src="https://i.ibb.co/M6MH36p/6343845.jpg"
                               alt="6343845"
                               border="0"
                           ></img>
                   </div>

                   <div>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          <input
            className="input input-bordered w-full "
            {...register("name",{ required: true })  }
            placeholder="FULL NAME"
          />
           {errors.name && toast.error("NAME IS REQUIRED")}
          <input
            className="input input-bordered w-full "
            {...register("email",{ required: true })}
            placeholder="EMAIL"
          />
          {errors.email && toast.error("EMAIL IS REQUIRED")}
          <input
            className="input input-bordered w-full "
            {...register("password",{ required: "PASSWORD REQUIRED",minLength: {value:6,message:"PASSWORD MUST BE 6 CHACRACTER"} })}
            placeholder="PASSWORD" type="password"
          />
          {errors.password && toast.error(`${errors.password?.message}`)}
          <input type="file" className="input input-bordered w-full" {...register("image",{ required: true })}></input>
          {errors.image && toast.error("IMAGE IS REQUIRED")}
          <select
            className="select select-bordered w-full"
            {...register("role", { required: true })}
          >
            <option disabled selected>
              WHAT ROLE DO YOU WANT
            </option>
            <option value="user">BUYER/USER</option>
            <option value="seller">SELLER</option>
          </select>
          {errors.role && toast.error("ROLE IS REQUIRED")}
          <button type="submit" className="border-0 btn w-full btn-outline bg-blue-500">REGISTER</button>        
        </form>
        <br></br>
        <button onClick={handleGoogle} className="btn w-full btn-outline bg-blue-600 text-white">CONTINUE WITH GOOGLE <FcGoogle className="mx-2"></FcGoogle></button>
      </div>

      
    </div>
  );
};

export default Register;
