import { Link } from "react-router-dom"

function DashHeader() {
  return (
    <header>
      <div className="logo">
        <Link to=''>LOGO</Link>
      </div>
      <nav>
        <ul>
          <li><Link to='.'>Home</Link></li>
          <li><Link to='event'>Event</Link></li>
          <li><Link to='user'>User</Link></li>
          <li><Link to='setting'>Settings</Link></li>
        </ul>
      </nav>
      <div>
        <ul>
          <li><Link to='help'>Help</Link></li>
          <li>
            <button>Log Out</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default DashHeader