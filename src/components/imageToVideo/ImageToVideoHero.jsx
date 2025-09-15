import React from "react";
import image1 from "../../assets/kevin videos/image to video/1.png";
import image2 from "../../assets/kevin videos/image to video/2.png";
import image3 from "../../assets/kevin videos/image to video/3.png";
import image4 from "../../assets/kevin videos/image to video/4.png";
import image5 from "../../assets/kevin videos/image to video/5.png";
import image6 from "../../assets/kevin videos/image to video/6.png";
import image7 from "../../assets/kevin videos/image to video/7.png";
import image8 from "../../assets/kevin videos/image to video/8.png";
import image9 from "../../assets/kevin videos/image to video/9.png";
import image10 from "../../assets/kevin videos/image to video/10.png";
import image11 from "../../assets/kevin videos/image to video/11.png";
import image12 from "../../assets/kevin videos/image to video/12.png";
import image13 from "../../assets/kevin videos/image to video/13.png";
import image14 from "../../assets/kevin videos/image to video/14.png";
import image15 from "../../assets/kevin videos/image to video/15.png";
import image16 from "../../assets/kevin videos/image to video/16.png";
import image17 from "../../assets/kevin videos/image to video/17.png";
import image18 from "../../assets/kevin videos/image to video/18.png";
import image19 from "../../assets/kevin videos/image to video/19.png";
import image20 from "../../assets/kevin videos/image to video/20.png";
import { FaImage } from "react-icons/fa6";
import heroBg from "../../assets/herosectionImages/videoclipherobg.png";


const ImageToVideoHero = () => {
  return (
    <div  
    
      style={{
             backgroundImage: `url(${heroBg})`,
             backgroundPosition: "top", 
             backgroundRepeat: "no-repeat", 
           }}
    
    className="py-12 bg-blue-50">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="my-10 text-center">
          {/* Heading */}
          <h1 className="mb-3 text-5xl font-bold">
            <span className="text-blue-600">Image</span>
            <span className="text-black">-to-Video</span>
          </h1>

          <p className="mb-8 text-lg text-gray-500">Bring Photos to Life</p>

          {/* Button */}
          <button className="px-8 py-3 font-medium text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
            Create Now
          </button>

          {/* Search Bar */}
          <div className="flex items-center mt-10 w-[90%] max-w-xl mx-auto bg-white rounded-full shadow-md px-4 py-2 border border-gray-200">
            <FaImage className="mr-2 text-lg text-gray-400" />
            <input
              type="text"
              placeholder="A low"
              className="flex-1 text-gray-700 placeholder-gray-400 outline-none"
            />
            <button className="px-5 py-2 text-white transition bg-blue-600 rounded-md shadow hover:bg-blue-700">
              Generate
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {/* Image 1 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image1}
              alt="Image 1"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Image 2 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image2}
              alt="Image 2"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Image 3 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image3}
              alt="Image 3"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Image 4 */}
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image4}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image5}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image6}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image7}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image8}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image9}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image10}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image11}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image12}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image13}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image14}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image15}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image16}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image17}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image18}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image19}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={image20}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>

          {/* More images go here */}
        </div>
      </div>
    </div>
  );
};

export default ImageToVideoHero;
