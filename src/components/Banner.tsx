const Banner = () => {
  return (
    <div className="h-[50vh] md:h-[100vh]">
      <img
        src="guincho-carro.png"
        className='w-[100%]'
      />
      <a href="https://api.whatsapp.com/send?phone=5511953540184" target="_blank" rel="noopener noreferrer">
        <img src="whats.png"
          className='fixed z-30 bottom-4 left-8 w-20'
        />
      </a>
      <div className='w-full absolute top-0 h-[671px] flex items-center justify-center flex-col'>
        <img src="logo-tow-truck.png"
          className='absolute top-14 left-8 md:top-[5vw] md:left-[6vh] w-28 md:w-56'
        />
        <div className="z-10 w-full h-full flex flex-col mt-[20vw] lg:mt-96 items-center">
          <h3 className='squada-one-regular lg:text-4xl font-bold text-white mb-4'>Transporte, batida, pane elétrica...</h3>
          <a href="https://api.whatsapp.com/send?phone=5511953540184" target="_blank" rel="noopener noreferrer">
            <h3 className='squada-one-regular text-lg lg:text-6xl font-bold text-white bg-red-600 px-6 py-2 rounded-3xl mb-4'>Ligue agora!</h3>
          </a>
          <h3 className='squada-one-regular lg:text-6xl font-bold text-white'>Atendimento 24 horas!!!</h3>
        </div>
      </div>
    </div>
  )
}

export default Banner