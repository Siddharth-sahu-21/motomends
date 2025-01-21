'use client';
import Link from 'next/link';
import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-gray-900 via-gray-600 text-black min-h-screen py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-black mb-6">Contact Us</h1>
                    <p className="text-center text-black mb-8">
                        Reach out to us through any of the following channels. We’re here to help!
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Phone */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
                            <span className="text-4xl text-blue-500">&#9742;</span>
                            <div>
                                <h2 className="text-lg font-bold">Phone</h2>
                                <p>+1 234 567 890</p>
                                <p>+91 987 654 3210</p>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
                            <span className="text-4xl text-blue-500">&#9993;</span>
                            <div>
                                <h2 className="text-lg font-bold">Email</h2>
                                <p>support@motomend.com</p>
                                <p>info@motomend.com</p>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
                            <span className="text-4xl text-blue-500">&#127968;</span>
                            <div>
                                <h2 className="text-lg font-bold">Address</h2>
                                <p>Aishbagh near Ramlela Ground</p>
                                <p>lucknow uttar predesh</p>
                            </div>
                        </div>
                        {/* Social Media */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
                            <span className="text-4xl text-blue-500">&#127758;</span>
                            <div>
                                <h2 className="text-lg font-bold">Social Media</h2>
                                <p>Facebook: MotoMend</p>
                                <p>Instagram: @motomend_service</p>
                            </div>
                        </div>
                        {/* Working Hours */}
                        <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
                            <span className="text-4xl text-blue-500">&#128337;</span>
                            <div>
                                <h2 className="text-lg font-bold">Working Hours</h2>
                                <p>Mon - sun: 9:00 AM - 6:00 PM</p>
                                <p></p>
                            </div>
                        </div>
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

    );
};

export default ContactUs;
