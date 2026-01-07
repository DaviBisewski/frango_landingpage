import HeroSection from './components/sections/HeroSection';  
import WhatsAppButton from './components/ui/WhatsappButton';
import InfoBar from './components/layout/InfoBar';
import ProductSection from './components/sections/ProductSection';
import HorarioSection from './components/sections/HorarioSection';
import LocationSection from './components/sections/LocationSection';

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
