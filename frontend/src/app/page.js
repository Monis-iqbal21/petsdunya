import Navbar from "./components/Navbar";
import TopBar from "./components/Topbar";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Threecards from "./components/Threecards";
import Newarrivals from "./components/Newarrivals";
import Suppliescard from "./components/Suppliescard";
import Feature from "./components/Feature";
import Rotatingcarousel from "./components/Rotatingcarousel";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Carousel />
      <Threecards />
      <Category />
      <Newarrivals />
      <Suppliescard />
      <Feature />
      <Rotatingcarousel />
      <Reviews />
      <Footer />
    </>
  );
}
