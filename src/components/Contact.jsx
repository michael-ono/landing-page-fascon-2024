import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import HomepageNavbar from "../HomePage_Files/HomepageNavbar";
import Footer from "../Navbar_Files/Footer";

const Contact = () => {

  const handleContactClick = () => {
    window.location.href = "mailto:drfola1@gmail.com"; 
  };

  return (
    <div className="bg-[#ecf1f7]">
      <HomepageNavbar />
      <div className="md:flex justify-between bg-[#ecf1f7] overflow-hidden text-black">
        {/* Left */}
        <div className="contact-bg px-3 pb-4 md:w-3/5 md:mb-0 md:pt-10">
          <div className=" text-black rounded-md shadow-sm">
            <div className="text-center mx-auto pt-8 pb-8">
              <h1 className="text-[3.8rem] pb-6 text-white font-semibold">
                Contact Us
              </h1>
              <div className="w-[85%] mx-auto px-4 py-4 bg-blue-300 rounded-xl text-center text-white space-y-4">
                <div className="flex flex-col">
                  <h1 className="text-3xl font-extrabold text-pink-700">LOC Secertary: MR S.O. ILUGBO</h1>
                  <p className="text-2xl text-white font-semibold">+234 810 324 3668</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-3xl font-extrabold text-pink-700">Logistics: DR O.O. JOHN-DEWOLE</h1>
                  <p className="text-2xl text-white font-semibold">+234 803 496 8640</p>
                </div>
              </div>
            </div>

            {/* SEND EMAIL */}
            <div className="text-center mt-8">
              <h1 className="text-[2.8rem] pb-6 text-white font-bold">OR</h1>
              <h1 className="text-[2.3rem] pb-6 text-white font-semibold" >Alternatevely, send us an email below</h1>
              <button
                className="bg-green-400 text-[1.4rem] hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-sm"
                onClick={handleContactClick}
              >
                Send Email
              </button>
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

