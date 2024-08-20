import React from 'react'
import HomepageNavbar from '../HomePage_Files/HomepageNavbar'

const Accomodation = () => {
  return (
    <div>
        <HomepageNavbar />
        <h1 className='text-5xl pl-4 pt-4 font-bold text-blue-900 '>Accomodation</h1>
        <h1 className='text-2xl pl-4 pt-4 font-bold'>Below are the accomodation options:</h1>
        <div className='px-16'>
        <table class="w-full text-sm mt-10 text-gray-800 border-4 border-grey-600">
          <thead class="text-xs text-black uppercase bg-gray-50 border-b-4">
            <tr>
              <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Hostel Name</th>
              <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Address</th>
              <th scope="col" class="py-3 px-6 text-[1.5rem] font-bold">Type</th>
              <th scope="col" class="py-3 px-6 text-[1.5rem] font-bold">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Lead City University Guest House</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Lead City University Int'l Conf. and Hostels, Ibadan </td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center space-y-1">
                <p>Single Deluxe</p>
                <p>Double Suite</p> 
                <p>Double Suite</p> 
              </td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center space-y-1">
                <p>N10,000</p>
                <p>N20,000</p>
                <p>N30,000</p>
              </td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Kakanfo Inn & Confrence Center</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">1, Nihinlola Street, Joyce'B Road, Off Ring Road <br /> Oluyole, Ibadan, Nigeria </td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Regular Double Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N28,000</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Travel House Budge Hotel</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Plot 22a, Block X, MKO Abiola Way <br /> Oluyole, Ibadan, Nigeria </td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Standard Double Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N18,000</td>
            </tr>

            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Accomodation