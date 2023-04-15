import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "../styles/globals.css"

const App = () => {
  return (
    <div className='relative sm:-8 p-4 min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10'>
        Sidebar
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        Navbar
      </div>
      App
    </div>
  )
}

export default App
