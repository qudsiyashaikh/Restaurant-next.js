"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Always Flavorful, Always Hearty, Always Made with Love",
   
  },
  {
    id: 2,
    title: "Order from Anywhere, We Deliver Everywhere in India",
   
  },
  {
    id: 3,
    title: "The Best Meals to Share with Your Loved Ones",
    
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-yellow-200">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src="/dish.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;