import React from 'react';
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
const Attending = () => {

  return (
    <>
    <HomepageNavbar />
    <div className='container mx-auto p-4 mt-5 bg-white text-blue-900'>
      <h2 className="text-4xl font-bold mb-4">GUIDELINES FOR ABSTRACT SUBMISSION</h2>
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
  </>
  );
};

export default Attending;