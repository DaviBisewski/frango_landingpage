import "./EncomendarSection.css";
import WhatsButton from "../../ui/RedzapButton/RedzapButton";

export default function EncomendarSection() {
  return (
    <section className="encomendar">
      <div className="container encomendar-container">
        <h2>Pronto para garantir seu frango de hoje?</h2>

        <p>
          Frango assado na hora, tradição em Joinville há mais de 30 anos.
        </p>

        <WhatsButton text="Faça sua encomenda pelo WhatsApp" />
      </div>
    </section>
  );
}
