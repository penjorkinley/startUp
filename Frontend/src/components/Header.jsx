import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="Logo">
        <NavLink exact to="/" className="text-lg font-bold">LOGO</NavLink>
      </div>
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li><NavLink exact to="/" activeClassName="text-blue-500" className="text-gray-700 hover:text-gray-900">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="text-blue-500" className="text-gray-700 hover:text-gray-900">About Us</NavLink></li>
          <li><NavLink to="/service" activeClassName="text-blue-500" className="text-gray-700 hover:text-gray-900">Services</NavLink></li>
          <li><NavLink to="/program" activeClassName="text-blue-500" className="text-gray-700 hover:text-gray-900">Programs</NavLink></li>
          <li><NavLink to="/startup" activeClassName="text-blue-500" className="text-gray-700 hover:text-gray-900">Startups</NavLink></li>
          <li><NavLink to="/testimonial" activeClassName="text-blue-500" className="text-gray-700 hover:text-gray-900">Testimonials</NavLink></li>
        </ul>
      </nav>
      <div className="Register">
        <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
          <Link to="/login">Sign In</Link>
        </button>
        <button className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
          <Link to="/logout">Sign up</Link>
        </button>
        <button className="text"></button>
      </div>
</header>
  )
}

export default Header