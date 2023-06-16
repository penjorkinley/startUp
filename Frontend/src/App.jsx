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

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />}/>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />}/>
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
