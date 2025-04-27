import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Test from './components/Test'
import Tutorial from './components/Tutorial'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function App() {
  const [isCertificateDialogOpen, setIsCertificateDialogOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    console.log(link);
    if (link && link.length > 0) {
      window.open(link, '_blank');
    }
  }, [link]);

  const handleLogintwo = () => {
    setIsLoggedIn(true);
  };

  const handleCertificateRequest = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      const response = await fetch('/api/blockchain/make-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest' // Some proxies need this
        },
        body: JSON.stringify({
          name: "pouriya",
          lastName: "sabzi",
          curseName: "Curse of the Dragon",
          userAddress: "0x5dd8d12cd53ddc84906020f6a83e62e857d437e7c99e91e6421383958a3e2ef5"
        })
      });

      if (!response.ok) {
        throw new Error('Sertifika oluşturulamadı');
      }

      const data = await response.json();
      console.log('Success:', data);
      setSuccess(true);
      return data.data.link;
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Bir hata oluştu');
    } finally {
      setIsLoading(false);
      setIsCertificateDialogOpen(false);
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <Navbar handleLogintwo={handleLogintwo} isLoggedIn={isLoggedIn} />
      <div className='flex flex-row left-0 top-20 w-full'>
        <Tutorial/>
        {isLoggedIn && <Test />}
      </div>

      {/* Certificate button (only when logged in) */}
      {isLoggedIn && (
        <div className="flex justify-end p-4">
          <button 
            className="bg-green-600 text-black px-6 py-3 rounded-lg hover:bg-green-700 transition"
            onClick={() => setIsCertificateDialogOpen(true)}
          >
            Sertifika Al
          </button>
        </div>
      )}

      {/* Dialog (conditionally rendered) */}
      {isCertificateDialogOpen && (
        <Dialog
          open={isCertificateDialogOpen}
          onClose={() => setIsCertificateDialogOpen(false)}
          className="relative z-50"
        >
          {/* Backdrop (click to close) */}
          <DialogBackdrop className="fixed inset-0 bg-black/30" />

          {/* Dialog container */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
                <DialogTitle className="text-xl font-bold">
                  Sertifika Onayı
                </DialogTitle>
              </div>
              <p className="mt-4 text-gray-700">
                Sertifika almak istediğinize emin misiniz?
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsCertificateDialogOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  İptal
                </button>
                <button
                  onClick={async () => {
                    const link: string = await handleCertificateRequest();
                    console.log(link);
                    setLink(link);
                    setIsCertificateDialogOpen(false);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Onayla
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </div>
  )
}

export default App