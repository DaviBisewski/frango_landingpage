import "./HeroSection.css";
import logo from "../../images/logo.png";
import frango from "../../images/frango.png";

import RedzapButton from "../ui/RedzapButton";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <img src={logo} alt="La Casa Di Frango" />
            <span>
              <strong className="trinta">30+</strong> anos de tradição
            </span>
          </div>

          <h1>
            <strong>Frango assado na hora, </strong>
            com e sem <br />
            recheio
          </h1>

          <RedzapButton text="Encomendar agora no WhatsApp" />
        </div>

        <div className="frango-wrapper">
          <div className="frango-shadow"></div>
          <img src={frango} alt="Frango assado" className="frango-img" />
        </div>
      </div>
    </section>
  );
}
