const Footer = () => {
  return (
    <footer className='bg-[#1b1919] w-full py-8 lg:py-0 lg:h-64 flex flex-col gap-12 lg:flex-row items-center justify-around'>
      <img src="logo-tow-truck.png" className='w-24 lg:w-52' />
      <div>
        <h3 className='squada-one-regular text-3xl text-white text-center'>Contatos</h3>
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
        <h3 className='squada-one-regular text-3xl text-white text-center'>Empresa</h3>
        <h4 className='text-[#cfcfcf] font-sans text-md ml-4 my-4'>Todos direitos reservados a Carvalho Guinchos</h4>
        <h4 className='text-[#cfcfcf] squada-one-regular text-center text-md ml-4 my-4'>CarvalhoGuinchos &trade;</h4>
      </div>
    </footer>
  )
}

export default Footer