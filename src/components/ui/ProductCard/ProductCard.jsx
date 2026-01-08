import "./ProductCard.css";

export default function ProductCard({ title, subtitle, image, price }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>

      <img src={image} alt={title} />

      <strong>{price}</strong>
    </div>
  );
}
