import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'
import Placeorder from "./Components/Placeorder.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fooditem from './Components/Fooditem.jsx'
import Footer from './Components/Footer.jsx'
import Login from "./Components/Login.jsx"
import Signup from './Components/Signup.jsx'
import { useState } from 'react'
function App() {
  const [ShowSignup,setShowSignup]=useState(false);
  const [ShowLogin,setShowLogin]=useState(false);
  return (
    <>
    {ShowSignup==true?<Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin}/>:null},
    {ShowLogin==true?<Login setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>:null}
    <BrowserRouter>
        <Navbar setShowSignup={setShowSignup} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Placeorder' element={<Placeorder/>}/>
          <Route path='/fooditem' element={<Fooditem/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
