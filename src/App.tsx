// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Test from './components/Test'
import Tutorial from './components/Tutorial'

function App() {

  return (
    <div className='w-full flex flex-column'>
      <Navbar></Navbar>
      <div className='w-full flex flex-row fixed left-0 top-20 w-full'>
        <Tutorial/>
        <Test/>
      </div>
    </div>
  )
}

export default App
