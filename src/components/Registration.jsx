import React from 'react';
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';

const Registration = () => {
  return (
    <div>
      <HomepageNavbar />
      <div className="container mx-auto p-4 pt-6 mt-12">
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
      </div> 
    </div> 
  )
};

export default Registration;