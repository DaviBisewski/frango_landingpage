import './HorarioSection.css'
import StatusFuncionamento from '../../ui/StatusFuncionamento/StatusFuncionamento'
import SectionHeader from '../../layout/SectionHeader/SectionHeader'
import CountdownFuncionamento from '../../layout/CountdownFuncionamento/CountdownFuncionamento'

// IMPORTA SEU ÍCONE DE RELÓGIO
import clockIcon from '../../../icons/relogio.png'

export default function HorarioSection() {
  return (
      <div className='container'>
    <section className="horario-section">
        <div className="horario-header">
    <SectionHeader icon={clockIcon} title="Horário de funcionamento" />
    <StatusFuncionamento />
    </div>
      <div className="horario-card">
        <h3>Quarta a domingo e feriados</h3>
        <p className="horario-hora">Das 10:00 às 13:30</p>
        <span className="horario-observacao">
          Retirada de encomendas até 12:30
        </span>
           <CountdownFuncionamento />
      </div>
    </section>
    </div>
  )
}
