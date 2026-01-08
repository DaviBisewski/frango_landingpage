import { useState } from 'react'
import './UberFlash.css'
import uberFlashIcon from '../../../icons/uber-flash.png'
import UberFlashModal from './UberFlashModal'

export default function UberFlashButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="uberflash-btn"
        onClick={() => setOpen(true)}
        type="button"
      >
        <img
          src={uberFlashIcon}
          alt="Uber Flash"
          className="uberflash-btn-icon"
        />
        <span className="uberflash-btn-text">
          Entrega via Uber Flash
        </span>
      </button>

      <UberFlashModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
