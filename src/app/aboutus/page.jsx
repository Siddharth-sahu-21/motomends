import Link from 'next/link';
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 via-gray-600 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-black mb-6">
          About MotoMend
        </h1>
        
        {/* Introduction */}
        <p className="text-black text-lg border border-gray-400 p-6 rounded leading-relaxed mb-8 text-center">
          At MotoMend, we are dedicated to keeping your vehicle in perfect condition. With years of expertise and a commitment to excellence, we ensure top-quality car servicing tailored to your needs.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* History Section */}
          <div className=" shadow-md rounded-md border border-gray-400 p-6 rounded">
            <h2 className="text-2xl font-semibold text-black mb-4">Our History</h2>
            <p className="text-black leading-relaxed">
              Established in 2018, MotoMend began with a vision to provide hassle-free car maintenance. Today, we’re proud to serve thousands of happy customers with trusted and efficient services.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className=" shadow-md rounded-md border border-gray-400 p-6 rounded">
            <h2 className="text-2xl font-semibold text-black mb-4">Why Choose MotoMend?</h2>
            <ul className="list-disc list-inside text-black">
              <li>Certified and experienced technicians.</li>
              <li>Transparent pricing with no hidden costs.</li>
              <li>Fast and reliable service.</li>
              <li>State-of-the-art diagnostic tools.</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 border border-gray-400 shadow-md rounded-md p-6">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Team</h2>
          <p className="text-black leading-relaxed">
            Meet our team of passionate and experienced professionals who ensure every vehicle gets the care it deserves.
          </p>
        </div>

        {/* Location */}
        <div className="mt-12 shadow-md rounded-md border border-gray-400 p-6 rounded">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Location</h2>
          <p className="text-black">
            Visit us at: <span className="font-medium">123 Service Lane, AutoTown, YourCity.</span>
          </p>
        </div>
      </div>
  </div>
  
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
  )
}

export default AboutUs;
