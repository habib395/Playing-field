import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css'
import { GoGoal } from "react-icons/go";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";

const AboutUs = () => {
    useEffect(() =>{
        AOS.init({ duration: 3000})
    }, [])
    return (
        <div className="sm:flex flex-cols items-center justify-center">
            <div className="text-white bg-green-500 shadow-2xl p-3 md:p-10 m-5 rounded-lg lg:w-full h-96" data-aos="fade-right">
                <p className="text-7xl">
                <GoGoal />
                </p>
            <h2 className="text-xl lg:text-4xl font-bold text-center py-2">OUR MISSION</h2>
            <p className="lg-py-20 text-center">
            To inspire and empower every individual to achieve their athletic dreams with high-quality, affordable, and sustainable sports equipment.
            </p>
            </div>
            <div className="text-white bg-green-500 shadow-2xl p-3 md:p-10 m-5 rounded-lg md:w-full h-96" data-aos="fade-left">
            <p className="text-7xl">
            <MdLocalOffer />
                </p>
            <h2 className="text-xl lg:text-4xl font-bold text-center py-2">WHAT WE OFFER</h2>
            <p>
            Explore a wide range of premium sports gear, apparel, and accessories tailored for various sports disciplines. Whether it's football, tennis, basketball, or fitness, we've got you covered.
            </p>
            </div>
            <div className="text-white bg-green-500 shadow-2xl p-3 md:p-10 m-5 rounded-lg md:w-full h-96" data-aos="fade-left">
            <p className="text-7xl">
            <RiChatVoiceAiFill />
                </p>
            <h2 className="text-xl lg:text-4xl font-bold text-center py-2">OUR PROMISE</h2>
            <p>
            We are committed to your satisfaction and success. When you choose us, you're not just buying sports equipment—you're joining a community passionate about sports and performance.
            </p>
            </div>
        </div>
    );
};

export default AboutUs;