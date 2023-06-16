import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="Logo">
        <Link to='/'>LOGO</Link>
      </div>
      <nav>
        <Link to="."></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
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