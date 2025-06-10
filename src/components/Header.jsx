import React, { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-emerald-800 text-white relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            {/* <Home className="h-8 w-8" /> */}
            <img src="/images/sai.png" alt="" className="h-8 w-auto sm:h-10 md:h-12 lg:h-14" />
            <span className="text-2xl font-bold">Saai Builders</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
            <Link to="/projects" className="hover:text-orange-400 transition-colors">Projects</Link>
            <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-emerald-800 transition">Get Quote</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition">Contact Us</button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="/about" className="hover:text-orange-400 transition-colors">About Us</a>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Projects</a>
              <a href="/services" className="hover:text-orange-400 transition-colors">Services</a>
              <a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a>

              <div className="flex flex-col space-y-2 pt-4">
                <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-emerald-800 transition">Get Quote</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition">Contact Us</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
