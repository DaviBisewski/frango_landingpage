import "./ProductSection.css";

import SectionHeader from "../layout/SectionHeader";
import ProductCard from "../ui/ProductCard";
import RedzapButton from "../ui/RedzapButton";
import AlertSunday from "../ui/AlertSunday";

import iconFrango from "../../icons/frangoamarelo.png";
import frangoImg from "../../images/frango.png";
import bebidasImg from "../../images/bebidas.png";
import adicionaisImg from "../../images/adicionais.png";

export default function ProductsSection() {
  return (
    <section className="products-section">
        <div className="container">
      <SectionHeader icon={iconFrango} title="Nossos produtos">
        <RedzapButton text="Encomende seus favoritos" />
      </SectionHeader>

      <div className="products-grid">
        <ProductCard
          title="Frangos"
          subtitle="Com ou sem recheio"
          image={frangoImg}
          price="R$58 a R$68"
        />

        <ProductCard
          title="Bebidas"
          subtitle="Refrigerantes e cervejas"
          image={bebidasImg}
          price="R$6 a R$16"
        />

        <ProductCard
          title="Adicionais"
          subtitle="Conservas e maionese"
          image={adicionaisImg}
          price="R$10 a R$17"
        />
      </div>
      </div>
      <AlertSunday />
    </section>
  );
}
