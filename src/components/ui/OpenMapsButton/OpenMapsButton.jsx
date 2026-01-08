import './OpenMapsButton.css'
import  googlemaps  from '../../../icons/googlemaps.png' 

export default function OpenMapsButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="open-maps-button"
    >
      <img src={googlemaps} alt="Google Maps" className="open-maps-icon" />
      <span>Abrir no maps</span>
    </a>
  )
}
