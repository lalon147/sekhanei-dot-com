import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';

const BookModal = ({car}) => {
    const seller_email=car.seller_email
     const {user}=useContext(AuthContext);
     const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const price=form.carPrice.value;
        const carName=form.carName.value;
        const carPrice=form.carPrice.value;
        const location=form.location.value;
        const phone=form.phone.value;
        const booking={name,email,price,carName,carPrice,location,phone,image:car.image,seller_email,carId:car._id}
        console.log(booking);
        fetch("http://localhost:5000/booking",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(booking)
        }).then(res=>res.json()).then(data=>{
          toast.success("ITEM BOOKED")
          console.log(data)})

     }
    return (
        <>
         <input type="checkbox" id="car-booking" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="car-booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
   
    <form onSubmit={handleSubmit}  className="grid grid-cols-1 gap-4 my-5">            
    <input disabled defaultValue={ `${user && user.displayName}` } type="text" name="name" placeholder="Your name" className="input input-bordered w-full" />
    <input disabled defaultValue={`${user && user.email}`} type="email" name="email"  className="input input-bordered w-full" />
    <input disabled defaultValue={`${car && car.name}`} type="text" name="carName"  className="input input-bordered w-full" />
    <input disabled defaultValue={`${car && car.present_price}`} type="text" name="carPrice"  className="input input-bordered w-full" />
    <input placeholder='Phone Number' type="text" name="phone"  className="input input-bordered w-full" />
    <input placeholder='location' type="text" name="location"  className="input input-bordered w-full" />
    <input type="submit" value="submit" className="bg-blue-500 btn w-full" />
    

    </form>
  </div>
</div>
        </>
    );
};

export default BookModal;