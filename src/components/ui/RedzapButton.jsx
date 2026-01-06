import "./RedzapButton.css";
import iconzap from "../../icons/whatsapp.png";

export default function RedzapButton() {
  const phoneNumber = "5547984828184";
  const message = "Olá! Gostaria de fazer um pedido.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return(
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      title="Falar no WhatsApp"
      className="redzap-fab"
    >
        <span className="redzap-icon_text">
            Encomendar agora no Whatsapp
        </span>

        <img src={iconzap} alt="Ícone do WhatsApp" className="redzap-icon" aria-hidden="true" />
    </a>
  );
}