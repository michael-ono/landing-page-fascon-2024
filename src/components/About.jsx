import React from 'react'
import HomepageNavbar from "../HomePage_Files/HomepageNavbar";
import aboutBg from "../assets/about-us-bg2.svg";
import "../App.css";

export default function About() {
    return (
        <>
            <HomepageNavbar />
            <div className='about-bg text-blue-800 pt-4 pl-4 space-y-6'>
                <h1 className='text-6xl font-semibold'>Theme of the confrence:</h1>
                <h2  className='text-2xl font-base'>Artificial Intelligence in scientific Research and Innovation for sustainable national development</h2>
            </div>
        </>
    )
}