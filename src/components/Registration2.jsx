import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const RegistrationForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data here
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Handle form submission (e.g., send data to API)
    try {
      // Replace with your API call
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Registration successful!");
        navigate('/login'); // Redirect to login page
      } else {
        const data = await response.json();
        toast.error(data.message || "Registration failed.");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <div className='bg-[#ecf1f7]'>
      <Toaster />
      <HomepageNavbar />
      <div className="registration-bg h-[84vh] pt-4 ">
        <div className='w-[70%]  mx-auto items-center justify-center'>
          <div className='text-center leading-tight'>
            <h1 className="text-[4.6rem] font-bold mb-4 text-white tracking-wider">Registration</h1>
            <p className="text-xl text-flashWhite font-semibold mb-4">Registration for FASCON 2024 is now open!!</p>
          </div>
          <form onSubmit={handleSubmit} className='w-full mx-auto pt-12 justify-center items-center max-w-md'>
            <div className="mb-4 flex flex-col">
              <label htmlFor="firstName" className="block text-gray-400 font-bold mb-2">First Name</label>
              <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-400 font-bold mb-2">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-400 font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-400 font-bold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className='flex justify-center pt-4'><button type="submit" className="bg-blue-500 text-white text-xl flex font-bold py-3 px-10 rounded-lg hover:bg-blue-700 ">Sign Up</button></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;