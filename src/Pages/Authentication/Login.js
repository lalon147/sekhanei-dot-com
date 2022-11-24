import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Login = () => {
  const { register,formState: { errors }, handleSubmit,} = useForm();
 const {logInWithEmail}=useContext(AuthContext)
  const handleLogin = (data) => {
    console.log(data);
    logInWithEmail(data.email,data.password).then(result=>{
      const user=result.user;
      console.log(user)
    })
  };

  return (
    <div className="flex w-11/12 items-center justify-between  mx -auto ">
      <div className="w-1/2">
        <img src="https://i.ibb.co/pX0s65j/20944201.jpg" alt="20944201" border="0"/>
      </div>

      <div className="w-1/4">
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-8 shadow-lg p-4">
          <h1 className="text-3xl text-blue-600"> LOGIN TO YOUR ACCOUNT</h1>
           <input
            className="input input-bordered w-full "
            {...register("email", { required: true })}
            placeholder="EMAIL"
          />
          {errors.email && toast.error("EMAIL IS REQUIRED")}
          <input
            className="input input-bordered w-full "
            {...register("password", {
              required: "PASSWORD REQUIRED",
              minLength: { value: 6, message: "PASSWORD MUST BE 6 CHACRACTER" },
            })}
            placeholder="PASSWORD"
            type="password"
          />
          {errors.password && toast.error(`${errors.password?.message}`)}
          <p className="text-blue-500"><Link  to="/reset-password">FORGET PASSWORD?</Link></p>
          <button type="submit" className="btn w-full btn-outline bg-blue-500">
            LOGIN
          </button>
           <p className="text-blue-600"> <Link to="/register">DON'T HAVE AN ACCOUNT SIGN-UP</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
