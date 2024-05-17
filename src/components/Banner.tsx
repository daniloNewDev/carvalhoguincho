const Banner = () => {
  return (
    <div className="w-[100vw] h-[350px] lg:h-[600px] bg-white-car bg-right-top" >
      <a href="https://api.whatsapp.com/send?phone=5511953540184" target="_blank" rel="noopener noreferrer">
        <img src="whats.png"
          className='fixed z-30 bottom-4 left-8 w-20 pulse-animation'
        />
      </a>
      <div className='w-full absolute top-0 h-[350px] md:h-[600px] flex items-center justify-center flex-col'>
        <img src="logo-tow-truck.png"
          className='absolute top-4 right-8 md:top-[5vw] md:left-[6vh] w-28 md:w-56'
        />
        <div className="w-full absolute top-48 sm:top-42 flex flex-col items-center bg-gradient-to-t from-[#1d1c1c85] from-60% via-[#25252569] via-80% to-[#3d0a0a18] to-96%">
          <h3 className='squada-one-regular text-2xl lg:text-4xl font-bold text-white mb-4'>Transporte, batida, pane elétrica...</h3>
          <a href="tel:+5511953540184" target="_blank" rel="noopener noreferrer">
            <h3 className='squada-one-regular text-2xl lg:text-6xl font-bold text-white bg-red-600 px-6 py-2 rounded-3xl mb-4'>Ligue agora!</h3>
          </a>
          <h3 className='squada-one-regular text-3xl lg:text-6xl font-bold text-white'>Atendimento 24 horas!!!</h3>
        </div>
      </div>
    </div>
  )
}

export default Banner