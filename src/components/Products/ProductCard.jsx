import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({product}) => {

  const { id, categoryName, image, price, rating, stockStatus, description  } = product
  // console.log(product);



  return (
    <div className="card bg-base-100 border-2 border-green-500">
      <figure className="px-10 pt-10">
        <img 
          src={image}
          alt="Shoes"
          className="rounded-xl object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-green-700">{categoryName}
        <div className="badge badge-success text-white">{price} $</div>
        </h2>
        <p className="text-green-700">{description}</p>
        
          <NavLink to={`/details/${id}`}>
          <button className="btn btn-success">View Details</button>
          </NavLink>
      
      </div>
    </div>
  );
};

export default ProductCard;
