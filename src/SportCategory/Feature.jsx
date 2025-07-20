import { useNavigate } from "react-router-dom";
import { CiCoffeeCup } from "react-icons/ci";
import { MdSoap, MdPersonalInjury, MdShoppingCart } from "react-icons/md";
import { FaOilCan, FaHandHoldingHeart } from "react-icons/fa";
import { LuCupSoda } from "react-icons/lu";
import { FaShoePrints, FaTshirt } from "react-icons/fa";
import { GiSoccerBall, GiFishingPole, GiTentacleStrike, GiWaterBottle, GiCycling } from "react-icons/gi";
import {FaDumbbell, FaWater, FaShoppingBag } from "react-icons/fa";
import { MdOutlineSportsHandball, MdOutlineBedroomParent } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";






const Feature = ({ data }) => {
  const navigate = useNavigate();

  const categories = [
  {
    icon: <GiSoccerBall />,
    label: "Sports Gear",
    key: "Sports Gear",
  },
  {
    icon: <FaTshirt />,
    label: "Apparel",
    key: "Apparel",
  },
  {
    icon: <GiCycling />,
    label: "Cycling",
    key: "Cycling",
  },
  {
    icon: <FaDumbbell />,
    label: "Fitness Equipment",
    key: "Fitness Equipment",
  },
  {
    icon: <GiTentacleStrike />,
    label: "Outdoor Gear",
    key: "Outdoor Gear",
  },
  {
    icon: <GiFishingPole />,
    label: "Fishing Equipment",
    key: "Fishing Equipment",
  },
  {
    icon: <FaWater />,
    label: "Water Sports",
    key: "Water Sports",
  },
  {
    icon: <MdOutlineBedroomParent />,
    label: "Sleep Man",
    key: "Sleep Man",
  },
  {
    icon: <FaShoePrints />,
    label: "Footwear",
    key: "Footwear",
  },
  {
    icon: <BiSolidDrink />,
    label: "chai",
    key: "chai",
  },
  {
    icon: <FaShoppingBag />,
    label: "Products",
    key: "Products",
  }
];


  return (
    <div className="py-6">
      <h2 className="font-bold text-white text-xl sm:text-4xl text-center pb-20">
        FEATURED CATEGORY
      </h2>
      <div className="w-5/6 mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
        {categories?.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${item.label}`)}
            className="cursor-pointer flex flex-col items-center p-4 hover:scale-110 transition-transform"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-none border rounded-full shadow-lg">
              <span className="text-4xl md:text-5xl text-white">{item.icon}</span>
            </div>
            <p className="mt-2 text-sm md:text-base font-medium text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
