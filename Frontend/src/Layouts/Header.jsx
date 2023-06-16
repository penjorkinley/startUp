import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
        <nav>
            <Link to=".">LOGO</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Services</Link>
            <Link to="/program">Programs</Link>
            <Link to="/mentor">Mentors</Link>
            <Link to="/facilatator">Facilatators</Link>
            <Link to="/startup">Startups</Link>
            <Link to="/annoucemnet">Annoucements</Link>
            <Link to="/testmonial">Testimonials</Link>
        </nav>
    </header>
  )
}
