import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeLayout from "./Layouts/HomeLayout"
import HomePage from "./pages/HomePage"
import DashboardLayout from "./Layouts/DashboardLayout"
import DashboardPage from "./pages/DashboardPage"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Programs from "./pages/Programs"
import StartUp from "./pages/StartUp"
import Testmonial from "./pages/Testmonial"
import Login from "./Auth/Login"
import Logout from "./Auth/logout"
import Home from "./pages/Dashboard/Home"
import Event from "./pages/Dashboard/Event"
import User from "./pages/Dashboard/User"
import Settings from "./pages/Dashboard/Settings"
import Help from "./pages/Dashboard/Help"
import "./index.css"

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />}/>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />}/>
              <Route index element={<Home />}/>
              <Route path="event" element={<Event />}/>
              <Route path="user" element={<User />}/>
              <Route path="setting" element={<Settings />}/>
              <Route path="help" element={<Help />}/>
            </Route>
            <Route path="user" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />}/>
            </Route>
            <Route path="about" element={<AboutUs />}/>
            <Route path="service" element={<Services />}/>
            <Route path="program" element={<Programs />}/>
            <Route path="startup" element={<StartUp />}/>
            <Route path="testimonial" element={<Testmonial />}/>
            <Route path="login" element={<Login />}/>
            <Route path="logout" element={<Logout />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
