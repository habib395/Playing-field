import { useLoaderData } from "react-router-dom";
import Slider from "../../Slider/Slider";
import ProductCard from "../Products/ProductCard";
import AboutUs from "../../AboutUs/AboutUs";
import SportCategory from "../../SportCategory/SportCategory";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import football from "../../football.json";
import Lottie from "lottie-react";
import { Bounce, Slide } from "react-awesome-reveal";
import Feature from "../../SportCategory/Feature";

const Home = () => {
  const products = useLoaderData();


  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Slider></Slider>
      <div className="py-8">
        {/* <SportCategory></SportCategory> */}
        <div className="sm:flex flex-cols items-center justify-center w-11/12 mx-auto p-3 sm:p-16 gap-4">
          <Slide>
            <p className="sm:text-2xl sm:font-semibold">
              <i>
                "Explore our Sports Categories featuring top-notch gear like
                Soccer Cleats, Tennis Rackets, Fitness Equipment, Winter Sports
                essentials, and more. Gear up for excellence in every sport you
                love!"
              </i>
            </p>
          </Slide>
          <div style={{ width: "80%" }}>
            <Lottie animationData={football} />
          </div>
        </div>
      </div>
      <div>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co/9z1RpSf/monochrome-portrait-professional-tennis-player-1.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
  <Feature></Feature>
  </div>
</div>
      
      </div>
      <div className="py-16">
        <h2 className="text-black font-bold text-xl sm:text-4xl text-center py-3">
          OUR PRODUCT
        </h2>
         <Slide>
          <p className="text-black text-center sm:text-xl">
            Your Ultimate Destination for Premium Sports Gear and Accessories
          </p>
        </Slide>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 sm:p-10">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
        </div>
      </div>
      {/* about us section  */}
      <div className="py-10">
        <h2 className="font-bold text-xl sm:text-4xl text-center py-3">
          ABOUT US
        </h2>
      </div>
      <AboutUs></AboutUs>
      {/* satisfaction section */}
      <div className="py-10">
        <h2 className="font-bold text-xl sm:text-4xl text-center py-3">
          OUR CUSTOMER SATISFACTION
        </h2>
        {/* card customer */}
        <div className="p-3 w-11/12 mx-auto">
          <Bounce>
            <div className="sm:flex card-side border-2  rounded-md">
              <figure>
                <img
                  src="https://i.ibb.co.com/VjbJPP6/satis-one.png"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Professional Football</h2>
                <p>
                  "As a professional player, I've tried countless footballs, but
                  this one truly stands out. The grip, bounce, and durability
                  are unmatched. It's perfect for every game, whether on grass
                  or turf. Highly recommended for anyone serious about
                  football!"
                </p>
                <p className="text-base font-bold">
                  Michael J., Pro Footballer
                </p>
              </div>
            </div>
          </Bounce>

          {/* card-two */}
          <div className="sm:flex card-side border-2 border-green-500 rounded-md mt-5">
            <figure>
              <img
                src="https://i.ibb.co.com/sb08yw7/satis-two.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Basketball Elite</h2>
              <p>
                This basketball changed the game for me. The premium leather
                finish and perfect weight make it a joy to play with. It's like
                it was crafted for perfection. Thank you for offering such a
                top-notch product!"
              </p>
              <p className="text-base font-bold">
                Liam H., Basketball Enthusiast
              </p>
            </div>
          </div>
          {/* card three */}
          <Bounce>
            <div className="sm:flex card-side border-2 border-green-500 rounded-md mt-5">
              <figure>
                <img
                  src="https://i.ibb.co.com/Cw9VhyJ/satis-three.png"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Soccer Cleats</h2>
                <p>
                  "These cleats are a game-changer! They're so light, I feel
                  like I'm flying across the field. Plus, the customization
                  option allowed me to make them truly mine. Best investment for
                  any soccer lover!"
                </p>
                <p className="text-base font-bold">Emma P., Soccer Coach</p>
              </div>
            </div>
          </Bounce>
          {/* card four  */}
          <div className="sm:flex card-side border-2 border-green-500 rounded-md mt-5">
            <figure>
              <img
                src="https://i.ibb.co.com/426y0nz/satis-four.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Team Jersey</h2>
              <p>
                "Our team looks and feels incredible in these jerseys! The
                breathable material and professional finish make every game a
                stylish and comfortable experience. The custom prints were
                flawless, and delivery was on time!"
              </p>
              <p className="text-base font-bold">Ryan T., Team Captain</p>
            </div>
          </div>
          {/* card five  */}
          <Bounce>
            <div className="sm:flex card-side border-2 border-green-500 rounded-md mt-5">
              <figure>
                <img
                  src="https://i.ibb.co.com/9NZ12Gx/satis-five.png"
                  alt="Movie"
                />
      https://i.ibb.co.com/180bwxS/tra- </figure>
              <div className="card-body">
                <h2 className="card-title">Tennis Racket Pro</h2>
                <p>
                  "This racket has elevated my game to the next level. The
                  balance, power, and control are perfect for both practice and
                  tournaments. It's clear a lot of thought went into its design.
                  A must-have for any serious tennis player!"
                </p>
                <p className="text-base font-bold">
                  Sophia L., Tennis Champion
                </p>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};
export default Home;
