import React from "react";

const ProductCard = ({product}) => {

  const { categoryName, image, price, rating, stockStatus, description  } = product
  // console.log(product);


//   categoryName
// : 
// "Fitness Equipment"
// customization
// : 
// "Custom color and thickness"
// description
// : 
// "Non-slip yoga mat for comfortable practice."
// id
// : 
// 9
// image
// : 
// "https://i.ibb.co.com/47LWC97/pro-nine.png"
// itemName
// : 
// "Yoga Mat"00000000000000000000000000000000
// price
// : 
// 20
// processingTime
// : 
// "4-5 business days"
// rating
// : 
// 4.7
// stockStatus
// : 
// 50


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
        <div className="card-actions">
          <button className="btn btn-success">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
