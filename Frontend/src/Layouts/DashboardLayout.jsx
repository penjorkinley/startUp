import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";

function DashboardLayout() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200">
        {/* Sidebar or Dashboard content */}
        <DashHeader />
      </div>
      <div className="w-3/4 bg-white p-4">
        {/* Main content */}
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
