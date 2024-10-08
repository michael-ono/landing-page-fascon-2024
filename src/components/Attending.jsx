import React from 'react';
import { useNavigate } from "react-router-dom";
import LogoFascon from "./images/logo6.png";
import { FaArrowRight } from 'react-icons/fa';

const Attending = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='w-full bg-[#ecf1f7]'>
      
      <div>
        <div className='flex py-10 gap-8 justify-center items-center bg-yellow-50'>
          <h1 className='text-deep-orange-500 text-4xl font-extrabold'>Theme:</h1>
          <h4 className='text-2xl font-bold w-1/2'>Emerging Technologies in Scientific Research <br /> and Innovation for Sustainable National Development</h4>
        </div>
        {/* SPEAKERS */}
        <div className='flex pr-44'>
          <div className="container pl-20 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl text-pink-600 font-extrabold mb-2">Keynote Speaker</h2>
              <div className="flex flex-col text-lg gap-1">
                <p className="text font-medium">Prof. Benjamin S. Aribisala</p>
                <p>Department of Computer Science</p>
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
                <p>HOD, Computer Science</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-y-4'>
            <img src={LogoFascon} className="w-[150px] h-[130px] pb-4" alt="fascon logo" />
            <h1 className='text-3xl font-bold text-red-400 pb-5'>Abstract admission is now open!!!</h1>
            <p className='text-2xl'>Submit an abstract by 30th August 2024 to fascon@lcu.edu.ng with an email Subject containing the author's name.</p>
          </div>
        </div>

        {/* CONFRENCE SUBMISSIONS */}
        <div className='attending-bg py-10 my-4 mt-6'>
          <h1 className='bg-blue-600 p-2 rounded-xl w-3/6 mx-auto text-center text-white text-2xl font-semibold'>The conference will accept paper submissions in the following areas and related sub-themes (but not limited to):</h1>
          <div className='pt-12 pl-16 grid grid-cols-2 gap-3 gap-y-10'>
            {/* Track1 */}
            <div className="">
              <h1 className="text-2xl text-blue-900 font-extrabold mb-2">Track 1: AI for Sustainable Applications and Development</h1>
              <p className="text text-grey-600 font-medium max-w-xl">
                Facial Recognition; Object Detection; Autonomous Vehicles; Smart Transportation, Connected Cars and Automotive; Emergency Vehicle Notification Systems; Automatic Road Enforcement; loT for Intelligent Smart
                Cities; Smart Home, Building Management and Operation Automation; Smart Grid and Energy Optimisation and Management; Renewable Energy Systems.
              </p>
            </div>

            {/* Track4 */}
            <div className="">
              <h1 className="text-2xl text-blue-800 font-extrabold mb-2">Track 4: Emerging Technologies for Inclusive and Sustainable Education</h1>
              <p className="text text-grey-800 font-medium max-w-2xl">
                Adaptive Learning Systems; Intelligent Tutoring; Personalised Learning Pathways; Al-enhanced Virtual Learning Environments and Remote Education; Al for Efficient Curriculum Design 
                and Development; Al-driven Predictive Analytics; Al for Automated and Fair Evaluation; Collaborative Learning and Al; Al for Educational Game Design.
              </p>
            </div>


            {/* Track2 */}
            <div className="">
              <h1 className="text-2xl text-blue-800 font-extrabold mb-2 w-5/6">Track 2: Emerging Technologies for Healthcare, Genomics, Computational Chemistry and Environmental Conservation</h1>
              <p className="text text-grey-800 font-medium max-w-2xl">
                Telemedicine and Remote Patient Monitoring; Predictive Analytics for Disease Prevention; Al-driven Drug Design; Personalised Medicine; loT for Healthcare, e-Health, and Assisted Living; Biomedical Image Analysis. Protein
                Structures and Functions Prediction; Agricultural Biotechnology; Precision Agriculture and Sustainable Farming Practices; Crop Monitoring and Management; Catalysis and Reaction Optimisation; Spectroscopy and Chemical Imaging; Toxicity and Environmental Impact; Climate Change; Sustainable Resource Management.
              </p>
            </div>

            {/* Track5*/}
            <div className="">
              <h1 className="text-2xl text-blue-800 font-extrabold mb-2">Track 5: Ethics in Al Research</h1>
              <p className="text text-grey-800 font-medium max-w-2xl">
              Bias and Fairness; Transparency and Accountability; Privacy and Security Concerns; Responsible Al; Ethical Al; Al for Social Good; Security and Civil Liberties; Equity and Inclusivity;
              Legal and Policy Frameworks for Ethical Al Development; Al and Deepfakes; Environmental Ethics and Al.
              </p>
            </div>

            {/* Track3 */}
            <div className="">
              <h1 className="text-2xl text-blue-800 font-extrabold mb-2">Track 3: Al for Intelligent Technologies and Computation</h1>
              <p className="text text-grey-800 font-medium max-w-2xl">
                Blockchain and Distributed Ledger Technology; Robotics; Al-powered Optimisation Algorithms; Predictive Maintenance in Industrial Automation; Computational Efficiency in High-Performance
                Computing; Real-Time Decision-Making in Autonomous Systems; Cyber-Physical Systems; Simulation and Modelling; Cognitive Computing;Cloud and Edge Computing; Distributed Computing
                Systems; Quantum Computing Technologies; Astrophysics; Computational Fluid Dynamics Metrology; Geosciences; Optics and Photonics.
              </p>
            </div>

            <div className='mx-auto justify-center'>
              <button className="flex items-center font-bold text-xl px-4 py-4 rounded-3xl text-white bg-blue-500 hover:bg-blue-700 focus:ring-200 md:w-80 md:h-24 md:px-12 md:pr-6" onClick={() => navigate("/schedule")}>
                <p className='pr-4'>CHECK PROGRAM <br /> SCHEDULE</p> 
                <FaArrowRight size={24}/>
              </button>
            </div>

          </div>
        </div>

        {/* GUIDELINES */}
        <div className="container w-full grid grid-cols-3 items-center pl-16 pt-4 text-blue-900">
          <div className="w-full p-4 pl-0 mt-5 col-span-2">
            <h2 className="text-4xl text-pink-600 font-bold mb-4">GUIDELINES FOR ABSTRACT SUBMISSION</h2>
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
              <li className="mb-2 pr-68 lg:pr-72">
                The title should be in bold capital letters followed by the full name(s) (surname first) and address(es) of the author(s) including email address(es) and phone number(s) of the corresponding author.
              </li>
              <li className="mb-2">
                A sum of 2,000 or $20 should accompany the abstract submission as a handling charge.
              </li>
            </ul>
          </div>

          <div className="px-4 py-4 ml-12 w-full h-full bg-blue-100 place-content-center rounded-xl text-center text-white space-y-4 col-span-1 ">
            <h1 className="text-3xl font-extrabold text-gray-600 place-content-start align-top">For Further Enquires:</h1>
            <div className='w-full border-b-4 border-gray-50'></div>
            <div className="flex flex-col pb-5 pt-16">
              <h1 className="text-2xl font-extrabold text-pink-500">LOC Secretary: MR S.O. ILUGBO</h1>
              <p className="text-xl text-black font-semibold">+234 810 324 3668</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-pink-500">Logistics: DR O.O. JOHN-DEWOLE</h1>
              <p className="text-xl text-black font-semibold">+234 803 496 8640</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
  );
};

export default Attending;