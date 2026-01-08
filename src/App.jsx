import HeroSection from './components/sections/HeroSection/HeroSection';  
import WhatsAppButton from './components/ui/WhatsappButton/WhatsappButton';
import InfoBar from './components/layout/InfoBar/InfoBar';
import ProductSection from './components/sections/ProductSection/ProductSection';
import HorarioSection from './components/sections/HorarioSection/HorarioSection';
import LocationSection from './components/sections/LocationSection/LocationSection';

function App() {
  return (
    <>
    <main >
      <HeroSection/>
      <InfoBar/>
      <ProductSection/>
      <HorarioSection/>
      <LocationSection/>
      <WhatsAppButton/>
    </main>
    </>
  );
}


export default App
