'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "/car1.webp", // Replace with your image URLs
    "/mustang.jpg",
    "/mack.jpg",
    "/red.jpg",
    "/carbutton.jpg",
    "/gaer.jpg",
    "/garage.jpg",
    "/garage1.jpg",
    "/engin.jpg",
    "/repair.jpg",
    "/washcar.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-600">
      <div className="">
        <br/>
      <div className="relative h-[80vh] overflow-hidden mx-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-[90vh] object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Optional: Slider Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
 </div>

 <div className=" text-white py-12">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-yellow-400">MotoMend</span></h1>
    <p className="text-lg mb-6">
      <em>Your One-Stop Destination for Premium Vehicle Care!</em>
    </p>
    <p className="text-gray-300 mb-8">
      At MotoMend, we understand that your vehicle is more than just a mode of transportation—it's a trusted partner in your daily adventures. 
      Our team of skilled professionals is dedicated to delivering top-tier maintenance, repairs, and upgrades to keep your ride smooth, safe, and stylish.
    </p>
    <p className="text-xl font-semibold italic text-yellow-400">
       A wise man said, "If you are hungry, then eat. If your vehicle needs care, MotoMend is here."
    </p>
    <a href="/services" className="mt-8 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 transition">
      Explore Our Services
    </a>
  </div>
</div>



{/* Services and Pricing */}
<div>
  <div className="my-8 mx-4">
    <h2 className="text-4xl font-bold text-center mb-10">Our Services & Pricing</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Service 1 */}
      <div className="p-6 bg-yellow-300 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-tr hover:from-gold hover:via-yellow-500 hover:to-orange-400 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Basic Car Wash</h3>
        <p className="text-gray-700 mb-4">A quick yet thorough wash to keep your car clean and shining.</p>
        <p className="text-xl font-bold text-blue-600">Price: ₹500</p>
      </div>

      {/* Service 2 */}
      <div className="p-6 bg-blue-400 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Interior Cleaning</h3>
        <p className="text-gray-700 mb-4">Deep cleaning and vacuuming of your car's interior for a fresh look and feel.</p>
        <p className="text-xl font-bold text-blue-600">Price: ₹1,200</p>
      </div>

      {/* Service 3 */}
      <div className="p-6 bg-green-300 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-l hover:from-green-600 hover:via-teal-500 hover:to-lime-400 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Full Servicing</h3>
        <p className="text-gray-700 mb-4">Comprehensive check-up and maintenance to ensure optimal performance.</p>
        <p className="text-xl font-bold text-blue-600">Price: ₹5,000</p>
      </div>

      {/* Service 4 */}
      <div className="p-6 bg-orange-300 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-bl hover:from-red-600 hover:via-orange-400 hover:to-yellow-500 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Detailing and Polishing</h3>
        <p className="text-gray-700 mb-4">Restore your car’s shine with expert detailing and polishing services.</p>
        <p className="text-xl font-bold text-blue-600">Price: ₹2,500</p>
      </div>

      {/* Service 5 */}
      <div className="p-6 bg-purple-300 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-b hover:from-indigo-700 hover:via-purple-500 hover:to-cyan-500 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Ceramic Coating</h3>
        <p className="text-gray-700 mb-4">Protect your car’s paint with a high-gloss, long-lasting ceramic coating.</p>
        <p className="text-xl font-bold text-blue-600">Price: ₹10,000</p>
      </div>

      {/* Service 6 */}
      <div className="p-6 bg-gray-300 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-tl hover:from-gray-900 hover:via-blue-gray-600 hover:to-gray-400 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Accessory Installation</h3>
        <p className="text-gray-700 mb-4">Upgrade your car with premium accessories installed by experts.</p>
        <p className="text-xl font-bold text-blue-600">Pricing: Varies</p>
      </div>

      {/* Service 7 */}
      <div className="p-6 bg-red-500 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-bl hover:from-pink-600 hover:via-orange-500 hover:to-yellow-500 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Graphene Coating</h3>
        <p className="text-gray-700 mb-4">Advanced graphene protection for long-lasting durability and shine.</p>
        <p className="text-xl font-bold text-blue-600">Price: ₹15,000</p>
      </div>

      {/* Service 8 */}
      <div className="p-6 bg-gray-500 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-tr hover:from-gray-700 hover:via-gray-500 hover:to-gray-300 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-3">Engine Diagnostics</h3>
        <p className="text-gray-700 mb-4">Detailed analysis and troubleshooting for any engine issues.</p>
        <p className="text-xl font-bold text-blue-600">Price: ₹3,000</p>
      </div>
    </div>
  </div>
</div>

{/* What's New Section */}
<div className="py-12">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
    What's New
  </h1>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Item 1 */}
    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg bg-gradient-to-t from-blue-500 via-indigo-400 to-purple-500">
      <img
        src="https://media.istockphoto.com/id/1346376001/photo/worker-with-microfiber-applicator-spreading-ceramic-coating-on-car.jpg?s=612x612&w=0&k=20&c=1VgT6do8NcDIpY0QCpoT6iIuNUmEWBPA4cHiJ7JSTlw="
        alt="New Service"
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          New Ceramic Coating
        </h2>
        <p className="text-gray-600">
          We now offer advanced ceramic and graphene coating to protect your car from scratches and keep it shining!
        </p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden shadow-lg bg-gradient-to-t from-red-500 via-orange-400 to-yellow-400 ">
      <img
        src="https://imgd.aeplcdn.com/1280x720/cw/ec/31476/Audi-A4-Exterior-109595.jpg?wm=0"
        alt="Special Offer"
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Special Discounts
        </h2>
        <p className="text-gray-600">
          Get 20% off on full servicing packages this holiday season! Limited time only.
        </p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden shadow-lg bg-gradient-to-t from-green-500 via-teal-400 to-blue-400 ">
      <img
        src="https://www.shutterstock.com/image-vector/car-service-repair-center-garage-260nw-677913400.jpg"
        alt="New Branch"
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          New Branch Opening
        </h2>
        <p className="text-gray-600">
          We're expanding! Visit our new branch opening in Downtown on January 15th for exclusive offers.
        </p>
      </div>
    </div>
  </div>
</div>


{/* review */}
 <div>
  {/* Reviews Section */}
<div className=" py-12">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Customer Reviews
  </h1>

  {/* Reviews List */}
  <div className="max-w-4xl mx-auto mb-12">
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-lg font-semibold text-gray-700">John Doe</h2>
      <p className="text-gray-600">Great service! My car feels brand new.</p>
      <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-lg font-semibold text-gray-700">Jane Smith</h2>
      <p className="text-gray-600">Affordable pricing and quick service!</p>
      <div className="text-yellow-500">⭐⭐⭐⭐</div>
    </div>
  </div>

  
</div>

 </div>


      
{/* footer */}
      <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-lg font-bold">MoToMEND</h2>
          <p>Your trusted partner in car servicing and repair.</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/aboutus" className="hover:text-yellow-200">About Us</Link>
          <Link href="/services" className="hover:text-yellow-200">Services</Link>
          <Link href="/privacy" className="hover:text-yellow-200">Privacy Policy</Link>
        </div>
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MotoMend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
    </div>
  );
};

export default ImageSlider;
