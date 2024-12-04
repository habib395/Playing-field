import { useState } from "react"
import { FaStar } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

const Details = () =>{
    const {
        image,
        serviceName,
        category,
        description,
        duration,
        pricing,
        counselor, 
        rating 
    } = useLoaderData()

    const [feedback, setFeedback] = useState("")
    const {inputValue, setInputValue} = useState("")
    const handleFeedback = () =>{
        setFeedback(inputValue)
        setInputValue("")
        toast("Submitted Feedback")
    }

    return(
        <div className="hero bg-base-200 min-h-screen py-10">
            <div className="w-11/12 mx-auto hero-content px-0 flex-col lg:flex-row-reverse">
            <img src={image} className="max-w-lg w-full rounded-lg shadow-2xl" alt="" />
            <div>
                <h2 className="hidden md:block text-3xl font-bold text-center text-green-500 opacity-35 bg-emerald-100 p-10 rounded-full">Detail Information</h2>
            </div>
            <div>
                <h2 className="card-title text-3xl my-4">{counselor}
                    <div className="badge badge-green-500 text-base">
                    {rating}
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    </div>
                </h2>
                <h1 className="card-title">{serviceName}
                    <div className="badge badge-green-500">
                    {pricing}
                    </div>
                    </h1>
                    <p className="py-6">
                    {description}
                    </p>
                    <div className="my-2 flex items-center gap-3">
                    Time: {duration}
                    </div>
                    <p className="badge badge-green-500">
                    {category}
                    </p>
            </div>
            <br />

            <div className="join">
            <div>
                <div>
                    <input className="input input-bordered join-item" placeholder="feedback" value={inputValue} onClick={(e) => setInputValue(e.target.value)} />
                </div>
            </div>
            <div className="indicator">
                <button onClick={handleFeedback}
                className="btn btn-green-500 join-item">
                Feedback
                </button>

            </div>
            </div>
            <div className="font-bold my-10">
                Feedback:{feedback}
            </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Details