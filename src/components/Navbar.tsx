export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>
  
        {/* Links */}
        <ul className="flex space-x-8 text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
  
        {/* Button */}
        <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Sign In
        </button>
      </nav>
    )
  }
  