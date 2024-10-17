import React from 'react'
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const HCIParticipation = () => {
  return (
    <main className='h-screen bg-[#ecf1f7]'>
        <HomepageNavbar />
        <div className='px-6 attending-bg'>

          <div className='flex flex-col items-center mb-8'>
            <h1 className='text-6xl p-2 pl-6 pt-6 pb-5 font-bold text-center text-blue-900 tracking-tight custom-font'>Human Computer Interaction workshop </h1>
            <h2 className='bg-[#c5c5c5] text-deep-orange-700 w-2/5 font-extrabold rounded-3xl p-2 px-4\3 py-5 text-2xl lg:text-5xl text-center opacity-80 custom-font tracking-wide'>CALL FOR PARTICIPATION</h2>
          </div>

          <div className='space-y-4 px-7'>
            <p className='text-2xl font-semibold'>
              We are happy to introduce the Human Computer Interaction (HCI) workshop for researchers, academics, students (Undergraduate & Postgraduate), early career researchers, industry professionals, and anyone interested in learning about Human Computer Interaction and how technology and user experience shape research and innovation across various disciplines.
            </p>

            <div>
              <p className='text-2xl font-semibold'>
                Titled: <span className='text-red-500 font-bold'>“Exploring the Frontiers of Human-Computer Interaction (HCI): Innovations and Applications”</span>. The workshop will be a space for participants to:
              </p>
              <ul className='font-semibold text-xl list-disc pl-12'>
                <li>Learn about HCI, its methods and tools;</li>
                <li>HCI trends and the future of HCI;</li>
                <li>Discuss HCI’s application across various disciplines.</li>
                <li>Network with other researchers.</li>
              </ul>
            </div>

            <p className='text-2xl font-semibold'>
              We hope that participants will leave this workshop with ideas that they can explore and expand upon to improve their research practice.
            </p>

            <p className='text-2xl font-semibold'>
              The workshop is planned to happen on Monday, October 28, 2024, from 10:00am - 1:30pm.
            </p>
            <p className='text-2xl font-semibold'>
              Though attendance is free, you will be asked to register as an in-person or virtual participant and provide the organizers with proof of the FASCON conference registration. More on FASCON conference: <a className='text-blue-700' href="https://fascon.lcu.edu.ng">https://fascon.lcu.edu.ng</a>
            </p>
            <p className='text-2xl font-semibold'>
              If you’d like to participate in the workshop, please <a className='text-blue-700' href="https://bit.ly/HCIFASCON">complete this form</a> expressing your interest by October 26th, 2024.
            </p>
          </div>  

          <div className='px-7 space-y-2 font-semibold'>
            <p className='text-blue-900 pt-12 font-bold text-3xl'>
              Questions?
            </p>
            <p className='text-2xl'>
              Please direct any questions to the Human Computer Interaction (HCI) Workshop chairs:
            </p>
            <ul className='pb-10 text-xl list-disc pl-12'>
              <li>Folasade Adedeji, <a className='text-blue-700' href="mailto:adedeji.folasade@lcu.edu.ng">adedeji.folasade@lcu.edu.ng</a></li>
              <li>Mayowa Sofowora, <a className='text-blue-700' href="mailto:sofowora.mayowa@lcu.edu.ng">sofowora.mayowa@lcu.edu.ng</a></li>
            </ul>
          </div>
          
        </div>
        <Footer />
    </main>
  )
}

export default HCIParticipation;