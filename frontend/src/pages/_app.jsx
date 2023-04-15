import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "../styles/globals.css"

import { Sidebar, Navbar } from '../components'

import ProjectDetails  from './ProjectDetails'
import CreateProject from './CreateProject'
import Profile from './Profile'
import Home from './Home'

const App = () => {
  return (
    <div className='relative sm:-8 p-4 min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10'>
        <Sidebar />
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Navbar />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes> */}
      </div>
      App
    </div>
  )
}

export default App
