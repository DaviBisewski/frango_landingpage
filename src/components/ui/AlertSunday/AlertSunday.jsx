import "./AlertSunday.css";
import atencaoicon from "../../../icons/atenção.png";

export default function AlertSunday() {
  return (
    <div className="alert-sunday">
      <img src={atencaoicon} alt="Atenção" className="alert-icon" />

      <p className="alert-text">
        Costela e maionese são vendidas apenas aos domingos
      </p>
    </div>
  );
}
