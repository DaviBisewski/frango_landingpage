import './HorarioSection.css'
import StatusFuncionamento from '../../ui/StatusFuncionamento/StatusFuncionamento'
import SectionHeader from '../../layout/SectionHeader/SectionHeader'
import CountdownFuncionamento from '../../layout/CountdownFuncionamento/CountdownFuncionamento'

import clockIcon from '../../../icons/relogio.png'
import calendarIcon from '../../../icons/calendar.png'

export default function HorarioSection() {
  return (
    <section className="horario-section">
      <div className="horario-container">
        <div className="horario-header">
          <SectionHeader
            icon={clockIcon}
            title="Horário de funcionamento"
          />
          <StatusFuncionamento />
        </div>

        <div className="horario-card">
          <CountdownFuncionamento />

          <div className="horario-row">
            <img src={calendarIcon} alt="" aria-hidden />
            <h3>Quarta a domingo e feriados</h3>
          </div>

          <div className="horario-row">
            <img src={clockIcon} alt="" aria-hidden />
            <h3 className="horario-hora">Das 10:00 às 13:30</h3>
          </div>

          <span className="horario-observacao">
            Retirada de encomendas até 12:30
          </span>
        </div>
      </div>
    </section>
  )
}
