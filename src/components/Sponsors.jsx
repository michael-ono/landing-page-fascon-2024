import React from 'react';
import sponsorPlaceholder from "./images/sponsor-placeholder.jpg";

const Sponsors = () => {
  return (

    <div className="max-w-3xl mx-auto px-5 mt-6">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h2 className="font-semibold text-5xl">Our Sponsors</h2>
          <p className="max-w-md mx-auto mt-2 text-lg text-gray-500">
            We are thankful to each and every company sponsored our plugin
            which helped us to continue working on it.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-8 md:justify-around">
          <div className="text-gray-400 ">
            <img
              src={sponsorPlaceholder} 
              alt="Sponsor 1 Logo"
              width="140"
              height="140"
            />
          </div>
          <div className="text-gray-400 ">
            <img
              src={sponsorPlaceholder} 
              alt="Sponsor 2 Logo"
              width="140"
              height="140"
            />
          </div>
          <div className="text-gray-400 ">
            <img
              src={sponsorPlaceholder} 
              alt="Sponsor 3 Logo"
              width="140"
              height="140"
            />
          </div>
          <div className="text-gray-400 ">
            <img
              src={sponsorPlaceholder} 
              alt="Sponsor 4 Logo"
              width="140"
              height="140"
            />
          </div>
          <div className="text-gray-400 ">
            <img
              src={sponsorPlaceholder} 
              alt="Sponsor 5 Logo"
              width="140"
              height="140"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;