import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

import image1 from "../../assets/kevin videos/ai video clip/first page/3.png";
import image2 from "../../assets/kevin videos/ai video clip/first page/4.png";
import image3 from "../../assets/kevin videos/ai video clip/first page/5.png";
import image4 from "../../assets/kevin videos/ai video clip/first page/6.png";
import image5 from "../../assets/kevin videos/ai video clip/first page/7.png";
import image6 from "../../assets/kevin videos/ai video clip/first page/8.png";
import image7 from "../../assets/kevin videos/ai video clip/first page/2.png";
import image8 from "../../assets/kevin videos/ai video clip/first page/1.png";

const RealisticVoices = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // duplicate images for seamless infinite scroll
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const doubledImages = [...images, ...images];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="text-blue-600">Realistic Voices</span> That
                Captivate, <br /> Convert, and Communicate
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Auto Scrolling Image Gallery */}
      <section className="py-5 overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${images.length * 160}px);
            }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-16 ${isHovered ? "" : "animate-scroll"}`}
            style={{ width: `${doubledImages.length * 240}px` }}
          >
            {doubledImages.map((src, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-all duration-500`}
                style={{
                  marginTop: index % 2 === 0 ? "-100px" : "100px", // even up, odd down
                }}
              >
                <img
                  src={src}
                  alt={`clip-${index}`}
                  className="object-cover h-64 shadow-lg w-44 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealisticVoices;
