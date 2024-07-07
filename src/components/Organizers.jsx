import React from 'react';
import sponsorPlaceholder from "./images/sponsor-placeholder.jpg";

const Organizers = () => {
  return (

    <div>
      <div className=' mt-6'>
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold text-4xl">Organizers</h2>
            <p className="max-w-md mx-auto mt-2 text-gray-700">
              Here are list of the Organizing parties involved
            </p>
          </div>

          <div className='mt-10'>
            {/* Orginizer 1 */}
            <div>
              <h1 className='text-2xl font-semibold pl-6'>
                Local Orginizing Committee (LOC)
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
                {/* placeholder-1 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-3 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-4 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-5 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
              </div>
            </div>
            {/* Orginizer 2 */}
            <div className='mt-10'>
              <h1 className='text-2xl font-semibold pl-6'>
                Local Orginizing Committee (LOC)
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
                {/* placeholder-1 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-2 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-3 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-4 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
                </div>
                {/* placeholder-5 */}
                <div className="text-black ">
                  <img
                    src={sponsorPlaceholder}
                    alt="Sponsor 1 Logo"
                    width="120"
                    height="60"
                  />
                  <h1>Orginizer name</h1>
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