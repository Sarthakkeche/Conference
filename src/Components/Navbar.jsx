import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center pl-3  pr-3 bg-white text-gray-800 shadow-md">
      <div className="text-xl font-bold">
        <img src={logo} className="h-24 w-36" alt="Logo" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
        <FiMenu />
      </button>

      {/* Sidebar for Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg border-l`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6">
           <li className="hover:text-blue-500">
            <Link to="/" className={` ${location.pathname=='/'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>
          </li> 
        
          <li className="hover:text-blue-500">
            <Link to="/about" className={` ${location.pathname=='/about'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/comitee" className={` ${location.pathname=='/comitee'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Committee</Link>
          </li>

          {/* Dropdown for Call For Papers */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-blue-500 cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Call For Papers
              <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
            </button>
            
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 p-3 space-y-2 transition-opacity duration-300">
                <li className="hover:bg-blue-100 rounded-md px-3 py-2 transition-colors">
                  <Link to="/guide">Submission Guidelines</Link>
                </li>
                <li className="hover:bg-blue-100 rounded-md px-3 py-2 transition-colors">
                  <Link to="/Topic">Topics of Interest</Link>
                </li>
                <li className="hover:bg-blue-100 rounded-md px-3 py-2 transition-colors">
                <Link to="https://www.cureusjournals.com/users/sign_in">Submit Paper</Link>
                </li>
                {/* <li className="hover:bg-blue-100 rounded-md px-3 py-2 transition-colors">
                  <Link to="/review-process">Review Process</Link>
                </li> */}
              </ul>
            )}
          </div>

          <li className="hover:text-blue-500">
            <Link to="/Imp" className={` ${location.pathname=='/Imp'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Important Dates</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/Venue" className={` ${location.pathname=='/Venue'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Venue</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/registration" className={` ${location.pathname=='/registration'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Registration</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/Contact" className={` ${location.pathname=='/Contact'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 relative">
        {/* <li className="hover:text-blue-500"><Link to="/" className={` ${location.pathname=='/'?'text-blue-500' : ""}`}>Home</Link></li> */}
        <li className="relative group">
  <Link
    to="/"
    className={`hover:text-blue-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname=='/'?'text-blue-500' : ""}`}
  >
    Home
  </Link>
</li>


        {/* <li className="hover:text-blue-500"><Link to="/about" className={` ${location.pathname=='/about'?'text-blue-500' : ""}`}>About</Link></li>
        <li className="hover:text-blue-500"><Link to="/comitee" className={` ${location.pathname=='/comitee'?'text-blue-500' : ""}`}>Committee</Link></li> */}
         <li className="relative group">
  <Link
    to="/about"
    className={`hover:text-blue-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname=='/about'?'text-blue-500' : ""}`}
  >
    About
  </Link>
</li>

<li className="relative group">
  <Link
    to="/comitee"
    className={`hover:text-blue-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname=='/comitee'?'text-blue-500' : ""}`}
  >
    Committee
  </Link>
</li>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
  <button
    className="hover:text-blue-500 cursor-pointer flex items-center gap-2 transition-all duration-300"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    Call For Papers
    <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
  </button>

  {dropdownOpen && (
    <ul
      className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-3 space-y-2 transition-opacity duration-300 
      border-2 border-linear-gradient(to right, red, blue, pink) 1 bg-clip-padding  rounded-lg"
      style={{
        
        borderWidth: "2px",
    borderRadius: "10px",
    borderStyle: "solid",
    borderImage: "linear-gradient(to right, red, blue, pink) 1",
    backgroundClip: "padding-box",
      }}
    >
      <li className="hover:bg-blue-100 rounded-md px-3 py-2 transition-colors">
        <Link to="/guide">Submission Guidelines</Link>
      </li>
      <li className="hover:bg-blue-100 rounded-md px-3 py-2 transition-colors">
        <Link to="/Topic">Topic of Interest</Link>
      </li>
      <li className="hover:bg-blue-100 rounded-md px-3 py-2 transition-colors">
        <Link to="https://www.cureusjournals.com/users/sign_in">Submit Paper</Link>
      </li>
    </ul>
  )}
</div>

        
        <li className="hover:text-blue-500 relative group">
  <Link
    to="/Imp"
    className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname=='/Imp'?'text-blue-500' : ""}`}
  >
    Important Dates
  </Link>
</li>

<li className="hover:text-blue-500 relative group">
  <Link
    to="/Venue"
    className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname=='/Venue'?'text-blue-500' : ""}`}
  >
    Venue
  </Link>
</li>

<li className="hover:text-blue-500 relative group">
  <Link
    to="/registration"
    className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname=='/registration'?'text-blue-500' : ""}`}
  >
    Registration
  </Link>
</li>

<li className="hover:text-blue-500 relative group">
  <Link
    to="/Contact"
    className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname=='/Contact'?'text-blue-500' : ""}`}
  >
    Contact Us
  </Link>
</li>

      </ul>
    </nav>
    
  );
}

export default Navbar;
