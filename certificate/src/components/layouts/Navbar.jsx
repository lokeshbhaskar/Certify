import React, { useState, useContext, useRef, useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import MenuModal from "../MenuModal";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
const courses = [
  "Front-End",
  "Back-End",
  "DSA",
  "Full Stack",
  "Data Science",
  "Machine Learning",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [isNavDropdown, setIsNavDropdown] = useState(false);
  // Access user context
  const { user, clearUser } = useContext(UserContext);
  // console.log(user);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsNavDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    clearUser();
    setShowDropdown(false);
  };
  const handleDashboard = () => {
    navigate("/user-dashboard");
    setShowDropdown(false);
  };

  return (
      <header className="w-full  h-16 z-10 flex items-center justify-between p-4   text-white border-2 border-sky-300 rounded-lg ">
        <div className="text-xl font-bold">Certify</div>
        {/* Show nav only on md and up */}
        <nav className="hidden md:flex gap-6  ">
          <Link
            to="/"
            className="relative inline-block  hover:text-orange-500
             before:absolute before:-bottom-1 before:left-0
             before:h-[2px] before:w-0 before:bg-orange-600
             before:transition-all before:duration-300
             hover:before:w-full"
          >
            Home
          </Link>
          <a
            href="#"
            className="relative inline-block  hover:text-orange-500
      before:absolute before:-bottom-1 before:left-0
      before:h-[2px] before:w-0 before:bg-orange-600
      before:transition-all before:duration-300
      hover:before:w-full"
            onClick={() => setIsNavDropdown(!isNavDropdown)}
          >
            Courses
          </a>

          {isNavDropdown && (
            <div
              className="absolute top-[7vh] mt-4 left-[42vw] -translate-x-1/2 bg-gray-300 shadow-lg rounded-2xl p-4 z-50 w-[20vw]"
              ref={dropdownRef}
            >
              <ul className="space-y-2 text-center sm:text-left">
                {courses.map((course, index) => (
                  <li key={index}>
                    <Link className="block hover:text-black">
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href="#"
            className="relative inline-block  hover:text-orange-500
             before:absolute before:-bottom-1 before:left-0
             before:h-[2px] before:w-0 before:bg-orange-600
             before:transition-all before:duration-300
             hover:before:w-full"
          >
            Pricing
          </a>
          <a
            href="#"
            className="relative inline-block  hover:text-orange-500
             before:absolute before:-bottom-1 before:left-0
             before:h-[2px] before:w-0 before:bg-orange-600
             before:transition-all before:duration-300
             hover:before:w-full"
          >
            Support
          </a>
        </nav>

        {/* User section, always visible except on small screens */}
        <div className="hidden md:flex items-center">
          {user ? (
            <div className="relative flex items-center">
              <span className="px-2 py-1 md:px-4 md:py-2 ">
                Hi, {user.name}
              </span>
              <div className="relative">
                <button
                  className="focus:outline-none"
                  onClick={() => setShowDropdown((prev) => !prev)}
                  aria-label="Toggle user menu"
                >
                  {user.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt="Profile"
                      className="w-10 h-10 bg-white rounded-full object-cover bg-center border-2 "
                    />
                  ) : (
                    <FaUserCircle className="w-10 h-10 text-orange-600" />
                  )}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                      onClick={handleDashboard}
                    >
                      DashBoard
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <button
                className="px-2 py-1 md:px-4 md:py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 cursor-pointer"
                onClick={handleSignUp}
              >
                Sign up
              </button>
              <button
                className="px-2 py-1 md:px-4 md:py-2 border rounded text-gray-700 hover:bg-orange-200 cursor-pointer"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button, only on small screens */}
        <div className="flex md:hidden items-center">
          <button
            className="text-orange-600 text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <IoClose /> : <TbMenuDeep />}
          </button>
        </div>
         {/* Mobile Menu, only for small screens */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>
  );
};

export default Navbar;
