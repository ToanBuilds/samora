import AboutSection from "../components/AboutUs";
import ContactPage from "../components/Contact";
import FooterSection from "../components/Footer";
import HeaderSection from "../components/Header";
import IntroSection from "../components/Introduction";
import Nav from "../components/Nav";
import ShopSection from "../components/Shop";

export default function Home() {
  return (
    <div className="font-man">
      <HeaderSection/>
      <div className="relative mb-1 px-3">
        <Nav />
      </div>
      <AboutSection />
      <IntroSection/>
      <FooterSection />
    </div>
  );
}
