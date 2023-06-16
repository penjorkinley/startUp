import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./Layouts/Layout"
import HomeLayout from "./Layouts/HomeLayout"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeLayout /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
