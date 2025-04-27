// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Test from './components/Test'
import Tutorial from './components/Tutorial'

function App() {

  return (
    <div className='w-full flex flex-col'>
      <Navbar/>
      <div className='flex flex-row left-0 top-20 w-full'>
        <Tutorial/>
        <Test/>
      </div>
      <div className="flex justify-end">
        <button className="bg-green-600 text-black px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Sertifika Al
        </button>
      </div>
    </div>
  )
}

export default App
