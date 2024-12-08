import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({product}) => {

  const { _id, ItemName, Image, Price, Description  } = product

  return (
    <div className="card bg-transparent border-2 border-green-500">
      <figure className="p-4">
        <img 
          src={Image}
          alt="Shoes"
          className="rounded-md sm:h-48 sm:w-full object-cover"
        />
      </figure>
      <div className="card-body sm:p-3 items-center text-center">
        <h2 className="card-title text-green-700">{ItemName}
        </h2>
        <div className="badge badge-success text-white">{Price} $</div>
        <p className="text-green-700">{Description}</p>
        
          <NavLink to={`/details/${_id}`}>
          <button className="btn btn-success">View Details</button>
          </NavLink>
      
      </div>
    </div>
  );
};

export default ProductCard;
