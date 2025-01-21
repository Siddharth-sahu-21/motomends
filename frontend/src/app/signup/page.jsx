'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'Yup';
import { useRouter } from 'next/navigation';


const SignupSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('password is required')
    .matches(/[a-z]/, 'lowercase letter is required')
    .matches(/[A-Z]/, 'uppercase letter is required')
    .matches(/[1-9]/, 'numeric values is required')
    .matches(/\W/, 'special letter is required')
    .min(8, 'minimum 8 charcter are required'),
    confirmpassword : Yup.string().required('please confirm password')
    .oneOf([Yup.ref('password'), null], 'Password must match')

});



const Signup = () => {
  const router = useRouter();
  const signupForm = useFormik({
    initialValues:{
      email : '',
      password : '',
      confirmpassword : '',
    },
    onSubmit: (values, {resetForm, setSubmitting}) => {
      console.log(values);
      // //send values to backend
      // setTimeout(() => {
      //   resetForm()

      // }, 2000)
      axios.post('http://localhost:5000/user/add', values)
      .then((result) => {
        toast.success('User registration successful');
        resetForm();
        setTimeout(() => {
          router.push('/login'); // Redirect after a delay
        }, 2000); // 2-second delay
      })
      .catch((err) => {
        console.error('Error:', err);
        toast.error('User registration failed');
        setSubmitting(false);
      });
    


      
    },
    validationSchema: SignupSchema,


  })
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="max-w-md w-full bg-black border border-gray-700 rounded-lg shadow-lg">
        <form onSubmit={signupForm.handleSubmit} action="" className="px-8 py-6">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Sign Up</h2>
             {/* <Link href="/signin" className='text-center text-blue-400 mb-4'>Already have an account Login</Link> */}
            

          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={signupForm.handleChange}
                      value={signupForm.values.email}
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
               {
                    (signupForm.touched.email && signupForm.errors.email) && (
                      <p className="text-xs text-red-600 mt-2" id="email">
                        {signupForm.errors.email}
                      </p>

                    )
                  }
          </div>

          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={signupForm.handleChange}
                      value={signupForm.values.password}
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
               {
                    (signupForm.touched.password && signupForm.errors.password) && (
                      <p className="text-xs text-red-600 mt-2" id="password">
                        {signupForm.errors.password}
                      </p>

                    )
                  }
          </div>

          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              onChange={signupForm.handleChange}
                      value={signupForm.values.confirmpassword}
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
               {
                    (signupForm.touched.confirmpassword && signupForm.errors.confirmpassword) && (
                      <p className="text-xs text-red-600 mt-2" id="confirmpassword">
                        {signupForm.errors.confirmpassword}
                      </p>

                    )
                  }
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
              <Link href="/termcondition" className="text-blue-400 hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

