import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contacts = () => {
  return (
    <div>
      <Header />
      <Banner />
      <section className="w-full flex flex-col items-center">
        <h3 className='squada-one-regular text-2xl lg:text-4xl font-bold text-black mb-4'>Inscreva-se nas nossas redes sociais!</h3>
      </section>
      <Footer />
    </div>
  )
}

export default Contacts;