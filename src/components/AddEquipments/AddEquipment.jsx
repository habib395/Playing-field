import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddEquipment = () => {

    const { user } = useContext(AuthContext)
    // console.log(user);

    const handleAddEquipment = event =>{
        event.preventDefault()
        const form  = event.target 
        const ItemName = form.ItemName.value
        const CategoryName = form.categoryName.value
        const Description = form.Description.value
        const Price = form.Price.value
        const Rating = form.Rating.value
        const Customization = form.Customization.value
        const ProcessingTime  = form.ProcessingTime.value
        const StockStatus = form.StockStatus.value
        const UserName = form.UserName.value
        const UserEmail = form.UserEmail.value

        const Image = form.PhotoURL.value
        const newEquipment = {ItemName, CategoryName, Description, Price, Rating, Customization, ProcessingTime, StockStatus, email, UserName, Image}
        console.log(newEquipment);

        // send data to the server
        fetch('http://localhost:5000/addEquipment', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newEquipment)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Equipment Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        event.target.reset()
    }
  return (
    <div className="bg-green-200 p-24">
      <h2 className="text-3xl font-extrabold">All A Equipment</h2>
      <form onSubmit={handleAddEquipment}>
        {/* form-row */}
        <div className="md:flex">
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
            <input type="text" name="ItemName" placeholder="Item Name" className="input input-bordered w-full" />
            </label>
         </div>
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Category Name</span>
            </label>
            <label className="input-group">
            <input type="text" name="categoryName" placeholder="Category Name" className="input input-bordered w-full ml-2" />
            </label>
         </div>
        </div>
        <div className="md:flex">
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Description</span>
            </label>
            <label className="input-group">
            <input type="text" name="Description" placeholder="Description" className="input input-bordered w-full" />
            </label>
         </div>
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <label className="input-group">
            <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full ml-2" />
            </label>
         </div>
        </div>
        <div className="md:flex">
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
            <input type="text" name="Customization" placeholder="Customization" className="input input-bordered w-full" />
            </label>
         </div>
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
            <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full ml-2" />
            </label>
         </div>
        </div>
        <div className="md:flex">
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
            <input type="text" name="ProcessingTime" placeholder="Processing Time" className="input input-bordered w-full" />
            </label>
         </div>
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
            <input type="text" name="StockStatus" placeholder="Stock Status" className="input input-bordered w-full ml-2" />
            </label>
         </div>
        </div>
        <div className="md:flex">
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
            <input type="email" name="UserEmail" 
            defaultValue={user && user.email}
            placeholder="User Email" className="input input-bordered w-full" disabled/>
            </label>
         </div>
         <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
            <input type="text" name="UserName" 
            defaultValue={user && user.displayName}
            placeholder="User Name" className="input input-bordered w-full ml-2" disabled/>
            </label>
         </div>
        </div>
        {/* photo URL */}
        <div className="">
         <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
            <input type="text" name="PhotoURL" placeholder="Photo" className="input input-bordered w-full" />
            </label>
         </div>
        </div>
        <input type="submit" value="Add Equipment" className="btn btn-block bg-green-500 my-3" />
      </form>
    </div>
  );
};

export default AddEquipment;
