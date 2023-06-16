import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeLayout from "./Layouts/HomeLayout"
import HomePage from "./pages/HomePage"
import DashboardLayout from "./Layouts/DashboardLayout"
import DashboardPage from "./pages/DashboardPage"

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
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
