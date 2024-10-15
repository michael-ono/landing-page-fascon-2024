import React from 'react'
import HomepageNavbar from '../HomePage_Files/HomepageNavbar';
import Footer from '../Navbar_Files/Footer';

const HCIParticipation = () => {
  return (
    <main className='h-screen bg-[#ecf1f7]'>
        <HomepageNavbar />
        <div className='px-6 attending-bg'>
            <h1 className='text-5xl pl-6 pt-6 pb-5 font-bold text-center text-blue-900'>Human Computer Interaction workshop – Call for Participation</h1>
            <p className='pb-5 text-2xl'>
              We are happy to introduce the Human Computer Interaction (HCI) workshop for researchers, academics, students (Undergraduate & Postgraduate), early career researchers, industry professionals, and anyone interested in learning about Human Computer Interaction and how technology and user experience shape research and innovation across various disciplines.
            </p>
            <p className='text-2xl'>
              Titled <span className='font-bold'>“Exploring the Frontiers of Human-Computer Interaction (HCI): Innovations and Applications”</span>the workshop will be a space for participants to:
            </p>
            <ul className='pb-5 text-xl list-disc pl-12'>
              <li>Learn about HCI, its methods and tools;</li>
              <li>HCI trends and the future of HCI;</li>
              <li>Discuss HCI’s application across various disciplines.</li>
              <li>Network with other researchers.</li>
            </ul>
            <p className='pb-5 text-2xl'>
              We hope that participants will leave this workshop with ideas that they can explore and expand upon to improve their research practice.
            </p>

            <p className='text-2xl'>
              The workshop is planned to happen on Monday, October 28, 2024, from 10:00am - 1:30pm.
            </p>
            <p className='pb-5 text-2xl'>
              Though attendance is free, you will be asked to register as an in-person or virtual participant and provide the organizers with proof of the FASCON conference registration. More on FASCON conference: <a className='text-blue-700' href="https://fascon.lcu.edu.ng">https://fascon.lcu.edu.ng</a>
            </p>
            <p className='text-2xl'>
              If you’d like to participate in the workshop, please <a className='text-blue-700' href="https://bit.ly/HCIFASCON">complete this form</a> expressing your interest by October 26th, 2024.
            </p>
            <p className='pt-12 font-bold text-3xl'>
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
        <Footer />
    </main>
  )
}

export default HCIParticipation;