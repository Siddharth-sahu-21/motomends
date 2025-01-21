import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer;