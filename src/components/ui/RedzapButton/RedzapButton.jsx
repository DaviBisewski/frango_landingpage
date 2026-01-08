import "./RedzapButton.css";
import iconzap from "../../../icons/whatsapp.png";

export default function RedzapButton({ text }) {
  const phoneNumber = "5547999942292";
  const message = "Olá! Gostaria de fazer um pedido.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="redzap-button"
      aria-label="Falar no WhatsApp"
    >
      <span>{text}</span>
      <img src={iconzap} alt="" aria-hidden />
    </a>
  );
}
