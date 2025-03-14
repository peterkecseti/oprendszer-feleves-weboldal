import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from "./components/sidebar";
import Home from "./pages/home"; // Example page
import Prices from "./pages/prices"; // Another example page
import Contact from "./pages/contact"; // Another example page
import Colleagues from "./pages/colleagues"

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/colleagues" element={<Colleagues />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;