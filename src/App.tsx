// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Test from './components/Test'
import Tutorial from './components/Tutorial'

function App() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar></Navbar>
      <div className='w-full' style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Tutorial/>
        <Test/>
      </div>
    </div>
  )
}

export default App
