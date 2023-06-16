import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="Logo">
        <Link to='/'>LOGO</Link>
      </div>
      <nav>
        <Link to=".">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/service">Services</Link>
        <Link to="/program">Programs</Link>
        <Link to="/startup">Startups</Link>
        <Link to="/testimonial">Testimonials</Link>
      </nav>
      <div className="Register">
        <button>
          <Link to="/login">Log In</Link>
        </button>
        <button>
          <Link to="/logout">Log Out</Link>
        </button>
      </div>
    </header>
  )
}

export default Header