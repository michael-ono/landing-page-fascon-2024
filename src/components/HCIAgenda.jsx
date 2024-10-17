import React from 'react';
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const HCIAgenda = () => {
  return (
    <main className='bg-[#133764] h-screen'>
      <HomepageNavbar />
      <div className="md:flex justify-between bg-[#e6eef7] overflow-hidden text-black">
        {/* Left */}
        <div className="px-3 pb-4 md:w-4/5 md:mb-0 md:pt-10 bg-[#]">
          <h1 className='text-5xl pl-6 pt-3 font-semibold text-center text-blue-900 custom-font'>Human Computer Interaction (HCI) Workshop</h1>
          <section className='px-8 font-semibold'>
            <p className='pt-5 px-3 text-[1.3rem]'>
              The inaugural Human Computer Interaction Workshop is designed as a space for everyone that wants to know about the field <br /> 
              of Human Computer Interaction. Researchers, academics, students (Undergraduate & Postgraduate), early career researchers, <br /> industry professionals, and anyone interested in how technology and user experience shape research and innovation across various disciplines to:
            </p>
            <ul className='text-[1.35rem] pt-2 pb-5 list-disc pl-12 custom-font'>
              <li className='text-light-blue-800'>Learn about HCI methods and tools</li>
              <li className='text-light-blue-800'>Discover HCI trends and the future of the field</li>
              <li className='text-light-blue-800'>Discuss HCI's applications across various disciplines</li>
              <li className='text-light-blue-800'>Network with other researchers</li>
            </ul>
            <p className='text-[1.3rem] bg-blue-gray-200 rounded-xl p-3 text-center w-3/4 mx-auto'> 
              Featuring short talks and interactive sessions, this workshop will provide you  <br />  with valuable insights and ideas to enhance your research practice.
            </p>
          </section>

          <div className='w-full border-b-4 border-white pt-9'></div>
  
          <section className='px-7 mt-8 font-semibold'>
            <h2 className='pb-2 text-3xl text-blue-900'>Location and Format</h2>
            <p className='text-[1.4rem] pb-4'>The workshop will be a hybrid event which includes:</p>
            <ul className='text-[1.3rem] space-y-5'>
              <li><span className='font-extrabold text-[1.4rem] text-white bg-blue-900 p-2 px-4 rounded-full'>Virtual</span> Online attendees will receive a Zoom link before the event.</li>
              <li><span className='font-extrabold text-[1.4rem] text-white bg-blue-900 p-2 px-3 rounded-full'>In person</span> In-Person: Conference Centre, Lead City University.</li>
            </ul>
          </section>

          <div className='w-full border-b-4 border-white pt-9'></div>
  
          <section className='mt-8 pb-5 px-7'>
            <h2 className='text-3xl text-blue-900 font-bold'>Schedule</h2>

            <table class="w-full text-sm mt-4 text-gray-900 border-4 border-grey-600">
              <thead class="text-xs text-black uppercase bg-blue-100 border-b-4">
                <tr>
                  <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Time</th>
                  <th scope="col" class="py-3 px-6 text-[1.4rem] font-bold">Scedule</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-blue-50 border-b ">
                  <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-center">10:00am - 10:20am</td>
                  <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Welcome and Introductions</td>
                </tr>
    
                <tr class="bg-bg-blue-50 border-b ">
                  <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-center">10:20am – 10:50am</td>
                  <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Keynote Address</td>
                </tr>
                <tr class="bg-bg-blue-50 border-b ">
                  <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-center">10:50am – 11:35am</td>
                  <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Interactive Session 1: HCI in Action</td>
                </tr>
                <tr class="bg-bg-blue-50 border-b ">
                  <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-center">11:35am – 11:45am</td>
                  <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Break</td>
                </tr>
                <tr class="bg-bg-blue-50 border-b ">
                  <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-center">11:45am – 12:25pm</td>
                  <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Panel Discussion</td>
                </tr>
                <tr class="bg-bg-blue-50 border-b ">
                  <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-center">12:25pm – 12:55pm</td>
                  <td class="py-4 px-6 font-bold text-[1.1rem] text-center">	Interactive Session 2: HCI Research and Innovation</td>
                </tr>
                <tr class="bg-bg-blue-50 border-b ">
                  <td class="-[30%] py-4 pl-16 px-6 font-bold text-[1.1rem] text-center">12:55pm – 1:25pm</td>
                  <td class="py-4 px-6 font-bold text-[1.1rem] text-center">Q&A and Closing Remarks</td>
                </tr>
              </tbody>
            </table>
          </section>
  
        </div>

        {/* Right */}
        <div className="md:w-2/5 gradient-image3 bg-600 h-[100]">
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default HCIAgenda;