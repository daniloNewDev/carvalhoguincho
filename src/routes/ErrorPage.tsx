import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="h-64 flex flex-col items-center justify-center">
        <h3 className="font-bold text-2xl text-[#242323]">Erro 404!</h3>
        <p>Página não encontrada.</p>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage;