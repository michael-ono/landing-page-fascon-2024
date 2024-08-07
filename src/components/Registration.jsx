import React from 'react'
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import "../App.css";

const Registration = () => {
  return (
    <>
    <HomepageNavbar />
    <div className='registration-bg text-blue-900 pt-5 pl-4'>
      <h2 className='font-bold text-4xl'>Registration Fee</h2>
        <ul className="pt-4 space-y-3 text-2xl">
          <li>
            Students: ₦<b>20,000</b>
          </li>
          <li>
            Local Participants: ₦<b>30,000</b>
          </li>
          <li>
            International Participants: <b>$100</b> (USD)
          </li>
          <li className="late-fee">
            Late Registration: ₦<b>40,000</b>
          </li>
          <li className="late-fee">
            Late International: <b>$150</b> (USD)
          </li>
        </ul>
      </div>
    </>
  )
}

export default Registration;