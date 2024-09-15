import axios from "axios";
import heroBg from "../assets/heroBg.png";
import logo from "../components/images/logo6.png"
// import Blog from "../components/Blog";
import { FaArrowUp } from "react-icons/fa";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HomepageNavbar from "./HomepageNavbar";
import Footer from "../Navbar_Files/Footer";

// import ImageSlider from "./ImageSilder";
// import SlickSlider from "../components/SlickSlider";
// import Sponsors from "../components/Sponsors";
import Attending from "../components/Attending";

const Homepage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);



    //Set the Courses List
    const [courseList, setCourses] = useState({ 
        id: 1,
        name: "American Law",
        category: "Science",
        price: "$12",
        butonText: "blue"
    })

    useEffect(() => {
        loadCourses();
    }, [])

    const loadCourses = async () => {

        try {
            const listOfCourses = await axios.get("http://localhost:9081/course/getcourses");

            const mappedCourses = listOfCourses.data.map((course) => {
                return {
                    courseID:course.courseId,
                    courseName: course.courseName,
                    category: course.courseCategory,
                    price: course.price,
                    buttonText: "View",
                };
            });

            //console.log(courseList)
            setCourses(mappedCourses); 

        }
        catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const registerPath = "/register/confrence"
    const navigate = useNavigate();

    const navigateSignup = (path) => {
        navigate(path);
    }

    const registerTutor = "/regtutor"

    const navigateSignupTutor = (path) => {
        navigate(path);
    }

    return (
        <>
            <HomepageNavbar />
            <div className="hero-bg select-none bg-[#ecf1f7]">

                <div className="flex flex-wrap p-5">  
                    <div className="w-full md:w-1/2 pl-14 space-y-6 pt-16 pb-7">
                        {/* <div className='pl-28 lg:pl-72 '> 
                          <img src={logo} className="w-[80px] h-[80px]" alt="Image description"/>
                        </div> */}

                        <h1 className="text-5xl pr-3 leading-tight font-semibold tracking-normal break-words">FASCON 2024: The 4th International Conference of the Faculty of Natural and Applied Sciences</h1>

                        <p className="text-pink-600 text-3xl font-extrabold">28 - 30 October, 2024</p>
                        <p className="text-pink-600 text-3xl font-extrabold">Ibadan, Nigeria</p>
                        <p className="text-2xl font-semibold pr-12">FASCON 2024 is being organized by the Faculty of Natural and Applied Sciences, Lead City University</p>
                        <button className="rounded-3xl text-white text-3xl bg-blue-500 hover:bg-blue-700 focus:ring-200 font-medium text-md px-12 h-16" onClick={() => navigateSignup(registerPath)}>Register</button>
                    </div>

                    <div className="w-full md:w-1/2 py-12 op">
                      <img src={heroBg} alt="Image description"/> 
                    </div>  
                </div>

                <Attending />

                {/* 
                <div className="bg-gray-300 text-4xl px-5 py-4 pl-[5rem] font-semibold">
                    <div className="container mx-auto text-center text-blue-900">
                        SPONSORS
                    </div>
                </div> */}


                {/* <div className="bg-gray-300 text-4xl px-5 py-4 pl-[5rem] font-semibold">
                    <div className="container mx-auto">
                        SPONSORS
                    </div>
                </div> */}

                {/* <div className="p-5 pl-8 py-6 text-[#ffff] text-[1.2rem]" style={{ backgroundImage: `url(${tutorBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <p>Are you passionate about teaching and sharing your knowledge with eager learners?</p>
                    <p className="py-5">Join LearnLodge and become a part of our growing community of educators!</p>
                    <p className="pt-2 mb-3">How to Get Started?</p>
                    <p>Click
                        <button
                            className="mx-3 focus:outline-none text-white bg-[#53a92b] hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={() => navigateSignupTutor(registerTutor)} >
                            Sign Up as a Admin
                        </button>
                        and create your tutor account.
                    </p>
                </div> */}

                <div className="fixed bottom-0 right-0 mb-4 mr-4">
                    {isVisible && (
                        <button
                          onClick={scrollToTop}
                          className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-3 px-6 rounded-full"
                        >
                            <FaArrowUp />
                        </button>
                    )}
                </div>
            
            </div >
            <Footer />
        </>
    )
}

export default Homepage;