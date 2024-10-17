import React from 'react';
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const HCIAgenda = () => {
  return (
    <main className='bg-[#ecf1f7] h-screen'>
      <HomepageNavbar />
      <div className='space-y-4 hci-agenda-bg'>
        <h1 className='text-5xl pl-6 pt-6 font-semibold text-center text-white custom-font'>Human Computer Interaction (HCI) Workshop</h1>
        <section className='px-8 font-semibold text-white'>
          <p className='pt-5 text-2xl'>
            The inaugural Human Computer Interaction Workshop is designed as a space for everyone that wants to know about the field <br /> 
            of Human Computer Interaction. Researchers, academics, students (Undergraduate & Postgraduate), early career researchers, <br /> industry professionals, and anyone interested in how technology and user experience shape research and innovation across various disciplines to:
          </p>
          <ul className='text-[1.40rem] pt-2 pb-5 list-disc pl-12 custom-font'>
            <li className='text-light-blue-800'>Learn about HCI methods and tools</li>
            <li className='text-light-blue-800'>Discover HCI trends and the future of the field</li>
            <li className='text-light-blue-800'>Discuss HCI's applications across various disciplines</li>
            <li className='text-light-blue-800'>Network with other researchers</li>
          </ul>
          <p className='text-2xl'> 
            Featuring short talks and interactive sessions, this workshop will provide you  <br />  with valuable insights and ideas to enhance your research practice.
          </p>
        </section>

        <section className='px-7 font-semibold'>
          <h2 className='pb-2 text-3xl text-blue-900'>Location and Format</h2>
          <p className='text-2xl'>The workshop will be a hybrid event:</p>
          <ul className='text-2xl'>
            <li><span className='font-bold'>Virtual:</span> Online attendees will receive a Zoom link before the event.</li>
            <li><span className='font-bold'>In person</span> In-Person: Conference Centre, Lead City University.</li>
          </ul>
        </section>

        <section className='pt-5 pb-5 px-7'>
          <h2 className='text-3xl text-blue-900 font-bold'>Schedule</h2>

          <table className='table-auto text-2xl'>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='pr-12'>10:00am – 10:20am</td>
                  <td>Welcome and Introductions</td>
                </tr>
                <tr className='pr-12'>  
                  <td>10:20am – 10:50am</td>
                  <td>Keynote Address</td>
                </tr>
                <tr className='pr-12'>  
                  <td>10:50am – 11:35am</td>
                  <td>Interactive Session 1: HCI in Action</td>
                </tr>
                <tr className='pr-12'>  
                  <td>11:35am – 11:45am</td>
                  <td>Break</td>
                </tr>
                <tr className='pr-12'>  
                  <td>11:45am – 12:25pm</td>
                  <td>Panel Discussion</td>
                </tr>
                <tr className='pr-12'>  
                  <td>12:25pm – 12:55pm</td>
                  <td>Interactive Session 2: HCI Research and Innovation</td>
                </tr>
                <tr className='pr-12'>  
                  <td>12:55pm – 1:25pm</td>
                  <td>Q&A and Closing Remarks</td>
                </tr>
              </tbody>
          </table>
        </section>

      </div>
      <Footer />
    </main>
  );
};

export default HCIAgenda;