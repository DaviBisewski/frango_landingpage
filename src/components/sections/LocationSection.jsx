import './LocationSection.css'
import OpenMapsButton from '../ui/OpenMapsButton'
import PhoneIcon from '../../icons/telefoneamarelo.png'
import StoreIcon from '../../icons/casa.png'
import SectionHeader from '../layout/SectionHeader'
import LocalIcon from '../../icons/localamarelo.png'

// botão de whatsapp que você já tem
import RedzapButton from '../ui/RedzapButton'

export default function LocationSection() {
  return (
    <div className='container'>
    <section className="location-section">
        <div className='header'>
        <SectionHeader title="Nossa Localização" icon={LocalIcon}/>
        <OpenMapsButton
          href="https://www.google.com/maps/dir/?api=1&destination=Rua+Santa+Catarina+683+Joinville+SC"
        />
    </div>
      <div className="location-content">
        {/* MAPA */}
        <div className="map-container">
          <iframe
            title="Mapa La Casa Di Frango"
            src="https://www.google.com/maps?q=Rua%20Santa%20Catarina%20683%20Joinville%20SC&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* INFO */}
        <div className="location-info">
          <p className="address">
            Rua Santa Catarina, 683<br />
            Floresta – <span>Joinville – SC</span>
          </p>

          <div className="info-item">
            <img src={PhoneIcon} alt="" />
            <div>
              <strong>Telefone</strong>
              <span>(47) 93426-1024</span>
            </div>
          </div>

          <div className="info-item">
            <img src={StoreIcon} alt="" />
            <strong>Retire no local</strong>
          </div>

          <RedzapButton text={"Faça sua encomenda"}/>
        </div>
      </div>
    </section>
    </div>
  )
}
