import { useRef, useState, useEffect } from 'react'
import './UberFlashSlider.css'
import uberFlashIcon from '../../icons/uber-flash.png' // logo Uber Flash

const WHATSAPP_LINK =
  'https://wa.me/5547984828184?text=Ol%C3%A1!%20Quero%20solicitar%20uma%20entrega%20via%20Uber%20Flash.%0A%0AEndere%C3%A7o%20de%20retirada:%0ALa%20Casa%20Di%20Frango%0ARua%20Santa%20Catarina%2C%20683%20%E2%80%93%20Floresta%20%E2%80%93%20Joinville%20%E2%80%93%20SC%0A%0AAbra%20o%20Uber%20por%20aqui%20%F0%9F%91%87%0Ahttps://m.uber.com/ul/?action=setPickup&pickup%5Bformatted_address%5D=Rua%20Santa%20Catarina%2C%20683%20-%20Floresta%20Joinville%20SC&pickup%5Bnickname%5D=La%20Casa%20Di%20Frango&dropoff=my_location'

export default function UberFlashSlider() {
  const sliderRef = useRef(null)
  const [dragX, setDragX] = useState(0)
  const [ativo, setAtivo] = useState(false)

  useEffect(() => {
    function onMove(e) {
      if (!ativo) return

      const slider = sliderRef.current
      const rect = slider.getBoundingClientRect()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX

      const x = clientX - rect.left
      const max = rect.width - 64

      setDragX(Math.max(0, Math.min(x - 32, max)))
    }

    function onEnd() {
      if (!ativo) return
      setAtivo(false)

      const max = sliderRef.current.offsetWidth - 64

      if (dragX >= max * 0.9) {
        window.open(WHATSAPP_LINK, '_blank')
      } else {
        setDragX(0)
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onEnd)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onEnd)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onEnd)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }
  }, [ativo, dragX])

  return (
    <div className="uberflash-slider" ref={sliderRef}>
      <span className="uberflash-label">
        Arraste para pedir Uber Flash
      </span>

      <div
        className="uberflash-thumb"
        style={{ transform: `translateX(${dragX}px)` }}
        onMouseDown={() => setAtivo(true)}
        onTouchStart={() => setAtivo(true)}
      >
        <img src={uberFlashIcon} alt="Uber Flash" />
      </div>
    </div>
  )
}
