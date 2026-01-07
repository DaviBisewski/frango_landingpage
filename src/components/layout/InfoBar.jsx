import "./InfoBar.css";

import phoneIcon from "../../icons/telefone.png";
import calendarIcon from "../../icons/calendario.png";
import clockIcon from "../../icons/frangoicon.png";
import locationIcon from "../../icons/local.png";

export default function InfoBar() {
  const items = [
    {
      icon: phoneIcon,
      text: "Faça sua encomenda",
    },
    {
      icon: calendarIcon,
      text: "Quarta a domingo e feriados",
    },
    {
      icon: clockIcon,
      text: "Retirada de encomendas das 9 às 13",
    },
    {
      icon: locationIcon,
      text: "R. Santa Catarina, 683",
    },
  ];

  return (
    <div className="info-bar">
      <div className="info-track">
        {[...items, ...items].map((item, index) => (
          <div className="info-item" key={index}>
            <img src={item.icon} alt="" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
