import React from 'react';
import sponsorPlaceholder from "./images/blank-user.jpeg";
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';

const Organizers = () => {
  return (

    <div>
      <HomepageNavbar />
      <div className=' mt-6'>
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold text-4xl">Organizers</h2>
            <p className="max-w-md mx-auto mt-2 text-gray-700">
              Here are list of the Organizing parties involved
            </p>
          </div>

          <div className='mt-14'>
            {/* Orginizer 1 */}
            <div>
              <h1 className='text-2xl text-center font-semibold pl-6'>
                Local Orginizing Committee (LOC)
              </h1>
              <div className="flex flex-wrap pt-6 items-center justify-center gap-10 mt-2 md:justify-around px-4">
                {/* placeholder-1 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="40"
                    height="40"
                  />
                  <h1 className=''>Dr W. Sakpere (LOC Chair), Computer Science</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 2 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Mr S.O. Ilugbo (Secretary), Physics/Geology</h1>
                </div>
              </div>
            </div>
            {/* Orginizer 2 */}
            <div className='mt-12'>
              <h1 className='text-2xl text-center font-semibold pl-6'>
                Fund-raising Committee
              </h1>
              <div className="flex flex-wrap pt-6 items-center justify-center gap-10 mt-2 md:justify-around px-4">
                {/* placeholder-1 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr V.B. Oyekunle (Chair), Computer Science</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 2 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr C.A. Adeniji, Chemical Sciences</h1>
                </div>
                {/* placeholder-3 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 3 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr A.E. Enochoghene, Biological Sciences</h1>
                </div>
                {/* placeholder-4 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 4 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr R.F. Oloruntola, Physics/Geology</h1>
                </div>
                {/* placeholder-5 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 5 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Ms I.M. Fatoki, Computer Science</h1>
                </div>

              </div>
            </div>
            {/* Orginizer 3 */}
            <div className='mt-12'>
              <h1 className='text-2xl text-center font-semibold pl-6'>
              Scientific/Technical Programme Committee
              </h1>
              <div className="flex flex-wrap pt-6 items-center justify-center gap-10 mt-2 md:justify-around px-4">
                {/* placeholder-1 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Prof. B.A. Adebo (Chair), Physics/Geology</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 2 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Prof. O.M. Ighodaro, Chemical Sciences</h1>
                </div>
                {/* placeholder-3 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 3 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr O.O. Ogunlaja, Chemical Sciences</h1>
                </div>
                {/* placeholder-4 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 4 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>DDr F.C. Adesina, Biological Sciences</h1>
                </div>
                {/* placeholder-5 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 5 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr A.A. Waheed, Computer Science</h1>
                </div>
                {/* placeholder-6 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 6 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr H.K. Otobrise, Physics/Geology</h1>
                </div>
                {/* placeholder-7 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 7 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr O.K. Sindiku, Biological Sciences</h1>
                </div>
                {/* placeholder-8 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 8 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr A.M. Ayoade, Computer Science</h1>
                </div>
                {/* placeholder-9 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 9 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr O.K. Oderinde, Chemical Sciences</h1>
                </div>
                {/* placeholder-10 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 10 Logo"
                    width="40"
                    height="40"
                  />
                  <h1>Dr O.I. Abiola-Olagunju, Biological Sciences</h1>
                </div>
                {/* placeholder-11 */}
                <div className="text-black flex flex-col justify-center items-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 11 Logo"
                    width="40"
                    height="40"
                  />
                  <h1 className='font-semibold w-4/6'>Ex-officio Members: All Professors of FONAS (Professors Fatoki, Akinola, Idowu, Sunmonu)</h1>
                </div>

              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

// unsed code: max-w-3xl mx-auto px-5 mt-6

export default Organizers