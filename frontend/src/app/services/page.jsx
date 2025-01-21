'use client'
import Link from 'next/link';
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Oil Change',
      description: 'Ensure your engine runs smoothly with our premium oil change service.',
      image: 'https://media.istockphoto.com/id/1147458393/photo/refueling-and-pouring-oil-quality-into-the-engine-motor-car-transmission-and-maintenance-gear.jpg?s=612x612&w=0&k=20&c=odFZ0xNeh8GfzKypBMB0A1AB4P0B2-YcmEJ7Pzchr1M=',
      price: '₹999',
    },
    {
      title: 'Tire Replacement',
      description: 'High-quality tires for every terrain and weather condition.',
      image: 'https://s7d1.scene7.com/is/image/bridgestone/web-fcac-tire-installation-seventy-thirty-3-images-thirty-seventy-fcac-web-bsro?scl=1',
      price: '₹4,500 (per tire)',
    },
    {
      title: 'Brake Repair',
      description: 'Expert brake repair services to keep you safe on the road.',
      image: 'https://media.istockphoto.com/id/618968772/photo/car-service-procedure.jpg?s=612x612&w=0&k=20&c=Lla25kePOF7z04rdLFMwbWV7-wIShNi66KaEEz3v3E4=',
      price: '₹2,500',
    },
    {
      title: 'Car Wash',
      description: 'Professional exterior and interior car wash services for a sparkling clean ride.',
      image: 'https://5.imimg.com/data5/HC/DQ/MY-9005253/car-wash-chemicals-500x500.jpg',
      price: '₹500',
    },
    {
      title: 'Detailing & Interior Cleaning',
      description: 'Comprehensive car detailing and interior cleaning to restore the shine.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26nv7vx-Gevq91gOUb4sShwArKAK2AuCFnQ&s',
      price: '₹1,200',
    },
    {
      title: 'Add Accessories',
      description: 'Upgrade your car with premium accessories tailored to your needs.',
      image: 'https://www.shutterstock.com/image-photo/car-tuning-flat-lay-concept-260nw-2013872330.jpg',
      price: 'Varies (as per requirement)',
    },
    {
      title: 'Full Servicing',
      description: 'Complete car servicing to ensure optimal performance and longevity.',
      image: 'https://img.freepik.com/free-photo/mechanic-hand-checking-fixing-broken-car-car-service-garage_146671-19717.jpg',
      price: '₹5,000',
    },
    {
      title: 'Ceramic & Graphene Coating',
      description: 'Protect your car with advanced ceramic and graphene coating technology.',
      image: 'https://www.carzspa.com/wp-content/uploads/2022/12/Choose-the-best-protection-for-your-car.webp',
      price: '₹10,000 - ₹15,000',
    },
    {
      title: 'Engine Diagnostics',
      description: 'Advanced diagnostic tools to detect and fix engine issues.',
      image: 'https://images.stockcake.com/public/0/1/7/01748370-3924-467a-afb4-7e63b90ce81c_large/diagnosing-car-engine-stockcake.jpg',
      price: '₹3,000',
    },
  ];

  return (
    <div>
    <div className="bg-gradient-to-r from-gray-900 via-gray-600 py-12">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Our Services
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                {service.price}
              </p>
            </div>
            <div className="px-6 pb-4">
              {/* <a
                href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                className="block text-center bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Learn More
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
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

export default Services;
