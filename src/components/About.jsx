import React from 'react'
import HomepageNavbar from "../HomePage_Files/HomepageNavbar";
import aboutConfence from "./images/about-confrence.jpeg";
import aboutLogo from "./images/logo4.png";
import { FaMapMarkerAlt } from 'react-icons/fa';
import "../App.css";

export default function About() {
    return (
        <>
            <HomepageNavbar />
            <div className='flex flex-col mx-auto mt-4 items-center justify-center gap-y-4'>
                <img src={aboutLogo} className='w-28 h-24' alt="Image description"/> 
                <h1 className='text-6xl font-semibold p-0 tracking-wide leading-10'>Lead City University Ibadan</h1>
                <h2 className='text-3xl font-bold'>Faculty of Natural and Applied Sciences</h2>
                <img src={aboutConfence} className='w-[48rem] h-[15rem]' alt="Image description"/> 
                <div className='flex gap-6 justify-center items-center mt-12'>
                    <h1 className='text-deep-orange-500 text-2xl font-extrabold'>Theme:</h1>
                    <h4 className='text-xl font-bold w-1/2'>Emerging Technologies in Scientific Research and Innovation for Sustainable ational Development</h4>
                </div>
                <div className='flex gap-6 p-3 justify-center items-center border-2 border-black'>
                    <h1 className='text-2xl font-bold'>Date: 10th-12th December, 2022</h1> |
                    <h1 className='text-2xl font-bold'>Time: 10:00am</h1>
                </div>
                <div className="flex gap-6 justify-center items-center">
                   <div><FaMapMarkerAlt className="text-lg text-red-500 mr-2" /></div>
                    <h1 className='text-2xl font-bold'>International Confrence Centre <br /> Lead City, Ibadan </h1>
                </div>
            </div>
        </>
    )
}