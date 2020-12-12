import Title from "../sectionTitle"
import Package from "./package"

function Prices() {
  return (
    <section id="prices">
      <div className="header">
        <Title value="Paketlerimiz" type="white" />
      </div>
      <div class="boxWrapper">
        <Package
          position="normal"
          name="Alex"
          price="59"
          info="Hızlı pakette dostumuzun temel ihtiyaçlarını karşılıyoruz. Ziyaretlerimiz minimum 15dk sürüyor."
        />
        <Package
          position="up"
          name="Kaju"
          price="99"
          info="Hızlı pakette dostumuzun temel ihtiyaçlarını karşılıyoruz. Ziyaretlerimiz minimum 15dk sürüyor."
        />
        <Package
          position="normal"
          name="Duman"
          price="149"
          info="Hızlı pakette dostumuzun temel ihtiyaçlarını karşılıyoruz. Ziyaretlerimiz minimum 15dk sürüyor."
        />
      </div>
    </section>
  )
}

export default Prices
