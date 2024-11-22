import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Shipments from "./pages/Shipments"
import TrackOrder from "./pages/TrackOrder"
import Store from "./pages/Store"
import VisitUs from "./pages/VisitUs"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/tracking" element={<TrackOrder />} />
        <Route path="/store" element={<Store />} />
        <Route path="/visit-us" element={<VisitUs />} />
      </Routes>
    </>
  )
}

export default App
