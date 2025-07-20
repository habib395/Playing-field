import { useNavigate } from "react-router-dom";
import { CiCoffeeCup } from "react-icons/ci";
import { MdSoap, MdPersonalInjury, MdShoppingCart } from "react-icons/md";
import { FaOilCan, FaHandHoldingHeart } from "react-icons/fa";
import { LuCupSoda } from "react-icons/lu";
import { FaShoePrints, FaTshirt } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";


const Feature = ({ data }) => {
  const navigate = useNavigate();

  const categories = [
  {
    icon: <GiSoccerBall />,
    label: "Sports Gear",
    key: "Sports Gear",
  },
  {
    icon: <FaShoePrints />,
    label: "Footwear",
    key: "Footwear",
  },
  {
    icon: <FaTshirt />,
    label: "Apparel",
    key: "Apparel",
  }
];


  return (
    <div>
      <h2 className="text-blue-500 font-bold text-xl sm:text-4xl text-center py-3">
        FEATURED CATEGORY
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
        {categories?.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${item.label}`)}
            className="cursor-pointer flex flex-col items-center p-4 hover:scale-110 transition-transform"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-200 rounded-full shadow-lg">
              <span className="text-4xl md:text-5xl text-primary">{item.icon}</span>
            </div>
            <p className="mt-2 text-sm md:text-base font-medium text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
