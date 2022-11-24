import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";


const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {createUser}=useContext(AuthContext)
  const handleRegister=(data)=>{
  console.log(data);
   createUser(data.email,data.password)
    .then(result=>{
      const user=result.user;
      console.log(user)})
     .catch(error=>{
      toast.error(`${error.message.slice(10,60)}`) 
      console.log(error)})
    

  }
















  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
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
          <button type="submit" className="btn w-full btn-outline bg-blue-500">REGISTER</button>
        </form>
      </div>

      
    </div>
  );
};

export default Register;
