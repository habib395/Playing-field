import { useState } from "react"
import { FaStar } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Details = () =>{
    const {
        image,
        categoryName,
        itemName,
        category,
        description,
        price, 
        rating ,
        processingTime,
        stockStatus
    } = useLoaderData()

    return(
        <div className="hero bg-base-200 min-h-screen py-10">
            <div className="w-11/12 mx-auto hero-content px-0 flex-col lg:flex-row-reverse">
            <img src={image} className="max-w-lg w-full rounded-lg shadow-2xl" alt="" />
            <div>
                <h2 className="hidden md:block text-3xl font-bold text-center text-green-500 opacity-35 bg-emerald-100 p-10 rounded-full">Detail Information</h2>
            </div>
            <div>
                <h2 className="card-title text-3xl my-4">{categoryName}
                    <div className="badge badge-green-500 text-base">
                    {rating}
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                </h2>
                <h1 className="card-title">{itemName}
                    <div className="badge badge-green-500">
                    {price} $
                    </div>
                    </h1>
                    <p className="py-6">
                    {description}
                    </p>
                    <div className="my-2 flex items-center gap-3">
                    Time: {processingTime}
                    </div>
                    <p className="badge badge-green-500">
                    STOCK : {stockStatus}
                    </p>
            </div>
            <br />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Details