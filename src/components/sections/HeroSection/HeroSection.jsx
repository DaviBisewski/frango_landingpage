import "./HeroSection.css";
import logo from "../../../images/logo.png";
import frango from "../../../images/frango.png";
import RedzapButton from "../../ui/RedzapButton/RedzapButton";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <img src={logo} alt="La Casa Di Frango" />
            <div className="hero-tradicao">
             <span className="hero-badge-number">30+</span>
            <span className="hero-badge-text">anos de tradição</span>
            </div>
          </div>

          <h1>
            <strong>Frango assado na hora, </strong>
            
            com e sem recheio
          </h1>

          <RedzapButton text="Encomendar agora no WhatsApp" />
        </div>

        <div className="frango-wrapper">
          <span className="frango-shadow" />
          <img src={frango} alt="Frango assado" className="frango-img" />
        </div>
      </div>
    </section>
  );
}
