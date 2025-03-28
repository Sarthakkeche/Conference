
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../assets/logo.png";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-1 bg-white text-gray-800 shadow-md">
//       <div className="text-xl font-bold"><img src={logo} className="h-20 w-40" alt="Logo"/></div>
      
//       {/* Menu button for small screens */}
//       <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
//         <FiMenu />
//       </button>

//       {/* Sidebar for mobile menu */}
//       <div className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden shadow-lg border-l` }>
//         <div className="flex justify-between items-center p-6 border-b">
//           <h2 className="text-xl font-bold">Menu</h2>
//           <button onClick={() => setMenuOpen(false)} className="text-2xl">
//             <FiX />
//           </button>
//         </div>
//         <ul className="flex flex-col gap-6 p-6">
//           <li className="hover:text-blue-500 cursor-pointer"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li className="hover:text-blue-500 cursor-pointer"><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
//           <li className="hover:text-blue-500 cursor-pointer"><Link to="/comitee" onClick={() => setMenuOpen(false)}>Committee</Link></li>
//           <li className="hover:text-blue-500 cursor-pointer">Call For Papers</li>
//           <li className="hover:text-blue-500 cursor-pointer"><Link to="/Imp" onClick={() => setMenuOpen(false)}>Important Dates</Link></li>
//           <li className="hover:text-blue-500 cursor-pointer"><Link to="/Venue" onClick={() => setMenuOpen(false)}>Venue</Link></li>
//           <li className="hover:text-blue-500 cursor-pointer"><Link to="/registration" onClick={() => setMenuOpen(false)}>Registration</Link></li>
//           <li className="hover:text-blue-500 cursor-pointer"><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
//         </ul>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-6">
//         <li className="hover:text-blue-500 cursor-pointer"><Link to="/">Home</Link></li>
//         <li className="hover:text-blue-500 cursor-pointer"><Link to="/about">About</Link></li>
//         <li className="hover:text-blue-500 cursor-pointer"><Link to="/comitee" >Committee</Link></li>
//         <li className="hover:text-blue-500 cursor-pointer">Call For Papers</li>
//         <li className="hover:text-blue-500 cursor-pointer"><Link to ="/Imp">Important Dates</Link></li>
//         <li className="hover:text-blue-500 cursor-pointer"><Link to ="/Venue">Venue</Link></li>
//         <li className="hover:text-blue-500 cursor-pointer"><Link to="/registration">Registration</Link></li>
//         <li className="hover:text-blue-500 cursor-pointer"><Link to="/Contact">Contact Us</Link> </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link , useLocation} from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-1 bg-white text-gray-800 shadow-md">
      <div className="text-xl font-bold">
        <img src={logo} className="h-20 w-40" alt="Logo" />
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
        <ul className="flex flex-col gap-6 p-6">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/" className={` ${location.pathname=='/'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/about" className={` ${location.pathname=='/about'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/comitee" className={` ${location.pathname=='/comitee'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Committee</Link>
          </li>

          {/* Dropdown - Call For Papers (Mobile) */}
          <li
            className="hover:text-blue-500 cursor-pointer flex items-center justify-between"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Call For Papers <FiChevronDown />
          </li>
          {dropdownOpen && (
            <ul className="pl-6 space-y-2 text-gray-700">
              <li className="hover:text-blue-500"><Link to="/submission">Submission Guidelines</Link></li>
              <li className="hover:text-blue-500"><Link to="/topics">Submit Paper</Link></li>
              <li className="hover:text-blue-500"><Link to="/review-process">Review Process</Link></li>
            </ul>
          )}

          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/Imp" className={` ${location.pathname=='/Imp'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Important Dates</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/Venue" className={` ${location.pathname=='/Venue'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Venue</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/registration" className={` ${location.pathname=='/registration'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Registration</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/Contact" className={` ${location.pathname=='/Contact'?'text-blue-500' : ""}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 relative">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/" className={` ${location.pathname=='/'?'text-blue-500' : ""}`}>Home</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/about" className={` ${location.pathname=='/about'?'text-blue-500' : ""}`}>About</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/comitee" className={` ${location.pathname=='/comitee'?'text-blue-500' : ""}`}>Committee</Link>
        </li>

        {/* Dropdown for Call For Papers (Desktop) */}
        <li className="relative group">
          <span className="hover:text-blue-500 cursor-pointer flex items-center">
            Call For Papers <FiChevronDown className="ml-1" />
          </span>
          <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/submission">Submission Guidelines</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/topics">Submit Paper</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/review-process">Review Process</Link>
            </li>
          </ul>
        </li>

        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/Imp" className={` ${location.pathname=='/Imp'?'text-blue-500' : ""}`}>Important Dates</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/Venue" className={` ${location.pathname=='/Venue'?'text-blue-500' : ""}`}>Venue</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/registration" className={` ${location.pathname=='/registration'?'text-blue-500' : ""}`}>Registration</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/Contact" className={` ${location.pathname=='/Contact'?'text-blue-500' : ""}`}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
