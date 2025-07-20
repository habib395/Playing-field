import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({product}) => {

  const { _id, ItemName, Image, Price, Description  } = product

  return (
    <div className="card bg-transparent border-2 border-none shadow-md p-4">
      <figure className="p-4">
        <img 
          src={Image}
          alt="Shoes"
          className="rounded-md sm:h-48 sm:w-full object-cover"
        />
      </figure>
      <div className="card-body sm:p-3 items-center text-center">
        <h2 className="card-title font-semibold text-black-700">{ItemName}
        {/* <div className="badge bg-transparent">{Price} $</div> */}
        </h2>
        <p className="text-black-700">{Description}</p>
        
          <NavLink to={`/details/${_id}`}>
          <button className="btn btn-sm btn-outline text-black">View Details</button>
          </NavLink>
      
      </div>
    </div>
  );
};

export default ProductCard;
