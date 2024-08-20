import React from 'react'
import HomepageNavbar from '../HomePage_Files/HomepageNavbar'
import Footer from '../Navbar_Files/Footer'

const Accomodation = () => {
  return (
    <div>
      <HomepageNavbar />
      <h1 className='text-5xl pl-6 pt-4 font-bold text-blue-900 '>Accomodation</h1>
      <h1 className='text-2xl pl-6 pt-4 font-bold'>Below are the accomodation options:</h1>
      <div className='px-16 pb-16'>
        <table class="w-full text-sm mt-10 text-gray-800 border-4 border-grey-600">
          <thead class="text-xs text-black uppercase bg-gray-300 border-b-4">
            <tr>
              <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Hostel Name</th>
              <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Address</th>
              <th scope="col" class="py-3 px-6 text-[1.5rem] font-bold">Type</th>
              <th scope="col" class="py-3 px-6 text-[1.5rem] font-bold">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Lead City University Guest House</td>
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
              <td class="w-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Kakanfo Inn & Confrence Center</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">1, Nihinlola Street, Joyce'B Road, Off Ring Road <br /> Oluyole, Ibadan, Nigeria </td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Regular Double Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N28,000</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Travel House Budge Hotel</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Plot 22a, Block X, MKO Abiola Way <br /> Oluyole, Ibadan, Nigeria </td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Standard Double Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N18,000</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Commondores Guest House & Garden</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Lane 16, Elebu Road, Oluyole, Ibadan, Nigeria </td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Single Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N16,600</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Adent Hotel and Event Center</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">4, Nasarawa Street, Ire-akari Estate, Soka, Ibadan, Felele, Nigeria</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Classic Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N18,200</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Scrolab Executive Hotel</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">12, Oluyole Street, Beside First Bank Oke Odo Off imalealafia Str.</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Royal Deluxe Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N16,600</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Heritage Hotel & Suite</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">7 Adebiyi Street, Oluyole, Ibadan, Nigeria</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Standard Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N18,000</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Majerita Hotel and Suites</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Km 3, Off Adeoyo State Hospital Road, <br /> Oluyole, Ibadan, Nigeria</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Economy Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N18,500</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Premier Hotel</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Mokolu Hill P.O Box 1206, Mokolu, Ibadan</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Deluxe Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N135,500</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Akma Signatures Hotel and Suites</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No. 16/18 Odrinde Close Felele Rab, Idadan</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Classic Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N15,600</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Channel 08 Hotel</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">No. 8 Boluwaji, Ibadan, Nigeria</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Classic Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N10,000</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">The Town House</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">1, NTC Compound Iyeganku Estate, <br /> Iyeganku, Ibadan, Nigeria</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Royal Deluxe Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N21,375</td>
            </tr>
            <tr class="bg-white border-b ">
              <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-start">Wysdum Hotels $ Suites</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">KM 129, Lagos-Ibadan Expressway,  Boluwaji <br /> Bus stop, Ibadan, Nigeria</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Double Room</td>
              <td class="py-4 px-6 font-bold text-[1.1rem] text-center">N15,175</td>
            </tr>
            </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default Accomodation