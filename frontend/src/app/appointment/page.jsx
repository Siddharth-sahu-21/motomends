'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'Yup';
import { useRouter } from 'next/navigation';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full Name is required')
    .min(2, 'Name must be at least 2 characters'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      'Phone number must be exactly 10 digits'
    )
    .required('Phone Number is required'),

  address: Yup.string()
    .required('Address is required')
    .min(10, 'Address must be at least 10 characters'),

  vehicle: Yup.string()
    .required('Vehicle type is required'),

  services: Yup.string()
    .required('Please select a service'),

  date: Yup.date()
    .required('Preferred date is required')
    .min(new Date(), 'Appointment cannot be in the past'),

  time: Yup.string()
    .required('Preferred time slot is required'),

});

const Appointment = () => {
  
  
  const router = useRouter();
  const appointmentForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      vehicle: '',
      services: '',
      date: '',
      time: '',


    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      axios.post('http://localhost:5000/appointment/add', values)
        .then((result) => {
          toast.success('Your Appointment Is Booked,Thank You');
           resetForm();
          setTimeout(() => {
            router.push('/'); // Redirect after a delay
          }, 3000); // 1-second delay
        })
        .catch((err) => {
          console.error('Error:', err);
          toast.error('email or phone no or address is already used ');
          setSubmitting(false);
        }); 




    },
    validationSchema: SignupSchema,


  })

  console.log(appointmentForm.errors);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-2xl my-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-yellow-600">
          Book Your Appointment
        </h1>
        <form onSubmit={appointmentForm.handleSubmit} action="" className="space-y-6">
          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-800">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                onChange={appointmentForm.handleChange}
                value={appointmentForm.values.name}
                className="w-full mt-1 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
               {
              (appointmentForm.errors.name && appointmentForm.touched.name) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.name}</p>
              )
            }
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-800">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                onChange={appointmentForm.handleChange}
                value={appointmentForm.values.email}
                className="w-full mt-1 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
               {
              (appointmentForm.errors.email && appointmentForm.touched.email) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.email}</p>
              )
            }
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold text-gray-800">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                onChange={appointmentForm.handleChange}
                value={appointmentForm.values.phone}
                className="w-full mt-1 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
               {
              (appointmentForm.errors.phone && appointmentForm.touched.phone) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.phone}</p>
              )
            }
            </div>
            <div>
              <label htmlFor="address" className="block font-semibold text-gray-800">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                onChange={appointmentForm.handleChange}
                value={appointmentForm.values.address}
                className="w-full mt-1 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your address"
                rows="3"
                required
              ></textarea>
               {
              (appointmentForm.errors.address && appointmentForm.touched.address) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.address}</p>
              )
            }
            </div>
          </div>

          {/* Vehicle Details */}
          <div>
            <label htmlFor="vehicle" className="block font-semibold text-gray-800">
              Select Vehicle Type <span className="text-red-500">*</span>
            </label>
            <select
              id="vehicle"
              onChange={appointmentForm.handleChange}
              value={appointmentForm.values.vehicle}
              className="w-full mt-2 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            >
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="electric">Electric Vehicle</option>
              <option value="commercial">Commercial Vehicle</option>
            </select>
            {
              (appointmentForm.errors.vehicle && appointmentForm.touched.vechile) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.vechile}</p>
              )
            }
          </div>

          {/* Service Details */}
          <div>
            <label htmlFor="services" className="block font-semibold text-gray-800">
              Select Service <span className="text-red-500">*</span>
              <br />
              <span className="text-sm text-gray-600">Prices may vary based on vehicle type and condition.</span>
            </label>
            <select
              id="services"
              onChange={appointmentForm.handleChange}
              value={appointmentForm.values.services}
              className="w-full mt-2 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            >
              <option value="">Select Service</option>
              <option value="oil-change">Oil Change - ₹999</option>
              <option value="brake-repair">Brake Repair - ₹999-₹3000</option>
              <option value="tire-replacement">Tire Replacement - ₹3000-₹10000</option>
              <option value="car-wash">Car Wash - ₹999</option>
              <option value="Bike-wash">Bike Wash - ₹200-₹600</option>
              <option value="Other vechile-wash">Other vechile - varies </option>
              <option value="engine-diagnostics">Engine Diagnostics of Car - ₹3000</option>
              <option value="engine-diagnostics">Engine Diagnostics of Bike - varies as per Model</option>
              <option value="detailing">Detailing & Interior Cleaning - varies as per Requirement</option>
              <option value="ceramic-coating">Ceramic Coating - ₹10000-₹30000</option>
              <option value="full Car-servicing">Full Car Servicing - ₹2500-₹30000</option>
              <option value="full Bike-servicing">Full Bike Servicing - ₹1500-₹10000</option>
              <option value="ac-service">AC Repair/Service - ₹1000-₹3000</option>
              <option value="battery-replacement">Battery Replacement - ₹999-₹9999</option>
              <option value="alignment">Wheel Alignment & Balancing - ₹500-₹2000</option>
              <option value="paint-job">Paint Job - varies as per requirenment</option>
              <option value="electrical-repairs">Gernal-Electrical Repairs - ₹500-₹3000</option>
              <option value="electrical-repairs">Other-Electrical Repairs - varies</option>
              <option value="suspension-repair">Minnor & Moderate Suspension Repair - ₹1500-₹8000</option>
              <option value="suspension-repair">Full-Replacement Of Suspension - ₹5000-₹15000 & Maybe more</option>
            </select>
            {
              (appointmentForm.errors.services && appointmentForm.touched.services) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.services}</p>
              )
            }
          </div>

          {/* Appointment Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block font-semibold text-gray-800">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                onChange={appointmentForm.handleChange}
                value={appointmentForm.values.date}
                className="w-full mt-1 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            {
              (appointmentForm.errors.date && appointmentForm.touched.date) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.date}</p>
              )
            }
            </div>

            <div>
              <label htmlFor="time" className="block font-semibold text-gray-800">
                Preferred Time Slot <span className="text-red-500">*</span>
              </label>
              <select
                id="time"
                onChange={appointmentForm.handleChange}
                value={appointmentForm.values.time}
                className="w-full mt-2 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              >
                <option value="">Select Time Slot</option>
                <option value="morning">9:00 AM - 11:00 AM</option>
                <option value="afternoon">12:00 PM - 2:00 PM</option>
                <option value="evening">3:00 PM - 5:00 PM</option>
                <option value="night">6:00 PM - 8:00 PM</option>
              </select>
              {
              (appointmentForm.errors.time && appointmentForm.touched.time) && (
                <p className='text-red-500 text-sm'>{appointmentForm.errors.time}</p>
              )
            }
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Appointment;