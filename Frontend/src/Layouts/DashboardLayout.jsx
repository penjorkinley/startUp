import { Outlet } from "react-router-dom"
import DashHeader from "../components/DashHeader"

function DashboardLayout() {
  return (
    <div>
      <DashHeader />
      <Outlet />
    </div>
  )
}

export default DashboardLayout