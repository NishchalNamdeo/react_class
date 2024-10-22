import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import About from './components/About';

const Context = () => {
  return (
    <div >
        <nav className='mt-10 flex justify-center gap-10'>
         <Link to="/">Home</Link>
         <Link to="/user">User</Link>
         <Link to="/about">About</Link>
        </nav>

        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/user" exact element={<User />} />
            <Route path="/about" exact element={<About />} />
        </Routes>



     
    </div>
  )
}

export default Context