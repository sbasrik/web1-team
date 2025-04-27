import React from "react";
import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Test from '../components/Test'
import Tutorial from '../components/Tutorial'

// function createNFTCertificate(){
// }

function App() {

  // const [isCertificateDialogOpen, setIsCertificateDialogOpen] = useState<boolean>(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Giriş durumu

  const handleLogintwo = () => {
    setIsLoggedIn(true); // Giriş yapınca true olacak
  };

  return (
    <div className='w-full flex flex-col'>
      <Navbar handleLogintwo={handleLogintwo} isLoggedIn={isLoggedIn} />
      <div className='flex flex-row left-0 top-20 w-full'>
        <Tutorial/>
        {isLoggedIn && <Test />}
      </div>
      {/* Sertifika butonu sadece giriş yapınca */}
      {isLoggedIn && (
        <div className="flex justify-end p-4">
          <button className="bg-green-600 text-black px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Sertifika Al
          </button>
        </div>
      )}
    </div>
  )
}

export default App
