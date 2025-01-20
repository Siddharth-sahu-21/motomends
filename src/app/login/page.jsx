'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';  // Importing useRouter for navigation

const Login = () => {
  const router = useRouter();  // Initialize router

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios.post('http://localhost:5000/user/authenticate', values)
        .then((result) => {
          console.log(result);
          toast.success('Login Successful');
          resetForm();  // Reset form after success
          localStorage.setItem('token', result.data.token);  // Save token in localStorage

          // Redirect to appointment page
          router.push('/appointment');
        })
        .catch((err) => {
          console.error(err);
          toast.error('Login Failed');  // Show error message if login fails
        });
    }
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="max-w-md w-full bg-black border border-gray-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white py-5">Login</h1>
        <form action="" className="px-8 py-6" onSubmit={loginForm.handleSubmit}>
          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              type="email"
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {(loginForm.touched.email && loginForm.errors.email) && (
              <p className="text-xs text-red-600 mt-2" id="email">
                {loginForm.errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              type="password"
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {(loginForm.touched.password && loginForm.errors.password) && (
              <p className="text-xs text-red-600 mt-2" id="password">
                {loginForm.errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              required
              className="mr-2"
            />
            <label htmlFor="terms" className="text-white">
              I agree to the{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>

          <hr className="text-gray-500 mt-4" />
          <center className="text-white">Or</center>

          <Link href="/signup" className="block text-center w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
