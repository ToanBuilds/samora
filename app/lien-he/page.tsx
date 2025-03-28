import ContactPage from "../components/Contact";
import ContactBanner from "../components/ContactBanner";
import FooterSection from "../components/Footer";
import HeaderSection from "../components/Header";
import Nav from "../components/Nav";
import ShopSection from "../components/Shop";

export default function Home() {
  return (
    <div className="font-man">
       <HeaderSection/>
            <div className="relative mb-1 px-3">
                <Nav />
            </div>
      <ContactPage/>
      <ContactBanner/>
      <FooterSection/>
    </div>
  );
}
