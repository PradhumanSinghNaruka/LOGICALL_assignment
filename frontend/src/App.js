import React from 'react'

import Search from './component/Search'
import { useAuth } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Home from './component/Home'
import Contact from './component/Contact'
import Reviews from './component/Reviews'


function App() {
  const style = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh'
  }
  const {loading, data}=useAuth();
  console.log(loading);
  console.log(data);
  return (
    <>
      <div style={style}>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Search/:searchQuery" element={<Search/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/review" element={<Reviews/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
