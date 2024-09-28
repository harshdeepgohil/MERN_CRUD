import './App.css'
import AddUser from './components/AddUser'
import DispUser from "./components/DispUser"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/AddUser/:id" element={<AddUser />} />
        <Route path="/DispUser" element={<DispUser />} />
      </Routes>
    </>
  )
}

export default App
