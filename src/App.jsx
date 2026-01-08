import HeroSection from './components/sections/HeroSection/HeroSection';  
import WhatsAppButton from './components/ui/WhatsappButton/WhatsappButton';
import InfoBar from './components/layout/InfoBar/InfoBar';
import ProductSection from './components/sections/ProductSection/ProductSection';
import HorarioSection from './components/sections/HorarioSection/HorarioSection';
import EncomendarSection from './components/sections/EncomendarSection/EncomendarSection';
import LocationSection from './components/sections/LocationSection/LocationSection';
import FooterSection from './components/sections/FooterSection/Footer';

function App() {
  return (
    <>
    <main >
      <HeroSection/>
      <InfoBar/>
      <ProductSection/>
      <HorarioSection/>
      <LocationSection/>
      <EncomendarSection/>
      <FooterSection/>
      <WhatsAppButton/>
    </main>
    </>
  );
}


export default App
