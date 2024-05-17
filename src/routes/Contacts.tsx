import React from "react";
import ImageCarousel from "../components/ImageCarousel";


const Contacts: React.FC = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center">
        <h3 className='squada-one-regular text-2xl lg:text-4xl font-bold text-black mb-4'>Inscreva-se nas nossas redes sociais!</h3>
        <ImageCarousel />
      </section>
    </div>
  )
}

export default Contacts;