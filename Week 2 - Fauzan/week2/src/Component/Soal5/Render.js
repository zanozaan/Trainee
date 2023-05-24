import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import About from './Page/About'
import Home from './Page/Home'

function Render() {
  return (
    <>
    <Navbar/>
    <div className='Container'>
    <Router>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/home' element={<Home />}/>
        </Routes>
    </Router>
    </div>
    </>
  )
}

export default Render