import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full h-16 absolute z-30 text-white text-center font-semibold bg-gradient-to-b from-black1 to-[#03030300] grid grid-cols-5 gap-6 items-center justify-center'>
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="h-8 w-12 bg-red-600 rounded-md fill-current absolute top-[40%]" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          </svg>
        </button>
      </div>

      <nav className={`w-[60vw] col-span-5 sm:col-span-auto flex flex-col bg-red-600 md:bg-transparent rounded-md md:flex-row items-start justify-start lg:gap-8  mt-8 ml-8 pl-4 py-2 lg:ml-10 ${isOpen ? 'block' : 'hidden'}`}>
        <Link className='w-[95%] p-1 rounded hover:bg-[#030303] hover:text-[#d4d4d4] text-start' to="/">ATENDIMENTO RÁPIDO</Link>
        <Link className='w-[95%] p-1 rounded hover:bg-[#030303] hover:text-[#d4d4d4] text-start' to="/contacts">CONTATOS</Link>
      </nav>
      <nav className={`md:w-full col-span-5 sm:col-span-auto hidden sm:flex md:bg-transparent rounded-md md:flex-row items-start justify-start md:ml-[4%]`}>
        <Link className='w-[20%] p-1 rounded hover:bg-[#030303] hover:text-[#d4d4d4] text-center' to="/">ATENDIMENTO RÁPIDO</Link>
        <Link className='w-[20%] p-1 rounded hover:bg-[#030303] hover:text-[#d4d4d4] text-center' to="/contacts">CONTATOS</Link>
      </nav>
    </header>
  )
}

export default Header
