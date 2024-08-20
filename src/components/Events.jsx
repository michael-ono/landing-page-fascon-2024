import React, { useState } from 'react';
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const Events = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);   
  };

  return (
    <div className='bg-[#ecf1f7] h-screen'>
      <HomepageNavbar />
      <div className="container mx-auto p-4 mt-6">
        <h1 className="text-6xl text-blue-900 font-bold mb-4">Program  / Schedule </h1>
        <p className="text-xl mb-4">Below is the detailed FASCON 2024 program and schedule. All times are listed in local West Africa Time (WAT / UTC +1).</p>
        {/* <h3 className="text-xl font-bold mb-4">Points to note</h3> */}
        <ul className="list-disc pl-4 mb-4 text-lg text-blue-700">
          <li className="text-md mb-2 cursor-pointer">
            Moday, 28th October 2024
          </li>
          <li className="text-lg mb-2 cursor-pointer">
            Tuesday, 29th October 2024
          </li>
          <li className="text-lg mb-2 cursor-pointer">
            Wednesday, 30th October 2024
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-8">Full At-A-Glance Schedule</h2>
        <h3 className="text-xl font-bold mb-2">Below is the full at-a-glance version of the FASCON 2024 schedule. Session details are provided below.</h3>
        <table className="w-full text-sm text-gray-800 border-4 border-grey-600">
            <thead className="text-xs text-black uppercase bg-gray-50 border-b-4">
            <tr>
                <th scope="col" className="py-3 px-6 text-[1.4rem] font-bold">Date</th>
                <th scope="col" className="py-3 px-6 text-[1.4rem] font-bold">Time</th>
                <th scope="col" className="py-3 px-6 text-[1.5rem] font-bold">Schedule</th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-white border-b h-24">
                <td className="py-4 px-6 font-bold text-[1.1rem] text-start">Monday, 28th October 2024</td>
                <td className="py-4 px-6 font-bold text-[1.1rem] text-center">Arrival, Registration and Pre-confrence Workshop</td>
                <td className="py-4 px-6 font-bold text-[1.1rem] text-center">10:00am</td>
            </tr>
            <tr className="bg-white border-b h-24">
                <td className="py-4 px-6 font-bold text-[1.1rem] text-start">Tuesday, 29th October 2024</td>
                <td className="py-4 px-6 font-bold text-[1.1rem] text-center">Opening Ceremony, Keynote and Technical Sessions</td>
                <td className="py-4 px-6 font-bold text-[1.1rem] text-center">10:00am</td>
            </tr>
            <tr className="bg-white border-b h-24">
                <td className="py-4 px-6 font-bold text-[1.1rem] text-start">Wednesday, 30th October 2024</td>
                <td className="py-4 px-6 font-bold text-[1.1rem] text-center">Plenary Seasson 1 & 2, Technical Session and Closing Ceremony</td>
                <td className="py-4 px-6 font-bold text-[1.1rem] text-center">10:00am</td>
            </tr>
            </tbody>
        </table>

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
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"  onClick={handleCloseModal}>
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

export default Events;