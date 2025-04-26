// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Test from './components/Test'
import Tutorial from './components/Tutorial'

function createNFTCertificate(){
}

function App() {

  const [isCertificateDialogOpen, setIsCertificateDialogOpen] = useState<boolean>(true);

  return (
    <div className='w-full flex flex-column'>
      <Navbar></Navbar>
      <div className='w-full flex flex-row fixed left-0 top-20 w-full'>
        <Tutorial/>
        <Test/>
      </div>
      <div>
        <div className='mt-200'>
          <button onClick={async () => {
            await createNFTCertificate();
            setIsCertificateDialogOpen(true);
          }}>Get Certificate</button>
        </div>
      </div>
    </div>
  )
}

export default App
