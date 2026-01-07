import './StatusFuncionamento.css'
import portaverde from '../../icons/portaverde.png'
import portavermeio from '../../icons/portavermeio.png'

// Lista básica de feriados nacionais fixos (pode expandir depois)
const feriadosFixos = [
  '01-01', // Ano Novo
  '04-21', // Tiradentes
  '05-01', // Dia do Trabalhador
  '09-07', // Independência
  '10-12', // Nossa Senhora Aparecida
  '11-02', // Finados
  '11-15', // Proclamação da República
  '12-25', // Natal
]

function isFeriado(date) {
  const dia = String(date.getDate()).padStart(2, '0')
  const mes = String(date.getMonth() + 1).padStart(2, '0')
  return feriadosFixos.includes(`${mes}-${dia}`)
}

function estaNoHorario(date) {
  const horas = date.getHours()
  const minutos = date.getMinutes()
  const totalMinutos = horas * 60 + minutos

  const inicio = 10 * 60        // 10:00
  const fim = 13 * 60 + 30      // 13:30

  return totalMinutos >= inicio && totalMinutos <= fim
}

export default function StatusFuncionamento() {
  const agora = new Date()
  const diaSemana = agora.getDay() // 0 = domingo, 1 = segunda...

  const horarioValido = estaNoHorario(agora)
  const feriado = isFeriado(agora)

  const abertoPorSemana = diaSemana >= 3 || diaSemana === 0
  const abertoPorFeriado = feriado && (diaSemana === 1 || diaSemana === 2)

  const estaAberto = horarioValido && (abertoPorSemana || abertoPorFeriado)

  return (
    <div className={`status ${estaAberto ? 'aberto' : 'fechado'}`}>
      <div className="status-icon">
        {estaAberto ? <img src={portaverde} alt="Porta verde" /> : <img src={portavermeio} alt="Porta vermelha" />}
      </div>

      <span className="status-text">
        {estaAberto ? 'Aberto' : 'Fechado'}
      </span>
    </div>
  )
}
