import { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import logo from '../assets/logo.png';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const location = window.location;
  const [isOpen, setIsOpen] = useState(false);
  const backHome = location.pathname === '/' ? '#' : '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent text-white'
      }`}>
      <div className="max-w-[90vw] mx-auto h-20 flex items-center justify-between">
        <a href={backHome}>
          <div className="flex items-start flex-col">
            {/* <img src={logo} alt="logo" className="h-8 w-8 text-blue-600" /> */}
            <h1 className="text-4xl font-bold">SNBAT</h1>
            <p className="text-sm">Société Nouvelle de Bâtiment</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            <a href='/about' className=" hover:text-blue-600">Expertise</a>
            <a href='/projects' className=" hover:text-blue-600">Projets</a>
            <a href='/services' className=" hover:text-blue-600">Services</a>
            <a href='#contact' className=" hover:text-blue-600">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Contactez-nous
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded text-center hover:bg-blue-700 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}