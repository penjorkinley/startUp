import { Link } from "react-router-dom";

function DashHeader() {
  return (
    <header className="bg-gray-800 text-white px-4 py-6">
      <div className="logo">
        <Link to="/dashboard">LOGO</Link>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/event"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/user"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/setting"
              className="block py-2 px-4 rounded hover:bg-gray-700"
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
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Help
            </Link>
          </li>
          <li>
            <button className="block py-2 px-4 rounded bg-red-500 hover:bg-red-600 text-white">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default DashHeader;
