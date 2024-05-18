const Footer = () => {
  return (
    <footer className='bg-[rgb(27,25,25)] w-full py-8 lg:py-0 lg:h-64 flex flex-col gap-12 lg:flex-row items-center justify-around'>
      <img src="logoinsta.png" className='w-20 lg:w-52' />
      <div>
        <h3 className='squada-one-regular text-3xl text-white text-center'>Contatos</h3>
        <a href="https://www.instagram.com/guinchocarvalho?igsh=MTV4eHo4NDZwZjVrdA==" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src="insta-icon.png" className='w-10' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>@guinchocarvalho</h4>
          </div>
        </a>
        <a href="tel:+5511953540184" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src="fone-icon.png" className='w-10' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>(11) 9 5354-0184</h4>
          </div>
        </a>
        <a href="mailto:carvalhoguincho08@gmail.com">
          <div className='flex items-center'>
            <img src="mail-icon.png" className='w-10' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>carvalhoguinchos08@gmail.com</h4>
          </div>
        </a>
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