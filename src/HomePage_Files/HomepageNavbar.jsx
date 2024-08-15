import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../components/images/logo2.png"
import { CgMenu, CgChevronDown } from 'react-icons/cg';

function HomepageNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null); // Track active dropdown

    const navigate = useNavigate();

    // Dashboard Navigation
    const navigateDashBoard = (e, path) => {
        e.preventDefault();
        navigate(path);
    }

    // Login Navigation
    const loginPath = "/login"

    const navigateSignup = (path) => {
        navigate(path);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeDropdown = () => {
        setActiveMenu(null);
    };

    const NavMenus = [
        // { title: "HOME", path: "/" },
        { title: "ABOUT", path: "/about", subMenu: [
            { title: "Program", path: "/about/program" },
            { title: "Organizers", path: "/about/organizers" }
        ]},
        { title: "ATTENDING", path: "/registration", subMenu: [
            { title: "Accommodation", path: "/accommodation" }
        ] },
        { title: "SCHEDULE", path: "/schedule" },
        // { title: "PROGRAM", path: "/updates" },
        { title: "REGISTRATION", path: "/register" },
        { title: "CONTACT US", path: "/contact" },
        { title: "FASCON 2024", path: "/" },
    ];

    const handleMenuClick = (menu, index) => {
        if (menu.subMenu) {
            setActiveMenu(activeMenu === index ? null : index); // Toggle submenu
        } else {
            navigate(menu.path); // Navigate for non-dropdown items
        }
    };

    return (
        <header className="bg-gray-900 text-white pt-4 pb-2 select-none">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <div className="inline-block mr-2 cursor-pointer" onClick={() => navigate("/")}>
                        <img src={Logo} className="h-26 w-20 inline-block transform -translate-y-2" alt="Logo" />
                    </div>
                    <span
                        className="text-xl sm:text-3xl font-semibold inline-block mb-2">
                        FASCON 2024
                    </span>
                </div>

                <div className={`nav-links black duration-500 md:static absolute md:min-h-fit min-h-[45vh] left-0 ${isMenuOpen ? 'top-[10%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        {NavMenus.map((Menu, index) => (
                            <li key={index} className="cursor-pointer text-[1rem] hover:text-blue-600 relative">
                                <span onClick={() => handleMenuClick(Menu, index)}>
                                    {Menu.title}
                                    {Menu.subMenu && (activeMenu === index ? <CgChevronDown /> : null)}
                                </span>
                                {Menu.subMenu && activeMenu === index && (
                                    <ul className="absolute top-[100%] left-0 bg-gray-900 text-white py-2 px-4 shadow-md">
                                        {Menu.subMenu.map((subMenu, subIndex) => (
                                            <li key={subIndex} className="cursor-pointer hover:text-blue-600" onClick={() => navigate(subMenu.path)}>
                                                {subMenu.title}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="flex items-center gap-6">

                    <span
                        onClick={toggleMenu} name={isMenuOpen ? 'close' : 'menu'} className="text-3xl cursor-pointer md:hidden">
                        <CgMenu />
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default HomepageNavbar;
