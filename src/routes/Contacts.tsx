import React from "react";
import ImageCarousel from "../components/ImageCarousel";


const Contacts: React.FC = () => {
  return (
    <div>
      <section className="w-full bg-[#7e7e7e] p-4 flex flex-col items-center">
        <h3 className='squada-one-regular text-2xl lg:text-4xl font-bold text-white my-4'>Inscreva-se nas nossas redes sociais!</h3>
        <a href="https://www.instagram.com/guinchocarvalho?igsh=MTV4eHo4NDZwZjVrdA==">
          <img src="instagram.png" className="w-32" />
        </a>
        <h3 className='squada-one-regular text-2xl lg:text-4xl font-bold text-white my-4'>Acompanhe o nosso trabalho!</h3>
        <ImageCarousel />
      </section >
    </div >
  )
}

export default Contacts;