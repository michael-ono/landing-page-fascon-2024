import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const Registration = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSuccessModal = () => {
    setShowModal(false);
    toast.success("Thanks for the purchase. Enjoy");
  };

  const handleOpenModal = () => {
    setShowModal(true);   
  };

  return (
    <div className='bg-[#ecf1f7]'>
      <Toaster />
      <HomepageNavbar />
      <div className="container mx-auto p-4 mt-4">
        <h1 className="text-6xl font-bold mb-4 text-blue-900">Registration</h1>
        <p className="text-xl mb-4">Registration for FASCON 2024 is now open!!</p>
        <h3 className="text-xl font-bold mb-4">Points to note</h3>
        <ul className="list-disc pl-4 mb-4">
          <li className="text-lg mb-2">
            Accommodation options while attending the conference can be found <a className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={() => navigate('/register/accomodation')}>here</a>.
          </li>
          <li className="text-lg mb-2">
            Late registration will attract a penalty of ₦40,000 per participant.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-8">Registration Rates</h2>
        {/* <h3 className="text-xl font-bold mb-2">In-Person Full Conference Options:</h3> */}
        <table class="w-full text-sm text-gray-800 border-4 border-grey-600">
                <thead class="text-xs text-black uppercase bg-gray-300 border-b-4">
                <tr>
                    <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Type</th>
                    <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Amount</th>
                    <th scope="col" class="py-3 px-6 text-[1.5rem] font-bold">Refundable</th>
                </tr>
                </thead>
                <tbody>
                <tr class="bg-white border-b ">
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Students</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">₦20,000</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No</td>
                </tr>
                <tr class="bg-white border-b  ">
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Local Participants</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">₦30,000</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No</td>
                </tr>
                <tr class="bg-white border-b  ">
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">International Participants</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">$100</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No</td>
                </tr>
                <tr class="bg-white border-b  ">
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Late Restration</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">₦40,000</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No</td>
                </tr>
                <tr class="bg-white ">
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Late Interational</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">$150</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No</td>
                </tr>
                <tr class="bg-white ">
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Exhibition</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">₦20,000 or $150</td>
                    <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No</td>
                </tr>
                </tbody>
        </table>

        <button className='text-white mt-4 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md w-full sm:w-auto py-3 px-3 text-center' onClick={handleOpenModal}>Make payment</button>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
            <div className="bg-white rounded-lg p-12">
              <h2 className="text-2xl font-normal mb-4 border-b-4 border-grey-700">Kindly make payment to the account provided below</h2>
              <div className='flex my-8'>
                <div className='flex flex-col text-left pr-10'>
                  <strong className='text-black text-xl tracking-wider'>Account Name:</strong> 
                  <strong className='text-black text-xl tracking-wider'>Account Number:</strong>
                  <strong className='text-black text-xl tracking-wider'>Bank Name:</strong> 
                </div>
                <div className='text-blue-900 text-lg'>
                  <p>FASCON Lead City University</p>
                  <p>1014715731</p>
                  <p>Zenith Bank</p>
                </div>
              </div>
              <div className="flex justify-end mt-4 gap-8">
                <button  className='bg-gray-300 hover:bg-gray-400 px-6 rounded' onClick={handleCloseModal}>Go back</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"  onClick={handleSuccessModal}>
                  I have made Payment
                </button>
              </div>
            </div>
          </div>
        )}
    </div> 
      <Footer />
    </div> 
  )
};

export default Registration;