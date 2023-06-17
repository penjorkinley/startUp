import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";


function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
      setMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial view on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderDesktopMenu = () => {
    return (
      <nav className="hidden md:flex items-center space-x-4 bg-white sticky top-0">
        <ul className="flex space-x-4">
          <li>
            <Link
              exact
              to="/"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/program"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/startup"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Startups
            </Link>
          </li>
          <li>
            <Link
              to="/testimonial"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Testimonials
            </Link>
          </li>
        </ul>
  
        {/* Sign In and Sign Up Buttons */}
        <div>
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
            <Link to="/signin">Sign In</Link>
          </button>
          <button className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </nav>
    );
  };
  

<<<<<<< HEAD
const renderMobileMenu = () => {
  return (
    <nav
      className={`fixed right-0 top-0 h-screen w-64 bg-blue-200 z-50 md:hidden ${
        isMobileMenuOpen ? 'block' : 'hidden'
      }`}
    >
      <ul className="flex flex-col space-y-4 p-4">
        <li>
          <Link
            exact
            to="/"
            activeClassName="text-blue-500"
            className="text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeClassName="text-blue-500"
            className="text-gray-700 hover:text-gray-900"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            activeClassName="text-blue-500"
            className="text-gray-700 hover:text-gray-900"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/program"
            activeClassName="text-blue-500"
            className="text-gray-700 hover:text-gray-900"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            to="/startup"
            activeClassName="text-blue-500"
            className="text-gray-700 hover:text-gray-900"
          >
            Startups
          </Link>
        </li>
        <li>
          <Link
            to="/testimonial"
            activeClassName="text-blue-500"
            className="text-gray-700 hover:text-gray-900"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
            <Link to="/signin">Sign In</Link>
          </button>
        </li>
        <li>
          <button className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
            <Link to="/signup">Sign Up</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
=======
  const renderMobileMenu = () => {
    return (
      <nav
        className={`fixed right-0 top-0 h-screen w-64 bg-[#faf9f6] z-50 md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              exact
              to="/"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/program"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/startup"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Startups
            </Link>
          </li>
          <li>
            <Link
              to="/testimonial"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-yellow-300"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
>>>>>>> dbc47f2db2d082d8e90c2604941c1d4ce839ebb9

  return (
    <header className="flex items-center justify-between p-4">
      <div className="Logo">
      <img src={logo} alt="Registration" className="mx-auto mb-4" style={{ width: '70px', height: 'auto' }} />

        {/* <Link exact to="/" className="text-lg font-bold">
          LOGO
        </Link> */}
      </div>

      {/* Hamburger Menu Icon */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-600 focus:outline-none focus:text-gray-900"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      {isMobileView ? renderMobileMenu() : renderDesktopMenu()}
<<<<<<< HEAD
=======

      {/* Sign In and Sign Up Buttons */}
      <div>
        <button style={{ backgroundColor: '#FFDE59', color: 'black' }} className="hover:bg-blue-600 py-2 px-4 rounded">
          <Link to="/signin">Log In</Link>
        </button>

        <button style={{ backgroundColor: 'white', color: 'black' }} className="hover:bg-green-600 py-2 px-4 rounded">
          <Link to="/signup">Sign up</Link>
        </button>

      </div>
>>>>>>> dbc47f2db2d082d8e90c2604941c1d4ce839ebb9
    </header>
  );
}

export default Header;
