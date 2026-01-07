import { useEffect, useState } from 'react'
import './CountdownFuncionamento.css'

// feriados nacionais fixos
const feriadosFixos = [
  '01-01',
  '04-21',
  '05-01',
  '09-07',
  '10-12',
  '11-02',
  '11-15',
  '12-25',
]

function isFeriado(date) {
  const d = String(date.getDate()).padStart(2, '0')
  const m = String(date.getMonth() + 1).padStart(2, '0')
  return feriadosFixos.includes(`${m}-${d}`)
}

function estaNoHorario(date) {
  const minutos = date.getHours() * 60 + date.getMinutes()
  return minutos >= 600 && minutos <= 810 // 10:00 → 13:30
}

function proximaAbertura(agora) {
  const tentativa = new Date(agora)

  // tenta hoje primeiro
  tentativa.setHours(10, 0, 0, 0)

  if (tentativa > agora) {
    const dia = tentativa.getDay()
    const feriado = isFeriado(tentativa)

    const abertoSemana = dia >= 3 || dia === 0
    const abertoFeriado = feriado && (dia === 1 || dia === 2)

    if (abertoSemana || abertoFeriado) {
      return tentativa
    }
  }

  // senão, procura o próximo dia válido
  while (true) {
    tentativa.setDate(tentativa.getDate() + 1)
    tentativa.setHours(10, 0, 0, 0)

    const dia = tentativa.getDay()
    const feriado = isFeriado(tentativa)

    const abertoSemana = dia >= 3 || dia === 0
    const abertoFeriado = feriado && (dia === 1 || dia === 2)

    if (abertoSemana || abertoFeriado) {
      return tentativa
    }
  }
}

export default function CountdownFuncionamento() {
  const [agora, setAgora] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date())
    }, 60000) // atualiza a cada minuto

    return () => clearInterval(timer)
  }, [])

  const dia = agora.getDay()
  const feriado = isFeriado(agora)

  const abertoSemana = dia >= 3 || dia === 0
  const abertoFeriado = feriado && (dia === 1 || dia === 2)

  const aberto = estaNoHorario(agora) && (abertoSemana || abertoFeriado)

  if (aberto) {
    return (
      <div className="countdown aberto">
        <span className="countdown-title">Estamos abertos agora!</span>
        <span className="countdown-sub">
          Fechamos às <strong>13h30</strong>
        </span>
      </div>
    )
  }

  const abertura = proximaAbertura(agora)
  const diff = abertura - agora

  const horas = Math.floor(diff / (1000 * 60 * 60))
  const minutos = Math.floor((diff / (1000 * 60)) % 60)

  return (
    <div className="countdown fechado">
      <span className="countdown-title">Abrimos em</span>

      <span className="countdown-time">
        {horas}h {minutos}min
      </span>
    </div>
  )
}
