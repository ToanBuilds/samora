
import AboutSection from "./components/AboutUs";
import CategorySection from "./components/Category";
import FooterSection from "./components/Footer";
import HeroSection from "./components/Hero";
import ProductsSection from "./components/Products";

export default function Home() {
  return (
    <div className="font-man">
    <HeroSection/>
    <ProductsSection/>
    <CategorySection/>
    <AboutSection/>
    <FooterSection/>
    </div>
  );
}
