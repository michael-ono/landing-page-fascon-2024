import { Route, Routes } from "react-router-dom";

import Homepage from "./HomePage_Files/Homepage";
import About from "./components/About";
import HomeContact from "./HomePage_Files/HomeContact";

import LoginForm from "./Login_Files/LoginForm";
import RegisterForm from "./Login_Files/RegisterForm";
import TutorRegister from "./Login_Files/TutorRegister";
import LoginTutor from "./Login_Files/LoginTutor";

import Organizers from "./components/Organizers";
import Registration from "./components/Registration";
import Attending from "./components/Attending";
import Updates from "./components/Updates";
import Contact from "./components/Contact";
import Events from "./components/Events";

function App() {

  return (
    <Routes>
      {/* HomePage */}
      <Route path="/" exact element={<Homepage />} />
      <Route path="/about/program" element={<About />} />
      <Route path="/about/organizers" element={<Organizers />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/attending" element={<Attending />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/organizers" element={<Organizers />} />
      <Route path="/schedule" element={<Events/>} />
   
      {/* User */} 
      {/* <Route element={<PrivateRouteUser isLogged={userLogged} />}> */}
      {/* <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/contact" element={<UserContact />} />
      <Route path="/user/allcourses" element={<UserAllCourses />} />
      <Route path="/user/settings" element={<UserSettings />} /> */}
      {/* </Route> */}

      {/* Tutor */}
      {/* <Route element={<PrivateRouteTutor isLogged={tutorLogged}/>}> */}
      {/* <Route path="/tutor/dashboard" element={<Tutor />} />
      <Route path="/tutor/publish" element={<TutorPublish />} />
      <Route path="/tutor/contact" element={<TutorContact />} /> */}
      {/* </Route> */}


      {/* Login/Sign In */}
      {/* <Route path="/login" element={<LoginForm />} />
      <Route path="/logintutor" element={<LoginTutor />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/regtutor" element={<TutorRegister />} /> */}

      {/* Course */}
      {/* <Route path="/machineLearning" element={<MachineLearning />} />
      <Route path="/pythonProgramming" element={<PythonProgramming />} />
      <Route path="/userCourse" element={<CourseFile />} /> */}
    </Routes>

  );
}

export default App;
