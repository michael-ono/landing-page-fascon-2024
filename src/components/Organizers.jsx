import React from 'react';
import sponsorPlaceholder from "./images/blank-user.jpeg";
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const Organizers = () => {
  return (

    <div className='bg-[#ecf1f7]'>
      <HomepageNavbar />

      <div className=' mt-6'>
        <div className="flex flex-col">
          <div className="text-center">
            <h2 className="font-bold text-5xl">Organizers</h2>
            <p className="max-w-md mx-auto mt-2 text-xl text-gray-900">
              Here are list of the Organizing parties involved
            </p>
          </div>

          <div className='mt-14'>
            {/* Orginizer 1 */}
            <div className='pl-6'> 
              <h1 className='text-3xl font-semibold pl-6'>
                Local Organizing Committee (LOC)
              </h1>
              <div className="flex flex-wrap px-4 gap-x-4">
                {/* placeholder-1 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr W. Sakpere (LOC Chair), Computer Science</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr W. Sakpere (LOC Chair), Computer Science</h1>
                </div>
                {/* placeholder-3*/}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr A.E. Enochoghene, Biological Sciences</h1>
                </div>
                {/* placeholder-4 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr R.F. Oloruntola, Physics/Geology</h1>
                </div>
                {/* placeholder-5 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Ms I.M. Fatoki, Computer Science</h1>
                </div>

              </div>
            </div>
            {/* ORGINIZER 2 */}
            <div className='pl-6'> 
              <h1 className='text-3xl font-semibold pl-6'>
                  Fund-raising Committee
              </h1>
              <div className="flex flex-wrap px-4 gap-x-4">
                {/* placeholder-1 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr V.B. Oyekunle (Chair), Computer Science</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr C.A. Adeniji, Chemical Sciences</h1>
                </div>

              </div>
            </div>
            {/* ORGINIZER 3 */}
            <div className='pl-6'> 
              <h1 className='text-3xl font-semibold pl-6'>
                Scientific / Technical Programme Committee
              </h1>
              <div className="flex flex-wrap px-4 gap-x-4">
                {/* placeholder-1 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Prof. B.A. Adebo (Chair), Physics/Geology</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Prof. O.M. Ighodaro, Chemical Sciences</h1>
                </div>
                {/* placeholder-3 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1>Dr O.O. Ogunlaja, Chemical Sciences</h1>
                </div>
                {/* placeholder-4 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''><h1>Dr F.C. Adesina, Biological Sciences</h1></h1>
                </div>
                {/* placeholder-5 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1>Dr A.A. Waheed, Computer Science</h1>
                </div>
                {/* placeholder-6 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1>Dr H.K. Otobrise, Physics/Geology</h1>
                </div>
                {/* placeholder-7 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1>Dr O.K. Sindiku, Biological Sciences</h1>
                </div>
                {/* placeholder-8 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1>Dr A.M. Ayoade, Computer Science</h1>
                </div>
                {/* placeholder-9 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1>Dr O.K. Oderinde, Chemical Sciences</h1>
                </div>
                {/* placeholder-10 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1>Dr O.I. Abiola-Olagunju, Biological Sciences</h1>
                </div>
                {/* placeholder-11 */}
                <div className="text-black flex flex-col h-60 w-48 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                   <h1 className='w-full'>Ex-officio Members: All Professors of FONAS (Professors Fatoki, Akinola, Idowu, Sunmonu)</h1>
                </div>

              </div>
            </div>
            {/* ORGINIZER 4 */}
            <div className='pl-6'> 
              <h1 className='text-3xl font-semibold pl-6'>
                Multimedia and Tech Committee
              </h1>
              <div className="flex flex-wrap px-4 gap-x-4">
                {/* placeholder-1 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr F.M. Adedeji (Chair), Computer Science</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr M.A. Sofowora, Computer Science</h1>
                </div>
                {/* placeholder-3*/}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Dr O.O. Daramola, Physics/Geology</h1>
                </div>
                {/* placeholder-4 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Mr A.J. Abiodun, Physics/Geology</h1>
                </div>
                {/* placeholder-5 */}
                <div className="text-black flex flex-col h-60 w-40 gap-y-5 justify-center items-center text-center">
                  <img
                    src={sponsorPlaceholder}
                    alt="Organizers 1 Logo"
                    width="70"
                    height="70"
                  />
                  <h1 className=''>Mr E.A. Adediran, Computer Science</h1>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

// unsed code: max-w-3xl mx-auto px-5 mt-6

export default Organizers