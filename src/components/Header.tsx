import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full h-12 absolute md:fixed z-30 text-white text-center font-semibold bg-gradient-to-r from-black1 to-black2 grid grid-cols-5 gap-6 items-center justify-center'>
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current absolute top-[12px] left-[18px]" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          </svg>
        </button>
      </div>

      <nav className={`w-[50vw] md:w-full col-span-5 sm:col-span-auto flex flex-col bg-black md:bg-transparent rounded-md md:flex-row items-center justify-start lg:gap-8 lg:ml-10 ${isOpen ? 'block' : 'hidden'}`}>
        <a className='p-1 rounded hover:bg-[#DF060290]' href="/">ATENDIMENTO RÁPIDO</a>
        {/* <a className='p-1 rounded hover:bg-[#DF060290]' href="/services">SERVIÇOS</a> */}
        {/* <a className='p-1 rounded hover:bg-[#DF060290]' href="/about">SOBRE A EMPRESA</a> */}
        <a className='p-1 rounded hover:bg-[#DF060290]' href="/contacts">CONTATOS</a>
      </nav>
    </header>
  )
}

export default Header
