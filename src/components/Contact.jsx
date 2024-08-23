import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaFileInvoice, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import HomepageNavbar from "../HomePage_Files/HomepageNavbar";
import Footer from "../Navbar_Files/Footer";

const Contact = () => {

  return (
    <div className="bg-[#ecf1f7]">
      <Toaster />
      <HomepageNavbar />
      <div className="md:flex justify-between bg-[#ecf1f7] overflow-hidden text-black">
        <div className="md:w-3/5 md:mb-0 px-3">
          {/* <div className="">
            <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] text-black font-bold">
              Help & Support
            </h2>
            <p className="mb-5 text-black text-[0.9rem] md:text-[1rem]">
              Submit your question and our team we will respond to the email
              provided as soon as possible
            </p>
          </div> */}
          <div className="pt-1 ]">
            <div className="max-w-md mx-auto bg-[#ecf1f7] text-black rounded-md shadow-sm">
              <div className="text-center pt-8">
                <h1 className="text-[3.2rem] text-blue-900 font-semibold">
                  Contact Us
                </h1>
                <p className="text-[1.4rem]">
                  Fill in this form to send me a message.
                </p>
              </div>
              <div className="m-4">
                <form name="contact" className="flex flex-col items-center" onSubmit={(e) => e.preventDefault}>

                  {/* name */}
                  <div className="flex mb-6">                                        
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      className="min-w-[34rem] -ml-10 pl-10 pr-3 py-4 rounded-xl border-2 border-gray-400 outline-none focus:border-indigo-500"
                      placeholder="Name"
                    />
                  </div>

                  {/* email */}
                  <div className="flex mb-6">                                        
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <FaRegEnvelope />
                    </div>
                    <input
                      type="email"
                      className="min-w-[34rem] -ml-10 pl-10 pr-3 py-4 rounded-xl border-2 border-gray-400 outline-none focus:border-indigo-500"
                      placeholder="Email"
                    />
                  </div>

                  {/* message */}
                  <div className="mb-6">
                    <textarea
                      type="text"
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Your message"
                      className="min-w-[34rem] px-3 py-2 text-black placeholder-gray-400 border border-gray-900 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                    </textarea>
                  </div>

                  <div className="px-8">
                    <button
                      type="button"
                      className="w-full py-3 px-8 text-white bg-[#4a9455f7] rounded-full hover:bg-[#193152] focus:outline-none"
                      onClick={() => toast.success('Message sent successfully', { duration: 2000 })}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="md:w-2/5  gradient-image bg-600 h-[100vh]">
          <div className="hidden md:flex text-[#ffffff] justify-center gap-x-16 pt-[40%]">
            <a href="https://www.facebook.com">
              <FaLinkedin name="FaFacebook" size={25} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter name="FaTwitter" size={25} />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram name="FaInstagram" size={25} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

