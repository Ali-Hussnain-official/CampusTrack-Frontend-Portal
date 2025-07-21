import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar'
import BrowseItems from './Pages/BrowseItems'
import LostItemForm from './Pages/LostItemForm'
import FoundItemForm from './Pages/FoundItemForm'
import SubmitItemPage from './Pages/SubmitItemPage'
import FAQs from './Pages/FAQs'
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<BrowseItems/>} />
        <Route path="/lost" element={<LostItemForm />} />
        <Route path="/found" element={<FoundItemForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/submit" element={<SubmitItemPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
