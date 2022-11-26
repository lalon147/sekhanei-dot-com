import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import {AuthContext} from "../../context/UserContext";

const Feedback = () => {
     const {user}=useContext(AuthContext);
     const {data:comments=[],refetch}=useQuery({
        queryKey:["comments"],
        queryFn:()=>fetch("http://localhost:5000/comments").then(res=>res.json()).then(data=>{
        console.log(data)
        return data    
        })
     })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const text=e.target.comment.value;
        const comment={
            user:user.displayName,email:user.email,image:user.photoURL,comment:text
        }
        console.log(comment);
        
        fetch("http://localhost:5000/comments",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(comment)
        }).then(res=>res.json()).then(data=>{
          refetch();
          toast.success("COMMENT ADDED");
          e.target.reset();
          console.log(data)})
    }

  return (
        <div>
         <h1 className="text-3xl font-semibold ">What Customers Says About us</h1>
         <div className="w-1/2 mx-auto my-10 grid grid-cols-1 md:grid-cols-3">
                {
                    comments.map(comment=>{
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
           <input type="submit"  className="btn bg-blue-500" value={"COMMENT"}></input>
           </form>
       </div>
    
         
        </div>
    
  );
};

export default Feedback;


