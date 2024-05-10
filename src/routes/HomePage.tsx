import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";

const HomePage = () => {
  return (
    <div className="w-[100vw] h-[100%] overflow-hidden">
      <Header />
      <Banner />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default HomePage;