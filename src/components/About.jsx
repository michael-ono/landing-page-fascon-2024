import React from 'react'
import HomepageNavbar from "../HomePage_Files/HomepageNavbar";
import aboutBg from "../assets/about-us-bg2.svg";

export default function About() {
    return (
        <>
            <HomepageNavbar />
            <div className='pl-4 mt-5 space-y-6'>
                <h1 className='text-6xl font-semibold'>Theme of the confrence:</h1>
                <h2  className='text-2xl font-base'>Artificial Intelligence in scientific Research and Innovation for sustainable national development</h2>
            </div>
        </>
    )
}