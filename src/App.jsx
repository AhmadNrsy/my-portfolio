import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GameDetail from "./pages/GameDetail"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App