function RoadMap() {
  return (
    <section id="howToWork">
      <div className="roadMapContainer">
        <div className="point">
          <div className="wrapper bg-light-green">
            <p className="tag">Randevu Al</p>
          </div>
        </div>
        <div className="row left p-t-50 ">
          <div className="box">
            <div className="content">
              <div className="info">
                <p className="tag">Tanışalım</p>
              </div>
              <div className="imgWrapper-r bg-red">
                <img className="emj-handeshake" src="/handshake.png" alt="" />
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="row right">
          <div className="box">
            <div className="line"></div>
            <div className="content">
              <div className="imgWrapper-l bg-red">
                <img className="emj-cam" src="/cam.png" alt="" />
              </div>
              <div className="info">
                <p className="tag">Güvenliği Sağlayalım</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row left p-b-50">
          <div className="box">
            <div className="content">
              <div className="info">
                <p className="tag">Rutinleri Öğrenelim</p>
              </div>
              <div className="imgWrapper-r bg-red">
                <img className="emj-square" src="/learn.png" alt="" />
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="point">
          <div className="wrapper bg-light-green">
            <p className="tag">Tatil Başlasın</p>
          </div>
        </div>
        <div className="row right p-t-50">
          <div className="box">
            <div className="line"></div>
            <div className="content">
              <div className="imgWrapper-l bg-half-baked">
                <img className="emj-square" src="/food.png" alt="" />
              </div>
              <div className="info">
                <p className="tag">Dostumuzu Besleyelim</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row left">
          <div className="box">
            <div className="content">
              <div className="info">
                <p className="tag">Dostumuzu Temizleyelim</p>
              </div>
              <div className="imgWrapper-r bg-half-baked">
                <img className="emj-poop" src="/poop.png" alt="" />
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="row right">
          <div className="box">
            <div className="line"></div>
            <div className="content">
              <div className="imgWrapper-l bg-half-baked">
                <img className="emj-square" src="/cat.png" alt="" />
              </div>
              <div className="info">
                <p className="tag">Dostumuzu Tarayalım</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row left p-b-50">
          <div className="box">
            <div className="content">
              <div className="info">
                <p className="tag">Beraber Eğlenelim</p>
              </div>
              <div className="imgWrapper-r bg-half-baked">
                <img className="emj-square" src="/game.png" alt="" />
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="point">
          <div className="wrapper bg-light-green">
            <p className="tag">Tekrar Buluşalım</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap