import React, { useEffect, useState } from 'react';
import data from '../data/data.json';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav className={`flex justify-between items-center fixed top-0 left-0 w-full z-50 px-10 py-3 transition-all duration-300 ${scrolled ? 'bg-amber-50 shadow-md' : 'bg-transparent'}`}>
        <img src={data.navbar.logo} width="25%" alt="logo" />

        <button
          className='md:hidden block text-rose-700 focus:outline-none button-nav'
          onClick={toggleMenu}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth="2" viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'/>
          </svg>
        </button>

        <ul className={`md:flex gap-6 text-black text-2xl font-medium ${menuOpen ? 'block absolute top-[100%] left-0 w-full bg-amber-50 p-5 md:static' : 'hidden'} md:block`}>
          {data.navbar.menu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default Navbar;
