const InfoSection = () => {
  return (
    <div className="bg-white w-full flex flex-col md:flex-row items-center justify-around">
      <div className="w-80 h-96 px-8 lg:w-60 lg:h-60 bg-white rounded-xl mb-8 pt-4 shadow-md shadow-black2 flex flex-col items-center">
        <img src="gps-icon.png" className="w-[97px]" />
        <p className="squada-one-regular text-xl lg:text-4xl text-gray-800 text-center">Grande São Paulo e Região!</p>
        <p className="block lg:hidden pt-12 text-gray-600 font-medium text-center">
          Serviço ágil, sem muita burocracia, levando ao cliente a experiência do conforto e segurança no momento em que você mais precisa!
        </p>
      </div>
      <div className="w-80 h-96 lg:w-60 lg:h-60 px-8 bg-red-600 rounded-xl mb-8 pt-5 shadow-md shadow-black2 flex flex-col items-center">
        <img src="atendimentoicon.png" className="w-[72px]" />
        <p className="squada-one-regular text-2xl lg:text-4xl mt-4 text-white text-center">Atendimento simples e ágil</p>
        <p className="block lg:hidden pt-12 text-white font-medium text-center">
          Atendemos em toda a grande São Paulo, de maneira inteligente focando na prioridade do cliente afim de exercer um serviço bem executado, com ecelência!
        </p>
      </div>
      <div className="w-80 h-96 lg:w-60 lg:h-60 px-8 bg-white rounded-xl mb-8 pt-5 shadow-md shadow-black2 flex flex-col items-center">
        <img src="fone-icon.png" className="w-[72px]" />
        <p className="squada-one-regular text-xl lg:text-4xl mt-4 text-gray-800">Atendimento 24 horas!</p>
        <p className="block lg:hidden pt-12 text-gray-800 font-medium text-center">
          Fazemos da comunicação com o cliente a parte fundamental na prestação do serviço, atendendo as necessidades do cliente e buscando de maneira clara atender as expectativas dos clientes com resultados!
        </p>
      </div>
    </div>
  )
}

export default InfoSection