import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ResearchHeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="news-event-hero-section max-w-7xl mx-auto md:mt-24 mt-16">
      <Slider {...settings}>

        <div className="relative">
          <img 
            src="https://picsum.photos/1200/600?random=1" 
            alt="News Event 1" 
            className="w-full md:h-[250px] h-[200px] rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent flex flex-col justify-center items-center text-white text-center p-8 rounded-lg">
            <h1 className="md:text-5xl text-2xl font-extrabold drop-shadow-lg">To Build a Future Bangladesh </h1>
            <p className="mt-4 text-sm md:text-xl font-medium drop-shadow-lg">Research is more important</p>
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://picsum.photos/1200/600?random=2" 
            alt="News Event 2" 
            className="w-full md:h-[250px] h-[200px] rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent flex flex-col justify-center items-center text-white text-center p-8 rounded-lg">
            <h1 className="md:text-5xl text-xl font-extrabold drop-shadow-lg">You have got an oportunaty for Reseach in</h1>
            <p className="mt-4 text-sm md:text-xl font-medium drop-shadow-lg">Bangladesh University</p>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
