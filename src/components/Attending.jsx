import React from 'react';
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import atttendingImg from "../assets/attending-bg.jpeg";
import Footer from '../Navbar_Files/Footer';
import logo from "../components/images/logo3.png"
// import Footer2 from '../Navbar_Files/Footer2';
const Attending = () => {

  return (
    <>
    {/* SPEAKERS */}
    <div className='w-full bg-[#ecf1f7]'>
      
      <div>
        <div className='flex pr-44'>
          <div className="container pl-20 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl text-pink-600 font-extrabold mb-2">Keynote Speaker</h2>
              <div className="flex flex-col text-lg gap-1">
                <p className="text font-medium">Prof. Benjamin S. Aribisala</p>
                <p>Department of Computer Science</p>
                <p>Faculty of Science</p>
                <p>Lagos State University</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl text-pink-600 font-extrabold mb-2">Chief Host</h2>
              <div className="flex flex-col text-lg gap-1">
                <p className="text-lg font-medium">Prof. Kabiru A. Adeyemo</p>
                <p>Vice-Chancellor</p>
                <p>Lead City University</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl text-pink-600 font-extrabold mb-2">Host</h2>
              <div className="flex flex-col text-lg gap-1">
                <p className="text-lg font-medium">Prof. Olusola Ladokun</p>
                <p>Dean, Faculty of Natural and Applied Sciences</p>
                <p>Lead City University</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl text-pink-600 font-extrabold mb-2">LOC Chair</h2>
              <div className="flex flex-col text-lg gap-1">
                <p className="text-lg font-medium">Dr. Wilson Sakpere</p>
                <p>HOD (Computer Science)</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-3xl font-bold text-red-400 pb-5'>Abstract admission is now open!</h1>
            <p className='text-2xl'>Submit an abstract by 30" August 2024 to fascon@lcu.edu.ng with an email Subject containing the author's name.</p>
          </div>
        </div>
        
        <div className='container w-full grid grid-cols-3 pl-16 pt-4 items-center'>
          <div className='container p-4 pl-0 mt-5 col-span-2'>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">GUIDELINES FOR ABSTRACT SUBMISSION</h2>
            <ul className="list-disc text-xl pl-4 mb-4">
              <li className="mb-2">
                The abstract should not be more than 300 words of original research or review article reflecting the sub-themes.
              </li>
              <li className="mb-2">
                Please indicate whether the abstract should be considered for Poster or Oral Presentation and the relevant sub-theme.
              </li>
              <li className="mb-2">
                All abstracts must be written and submitted in clear English Language.
              </li>
              <li className="mb-2">
                The title should be in bold capital letters followed by the full name(s) (surname first) and address(es) of the author(s) including email address(es) and phone number(s) of the corresponding author.
              </li>
              <li className="mb-2">
                A sum of 2,000 or $20 should accompany the abstract submission as a handling charge.
              </li>
            </ul>
          </div>
          <div className='ml-44'> 
            <img src={logo} className="w-[340px] h-[300px]" alt="Image description"/>
          </div>

     

        </div>
      </div>




    </div>
  </>
  );
};

export default Attending;