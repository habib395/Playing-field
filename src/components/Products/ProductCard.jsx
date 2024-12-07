import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({product}) => {

//   CategoryName
// : 
// "Sports Gear"
// Customization
// : 
// "Custom logo print"
// Description
// : 
// "High-quality football designed for professional matches."
// Image
// : 
// "https://i.ibb.co.com/s12gVmk/pro-one.png"
// ItemName
// : 
// "Professional Football"
// Price
// : 
// "29.99"
// ProcessingTime
// : 
// "3-5 business days"
// Rating
// : 
// " 4.8"
// StockStatus
// : 
// "20"
// _id
// : 
// "675196cb8658dee1cf00f604"

  const { _id, ItemName, CategoryName, Image, Price, Description  } = product
  // console.log(product);



  return (
    <div className="card bg-base-100 border-2 border-green-500">
      <figure className="px-10 pt-10">
        <img 
          src={Image}
          alt="Shoes"
          className="rounded-xl object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-green-700">{ItemName}
        <div className="badge badge-success text-white">{Price} $</div>
        </h2>
        <p className="text-green-700">{Description}</p>
        
          <NavLink to={`/details/${_id}`}>
          <button className="btn btn-success">View Details</button>
          </NavLink>
      
      </div>
    </div>
  );
};

export default ProductCard;
