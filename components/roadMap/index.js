import Cat from "../../assets/svg/cat"
import Confetti from "../../assets/svg/confetti"
import Road1 from "../../assets/svg/road_1"
import Road2 from "../../assets/svg/road_2"
function RoadMap() {
  return (
    <section id="howToWork">
      <div className="roadMapSection">
        <div className="startingPoint">
          <div className="point"></div>
          <span className="big">Randevu Al</span>
        </div>
        <div className="container">
          <div className="left">
            <div className="row">
              <span className="step">Tanışalım</span>
            </div>
            <div className="row">
              <span className="step">Güvenliği Sağlayalım</span>
            </div>
          </div>
          <div className="center">
            <Road1 />
          </div>
          <div className="right">
            <div className="row">
              <span className="step">Rutinleri Öğrenelim</span>
            </div>
          </div>
        </div>
      </div>
      <div className="roadMapSection">
        <div className="midPoint">
          <div className="point"></div>
          <span className="mid">Tatil Başlasın</span>
        </div>
        <div className="container">
          <div className="midLeft">
            <div className="row">
              <span className="step">Dostumuzu Besleyelim</span>
            </div>
            <div className="row">
              <span className="step">Temizleyelim</span>
            </div>
            <div className="row">
              <span className="step">Yumuşacık Olana Kadar Tarayalım</span>
            </div>
          </div>
          <div className="midCenter">
            <div className="lPoint"></div>
            <div className="lPoint"></div>
            <div className="lPoint"></div>
            <Cat />
            <div className="lPoint"></div>
            <div className="lPoint"></div>
            <div className="lPoint"></div>
            <div className="lPoint"></div>
            <Confetti />
            <div className="lPoint"></div>
            <div className="lPoint"></div>
          </div>
          <div className="midRight">
            <div className="row">
              <span className="step">Beraber Eğlenelim</span>
            </div>
            <div className="row">
              <span className="step">Sağlık Sorunları İle İlgilenelim</span>
            </div>
          </div>
        </div>
      </div>
      <div className="roadMapSection">
        <div className="midPoint">
          <div className="point"></div>
          <span className="mid">Özlem Son Bulsun</span>
        </div>
        <div className="container">
          <div className="bottomLeft">
            <div className="row">
              <span className="step">
                Yeni dostluklar kurmamıza yardımcı olabilirsin
              </span>
            </div>
          </div>
          <div className="bottomCenter">
            <Road2 />
          </div>
          <div className="bottomRight">
            <div className="row right">
              <span className="step">Deneyimlerini Paylaşabilirsin</span>
            </div>
          </div>
        </div>
        <div className="midPoint">
          <div className="point"></div>
          <span className="mid">Tekrar Buluşalım</span>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
