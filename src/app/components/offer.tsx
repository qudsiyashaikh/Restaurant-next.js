import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">🔥 Special Chicken Biryani – Flat 50% OFF! 🍗🍚</h1>
        <p className="text-white ">
          Craving something spicy, flavorful, and absolutely satisfying? 😋
Don’t miss this limited-time deal on our Special Chicken Biryani – now at 50% OFF! Bursting with rich spices, juicy chicken, and authentic aromas, this biryani is cooked to perfection and ready to make your day.

   
        🎯 Offer valid for the next few hours only! <br />

📦 Order now and enjoy the royal taste of tradition – at half the price. <br />

👉 Click Order Now before the timer runs out!
      
        <br />
         <CountDown/>
        
        
        </p>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offer.jpg!w700wp" alt="" fill className="object-contain" />
     
      </div>
     
    </div>
  );
};

export default Offer;