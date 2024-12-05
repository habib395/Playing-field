import { useState } from "react"
import { FaStar } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Details = () =>{

    const {
        Image,
        CategoryName,
        ItemName,
        Description,
        Price, 
        Rating ,
        ProcessingTime,
        StockStatus
    } = useLoaderData()

    return(
        <div className="hero bg-base-200 min-h-screen py-10">
            <div className="w-11/12 mx-auto hero-content px-0 flex-col lg:flex-row-reverse">
            <img src={Image} className="max-w-lg w-full rounded-lg shadow-2xl" alt="" />
            <div>
                <h2 className="hidden md:block text-3xl font-bold text-center text-green-500 opacity-35 bg-emerald-100 p-10 rounded-full">Detail Information</h2>
            </div>
            <div>
                <h2 className="card-title text-3xl my-4">{CategoryName}
                    <div className="badge badge-green-500 text-base">
                    {Rating}
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                </h2>
                <h1 className="card-title">{ItemName}
                    <div className="badge badge-green-500">
                    {Price} $
                    </div>
                    </h1>
                    <p className="py-6">
                    {Description}
                    </p>
                    <div className="my-2 flex items-center gap-3">
                    Time: {ProcessingTime}
                    </div>
                    <p className="badge badge-green-500">
                    STOCK : {StockStatus}
                    </p>
            </div>
            <br />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Details