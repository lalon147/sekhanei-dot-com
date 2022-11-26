import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import {AuthContext} from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Feedback = () => {
     const {user,logOut}=useContext(AuthContext);
     const nav=useNavigate();
     const {data:comments=[],refetch}=useQuery({
        queryKey:["comments"],
        queryFn:()=>fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/comments").then(res=>res.json()).then(data=>{
       
        return data    
        })
     })
    const handleSubmit=(e)=>{
        if(!user){
          toast.error("LOGIN TO ADD FEEDBACK")
          nav("/login")
        }
        e.preventDefault();
        const text=e.target.comment.value;
        const comment={
            user:user?.displayName,email:user.email,image:user.photoURL,comment:text
        }
        console.log(comment);
        
        fetch("https://sekhanei-dot-com-server-lalon147.vercel.app/comments",{
            method:"POST",
            headers:{
                "content-type":"application/json",
                 authorization:`bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(comment)
        }).then(res=>res.json()).then(data=>{
          if(data.message==="Forbidden"){
            toast.error("YOU DON'T HAVE VALID TOKEN PLEASE LOGIN AGAIN ")
            logOut();
          }
          refetch();
          toast.success("COMMENT ADDED");
          e.target.reset();
          })
    }

  return (
        <div className="my-10">
         <h1 className="text-3xl font-semibold ">What Customers Says About us</h1>
         <div className="w-1/2 mx-auto my-10 grid grid-cols-1 md:grid-cols-3">
                {
                  comments.length>0 &&  comments?.map(comment=>{
                        return <div key={comment._id} className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img src={comment.image}  alt=""/>
                          </div>
                        </div>
                        <div className="chat-header">
                                 {comment.user}
                            </div>
                        <div className="chat-bubble">{comment.comment}</div>
                      </div>
                    })
                }
         </div>
            
       <div className="w-1/2 mx-auto my-10 space-y-4">
           
           <form onSubmit={handleSubmit}>
           <textarea name="comment" className="input input-bordered w-full"></textarea>
           <input   type="submit"  className="btn bg-blue-500" value={"COMMENT"}></input>
           </form>
       </div>
    
         
        </div>
    
  );
};

export default Feedback;


