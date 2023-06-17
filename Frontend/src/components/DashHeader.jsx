import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function DashHeader() {
  return (
    <header className="bg-gray-200 text-black px-4 py-6 flex flex-col h-full">
      <div className="logo mb-4">
        <img src={logo} alt="Registration" className="mx-auto" style={{ width: '150px', height: 'auto' }} />
        <Link to="/dashboard"></Link>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6] border-b border-gray-300 font-bold text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/event"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6] border-b border-gray-300 font-bold text-lg"
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/user"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6] border-b border-gray-300 font-bold text-lg"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/setting"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6] border-b border-gray-300 font-bold text-lg"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/help"
              className="block py-2 px-4 rounded hover:bg-[#faf9f6] border-b border-gray-300 font-bold text-lg"
            >
              Help
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="space-y-2">
          <li>
            <button className="block py-2 px-4 rounded bg-yellow-300 text-black font-bold text-lg">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default DashHeader;
