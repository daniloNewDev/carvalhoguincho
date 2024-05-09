import './App.css'

function App() {

  return (
    <>
      <header className='w-full h-12 fixed z-30 bg-gradient-to-r from-black1 to-black2 grid grid-cols-5 gap-6 items-center justify-center pl-6 text-white text-center font-semibold'>
        <a className='p-1 rounded hover:bg-[#DF060290]' href="/">ATENDIMENTO RÁPIDO</a>
        <a className='p-1 rounded hover:bg-[#DF060290]' href="/services">SERVIÇOS</a>
        <a className='p-1 rounded hover:bg-[#DF060290]' href="/about">SOBRE A EMPRESA</a>
        <a className='p-1 rounded hover:bg-[#DF060290]' href="/contacts">CONTATOS</a>
      </header>
      <img
        src="guincho-carro.jpg"
        className='w-[1343px] h-[671px]'
      />
      <img src="logo-tow-truck.png"
        className='absolute top-[5vw] left-[6vh] w-56 z-20'
      />
      <img src="whats.png"
        className='fixed z-30 bottom-4 left-8 w-20'
      />
      <div className='w-full z-10 absolute top-0 h-[671px] flex items-center justify-center flex-col bg-gradient-to-tr from-brown from-10% via-black1 via-20% to-[#030303] to-95%'>
        <h3 className='squada-one-regular text-4xl font-bold text-white mb-16'>Transporte, batida, pane elétrica...</h3>
        <h3 className='squada-one-regular text-6xl font-bold text-white bg-red-600 px-6 py-2 rounded-3xl mb-20'>Ligue agora!</h3>
        <h3 className='squada-one-regular text-6xl font-bold text-white'>Atendimento 24 horas!!!</h3>
      </div>

      <footer className='bg-[#1b1919] w-full h-64 flex items-center justify-around'>
        <img src="logo-tow-truck.png" className='w-52' />
        <div>
          <h3 className='squada-one-regular text-xl text-white text-center'>Contatos</h3>
          <div className='flex items-center'>
            <img src="mail-icon.png" className='w-10' />
            <h4 className='text-white squada-one-regular text-lg ml-4'>carvalhoguinchos08@gmail.com</h4>
          </div>
          <div className='flex items-center justify-start my-2'>
            <img src="fone-icon.png" className='w-10' />
            <h4 className='text-white squada-one-regular text-lg ml-4'>(11) 9 5354-0184</h4>
          </div>
        </div>
        <div>
          <h3 className='squada-one-regular text-xl text-white text-center'>Empresa</h3>
          <h4 className='text-[#cfcfcf] font-sans text-md ml-4 my-4'>Todos direitos reservados a Carvalho Guinchos</h4>
          <h4 className='text-[#cfcfcf] squada-one-regular text-center text-md ml-4 my-4'>CarvalhoGuinchos &trade;</h4>
        </div>
      </footer>
    </>
  )
}

export default App
