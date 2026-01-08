import './UberFlash.css'
import uberFlashIcon from '../../../icons/uber-flash.png'
import Alerta from '../../../icons/atenção.png'

const UBER_FLASH_LINK =
  'https://m.uber.com/looking/' +
  '?pickup[latitude]=-26.289771' +
  '&pickup[longitude]=-48.858218' +
  '&pickup[nickname]=La%20Casa%20Di%20Frango' +
  '&pickup[formatted_address]=Rua%20Santa%20Catarina%2C%20683%20-%20Floresta%20-%20Joinville%20-%20SC'

export default function UberFlashModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="uberflash-overlay" onClick={onClose}>
      <div
        className="uberflash-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="uberflash-close" onClick={onClose}>
          ×
        </button>

        {/* ÍCONE ANIMADO */}
        <div className="uberflash-icon-track">
          <img
            src={uberFlashIcon}
            alt="Uber Flash"
            className="uberflash-modal-icon"
          />
        </div>

        <h2>Entrega com Uber Flash</h2>

        <p className="uberflash-desc">
          Após realizar seu pedido na <strong>La Casa Di Frango</strong>,
          você pode solicitar um <strong>Uber Flash</strong> para retirar
          seu pedido diretamente no local.
        </p>

        <div className="uberflash-steps">
          <div><strong>1.</strong> Faça seu pedido e pagamento conosco</div>
          <div><strong>2.</strong> Abra o aplicativo da Uber</div>
          <div><strong>3.</strong> Escolha <strong>Uber Flash</strong> ou <strong>Flash Moto</strong></div>
          <div><strong>4.</strong> Confirme o local de retirada</div>
          <div><strong>5.</strong> Finalize a entrega no app</div>
        </div>

        <div className="uberflash-warning">
           <img src={Alerta} alt="" />O valor do <strong>Uber Flash</strong> é pago diretamente
          pelo cliente no aplicativo da Uber.
        </div>

        <a
          href={UBER_FLASH_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="uberflash-confirm"
        >
          Abrir Uber
        </a>
      </div>
    </div>
  )
}
