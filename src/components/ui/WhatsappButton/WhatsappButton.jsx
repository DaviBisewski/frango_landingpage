import zapVerde from "../../../images/zapverde.png";
import "./WhatsappButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "5547984828184";

  const message =
    "Olá! Gostaria de fazer um pedido.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato pelo WhatsApp"
        title="Falar no WhatsApp"
        className="whatsapp-fab"
      >
        <img src={zapVerde} alt="WhatsApp" />
      </a>


    </>
  );
}
