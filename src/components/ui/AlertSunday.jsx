import './AlertSunday.css'
import atencaoicon from '../../icons/atenção.png'

export default function AlertSunday() {
  return (
    <div className="container">    
    <div className="alert-sunday">
      <div className="alert-icon">
        <img src={atencaoicon} alt="Atenção"  className="alert-icon-image"/>
      </div>

      <p className="alert-text">
        Costela e maionese são vendidas apenas aos domingos
      </p>
    </div>
    </div>
  )
}
