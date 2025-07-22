import { useContext, useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from './../../AuthProvider/AuthProvider';


const Details = () =>{
    const { user } = useContext(AuthContext);
    const [ review, setReview ] = useState({ rating: 0, comment: "" })
    const [reviews, setReviews] = useState([])

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

    useEffect(() =>{
        const fetchReviews = async() =>{
            try{
                const res = await fetch(`http://localhost:5000/reviews/${ItemName}`);
                const data = await res.json()
                setReviews(data)
            }catch(error){
                console.error("Error fetching reviews", error)
            }
        }
        fetchReviews()
    }, [ItemName])

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user) return alert("Please login to submit a review.");
  if (review.rating < 1 || review.rating > 5 || !review.comment.trim()) {
    return alert("Please provide a valid rating and comment.");
  }

  try {
    const response = await fetch(`http://localhost:5000/review/${user.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user.displayName,
        rating: review.rating,
        comment: review.comment,
        itemId: ItemName,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Review submitted successfully!");
      setReview({ rating: 0, comment: "" });
    } else {
      alert(result.message || "Submission failed");
    }
  } catch (error) {
    console.error("Error submitting review:", error);
    alert("Something went wrong. Please try again later.");
  }
};





    return(
        <div>
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
                    <p className="badge">
                    STOCK : {StockStatus}
                    </p>
                     {/* review section */}
            <form onSubmit={(e) => handleSubmit(e)} className="mt-6 rounded-lg space-y-5">
                <h2 className="text-xl font-semibold md-2 py-2">Leave a comment</h2>
                <input type="number" name="rating" placeholder="Rating" min={1} max={5} value={review.rating} onChange={(e) => setReview({...review, rating: +e.target.value })} className="w-full border border-gray-300 rounded-md px-4 py-3 required" />
                <textArea placeholder="Your Comment" value={review.comment} onChange={(e) => setReview({ ...review, comment: e.target.value })} className="w-full border-gray-300 rounded-md px-4 py-3 mt-3 resize-none" rows={4} required ></textArea>
                <button type="submit" className="my-2 btn border-white font-semibold rounded-md hover:bg-gray-300 transition">
                    Submit Comment
                </button>
            </form>
            </div>
            <br />
            </div>
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-4 text-center py-3">Customer Reviews</h3>
         <div className="mt-10 grid sm:grid-cols-3 px-3 py-10">
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet for this item.</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((r) => (
                  <div
                    key={r._id}
                    className="p-4 border rounded shadow-sm bg-white"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{r.userName}</h4>
                      <span className="text-yellow-500">
                        {r.rating} ★
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {new Date(r.timestamp).toLocaleString()}
                    </p>
                    <p className="mt-2">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>
    )
}

export default Details