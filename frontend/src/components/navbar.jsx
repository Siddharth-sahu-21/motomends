import Link from 'next/link';
import React from 'react';



const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <img src="/logo.JPG" alt=""
                className='py-4' />
            </div>

            {/* Menu */}
            <div className="flex space-x-8">
             

              
              <Link href="/" className="hover:text-yellow-200">Home</Link>
              <Link href="/services" className="hover:text-yellow-200">Services</Link>
              <Link href="/login" className="hover:text-yellow-200">Appointment</Link>
              <Link href="/aboutus" className="hover:text-yellow-200">About Us</Link>
              {/* <div className='border border-gray-400 rounded-xl text-white shadow-lg  '> */}
              {/* <Link href="/login" className='px-5 hover:text-yellow-200'>Login</Link> */}
                {/* </div> */}
                <Link href="/contactUs" className="hover:text-yellow-200">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;