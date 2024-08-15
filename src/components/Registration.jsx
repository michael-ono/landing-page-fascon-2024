import React, { useState } from 'react';
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';

const Registration = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);   
  };

  return (
    <div className='bg-[#ecf1f7]'>
      <HomepageNavbar />
      <div className="container mx-auto p-4 mt-6">
        <h1 className="text-5xl font-bold mb-4">Registration</h1>
        <p className="text-xl mb-4">Registration for FASCON 2024 is now open!!</p>
        <h3 className="text-xl font-bold mb-4">Points to note</h3>
        <ul className="list-disc pl-4 mb-4">
          <li className="text-md mb-2">
            Accommodation options while attending the conference can be found <a href="#" className="text-blue-500 hover:text-blue-700">here</a>.
          </li>
          <li className="text-md mb-2">
            Late registration will attract a penalty of ₦40,000 per participant.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-8">Registration Rates</h2>
        {/* <h3 className="text-xl font-bold mb-2">In-Person Full Conference Options:</h3> */}
        <table class="w-full text-smtext-left text-gray-800 border-4 border-grey-600">
                <thead class="text-xs text-black uppercase bg-gray-50 border-b-4">
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

          <button className='text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center' onClick={handleOpenModal}>Make Payment</button>
          {showModal && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
    <div className="bg-white rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <div className='text-black'>
        <p className='text-black text-xl'><strong className='text-black text-lg'>Account Name:</strong> FASCON Lead City University</p>
        <p className='text-black text-xl'><strong className='text-black text-lg'>Account Number:</strong> 1014715731</p>
        <p className='text-black text-xl'><strong className='text-black text-lg'>Bank Name:</strong> Zenith Bank</p>
      </div>
      <div className="flex justify-end mt-4 gap-12">
        {/* <button onClick={handleCloseModal}>Close</button> */}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"  onClick={handleCloseModal}>
          I have made Payment
        </button>
      </div>
    </div>
  </div>
          )}

      </div> 
    </div> 
  )
};

export default Registration;