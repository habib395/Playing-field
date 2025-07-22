import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoGoal } from "react-icons/go";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const cards = [
    {
      icon: <GoGoal className="text-5xl lg:text-7xl mb-4" />,
      title: "OUR MISSION",
      content:
        "To inspire and empower every individual to achieve their athletic dreams with high-quality, affordable, and sustainable sports equipment.",
      animation: "fade-up",
    },
    {
      icon: <MdLocalOffer className="text-5xl lg:text-7xl  mb-4" />,
      title: "WHAT WE OFFER",
      content:
        "Explore a wide range of premium sports gear, apparel, and accessories tailored for various sports disciplines. Whether it's football, tennis, basketball, or fitness, we've got you covered.",
      animation: "fade-down",
    },
    {
      icon: <RiChatVoiceAiFill className="text-5xl lg:text-7xl  mb-4" />,
      title: "OUR PROMISE",
      content:
        "We are committed to your satisfaction and success. When you choose us, you're not just buying sports equipment—you're joining a community passionate about sports and performance.",
      animation: "fade-up",
    },
  ];

  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/9z1RpSf/monochrome-portrait-professional-tennis-player-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0" />
      <div className="hero-content z-10 text-white text-center px-4 py-12 max-w-screen-xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-md p-6 lg:p-10 rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
              data-aos={card.animation}
            >
              {card.icon}
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{card.title}</h2>
              <p className="text-sm lg:text-base text-gray-200">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
