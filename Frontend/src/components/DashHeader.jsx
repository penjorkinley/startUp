import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function DashHeader() {
  return (
    <header className="bg-gray-200 text-black px-4 py-6">
      <div className="logo">
      <img src={logo} alt="Registration" className="mx-auto mb-4" style={{ width: '90px', height: 'auto' }} />

        <Link to="/dashboard"></Link>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/event"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6]"
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/user"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6]"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/setting"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6]"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/help"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6]"
            >
              Help
            </Link>
          </li>
          <li>
            <button className="block py-2 px-4 rounded bg-yellow-300 text-black">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default DashHeader;
