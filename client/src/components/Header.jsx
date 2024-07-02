import React, { useState } from 'react'
import { FaSearch, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-xl sm:text-2xl flex flex-wrap'>
            <span className='text-slate-500'>Easy</span>
            <span className='text-slate-700'>Dwelling</span>
          </h1>            
        </Link>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input 
            type="text" 
            placeholder="Search..." 
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600' />
        </form>

        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link to="/" className='text-slate-700 font-bold hover:underline text-lg'>Home</Link></li>
            <li><Link to="/about" className='text-slate-700 font-bold hover:underline text-lg'>About</Link></li>
            <li><Link to="/sign-in" className='text-slate-700 font-bold hover:underline text-lg'>Sign In</Link></li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="text-slate-700 text-2xl" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li className='py-2'><Link to="/" className='text-slate-700 font-bold hover:underline text-lg'>Home</Link></li>
            <li className='py-2'><Link to="/about" className='text-slate-700 font-bold hover:underline text-lg'>About</Link></li>
            <li className='py-2'><Link to="/sign-in" className='text-slate-700 font-bold hover:underline text-lg'>Sign In</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}