import "./SectionHeader.css";

export default function SectionHeader({ icon, title, children }) {
  return (
    <div className="section-header">
      <div className="section-title">
        <img src={icon} alt="" aria-hidden />
        <h2>{title}</h2>
      </div>

      {children}
    </div>
  );
}
