import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(""); // Kullanıcı adını tutacak
  const [inputUsername, setInputUsername] = useState(""); // Input içindeki geçici kullanıcı adı

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(inputUsername); // Kullanıcı adını kaydet
    setIsOpen(false); // Modalı kapat
    setInputUsername(""); // Inputu temizle
  };
    return (
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-1 bg-white shadow-md z-50">
        {/* Logo */}
        <div className="flex justify-center text-2xl font-bold text-blue-600">
          MyLogo
          <ul className="flex space-x-6 text-gray-700 ml-7">
          <li className="hover:text-blue-500 cursor-pointer font-normal text-lg">Home</li>
          <li className="hover:text-blue-500 cursor-pointer font-normal text-lg">About</li>
        </ul>
        </div>
  
        {/* Button */}
        <button
        onClick={() => {
          if (!username) setIsOpen(true);
        }}
         className="text-black ">
          {username ? username : "Sing In"}
        </button>

        {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                className="border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="password"
                placeholder="Şifre"
                className="border border-gray-300 rounded-lg p-3"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-black p-3 rounded-lg hover:bg-green-600"
              >
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      )}
      </nav>
    )
  }
  