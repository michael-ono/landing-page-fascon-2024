import HomepageNavbar from "../HomePage_Files/HomepageNavbar";
import Footer from "../Navbar_Files/Footer";
import FooterFixed from "../Navbar_Files/FooterFixed";

const Registration = () => {
  return (
    <div className="registration-bg h-[94vh]">
      <HomepageNavbar />
      <div className="p-10 space-y-10 text-blue-900 pt-16">
        <h1 className="text-5xl  font-semibold">FASCON 2024 registration not yet available!!</h1>
          <h1 className="text-5xl font-semibold">
            Registration opens <span className="text-green-500">October 14th</span>
            <br /> and closes <span className="text-red-500">October 27th</span>
          </h1>
        <h1 className="text-5xl font-semibold">Stay tuned thanks.</h1>
      </div>
      <FooterFixed/>
    </div>
  );
};

export default Registration;