import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import Feature from "./components/Feature";
import FeatureBreakFastSection from "./components/FeatureBreakFastSection";
import FeatureFruitSeciton from "./components/FeatureFruitSeciton";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import { CartContextProvider } from "./context/cartContext";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartContextProvider>
      <main>
        <Navbar setShowCart={setShowCart} />
        <MobNavbar setShowCart={setShowCart} />
        <Hero />
        <Category />
        <FeatureFruitSeciton />
        <FeatureBreakFastSection />
        <Banner />
        <BlogSection />
        <NewsLetter />
        <Feature />
        <Footer />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </main>
    </CartContextProvider>
  );
}

export default App;
