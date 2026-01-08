import './HorarioSection.css'
import StatusFuncionamento from '../../ui/StatusFuncionamento/StatusFuncionamento'
import SectionHeader from '../../layout/SectionHeader/SectionHeader'
import CountdownFuncionamento from '../../layout/CountdownFuncionamento/CountdownFuncionamento'

import clockIcon from '../../../icons/relogio.png'
import calendarIcon from '../../../icons/calendar.png'
import Mascote from '../../../images/galinha.png'

export default function HorarioSection() {
  return (
    <section className="horario-section">
      <div className="horario-container">
        <div className="horario-header">
          <SectionHeader
            icon={clockIcon}
            title="Nosso Horário de Funcionamento"
          />
          <StatusFuncionamento />
        </div>

        <div className="horario-card">
          <CountdownFuncionamento />

          <div className="horario-main">
            {/* esquerda */}
            <div className="horario-col">
              <img src={calendarIcon} alt="" aria-hidden />
              <h3>Quarta a domingo e feriados</h3>
            </div>

            {/* mascote */}
            <img
              src={Mascote}
              alt=""
              aria-hidden
              className="horario-mascote"
            />

            {/* direita */}
            <div className="horario-col">
              <img src={clockIcon} alt="" aria-hidden />
              <h3>Das 10:00 às 13:30</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
