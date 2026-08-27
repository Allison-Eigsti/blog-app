import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/header";
import Home from "./pages/Home";
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import Posts from './pages/post/show'
import Footer from './components/footer'


const navLinks = [
  { id: 1 , label: "Home", href: "/"},
  { id: 2 , label: "About", href: "/about" },
  { id: 3,  label: "Contact", href: "/contact" },
]


const footerLinks = [
  { id: 1, label: "Home", href: "/"},
  { id: 2, label: "Home", href: "/about" },
  { id: 3,  label: "Home", href: "/contact" },
  { id: 4, label: "About", href: "/"},
  { id: 5, label: "About", href: "/about" },
  { id: 6,  label: "About", href: "/contact" },
  { id: 7, label: "Contact", href: "/"},
  { id: 8, label: "Contact", href: "/about" },
  { id: 9,  label: "Contact", href: "/contact" }
]


function App() {
 
  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        {/* <Route path="/posts" element={<Posts />}/> */}
      </Routes>

      <Footer footerLinks={footerLinks}/>
    </>
  )
}

export default App
