// import Layout from "../components/layout"
import Title from "../sectionTitle"

function BlogPost() {
  return (
    <div className="section bg-softWhite">
      <div className="sec-container">
        <header className="post-header">
          <div className="post-date">
            <time dateTime="2021-02-21">21/02/2021</time>
          </div>
          <div className="header-img">
            <img src="post-header.jpg" alt="header-img" />
          </div>
          <div className="title">
            <h1>
              Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?
            </h1>
          </div>
        </header>
        <div className="post-box">
          <p className="main-p">
            Senin Değil, Kedinin Evi: Kediler Neden Kendi Evinde Bakılmalı?
            Hayatımıza girdikleri andan itibaren kendimizi onlara adıyor; her
            şeyimizi onlarla paylaşıyoruz. En önemlisi de evimizi. Evet, bir
            süre sonra kan kardeşimiz, yavrumuz, sevgilimiz haline gelen
            kedilerimizden bahsediyoruz.
          </p>
          <p className="main-p">
            Onların varlıklarını sürdürebilmeleri ve huzurlu kalmaları için
            evimizde birçok değişiklik yapıyor, en doğru ortamı sağlamaya
            çalışıyoruz. El üstünde tuttuğumuz bu ev arkadaşlarımızın mutlu
            olduğunu gördükçe biz de seviniyoruz elbette. Peki ama gerçekten
            işler düşündüğümüz gibi mi? Bir kedi evinizi kendi evi olarak
            benimsiyor mu?
          </p>
          <h3>1. Eve Gelir Gelmez Alanını İşaretliyor</h3>
          <div className="post-img">
            <img src="post-header.jpg" alt="header-img" />
          </div>
          <p className="main-p">
            Kediler, tam da rivayet edildiği gibi bir eve alışınca orayı terk
            etmekte oldukça zorlanıyor. Çünkü doğası gereği ilk adım attığı
            andan itibaren bile bölgesini işaretleyen ve düzenleyen bu canlılar
            başkasını bu bölgeye almak istemediği gibi bambaşka bir ortama da
            girmek istemiyor. Kısacası evet, kediniz de sizle birlikte o evi
            yuvası olarak benimsiyor.
          </p>
          <h3>2. Eşyalara Alışıyor ve Kendi Eşyalarını Seçiyor</h3>
          <div className="post-img">
            <img src="last-blog.jpg" alt="header-img" />
          </div>
          <p className="main-p">
            Kediler beslenme ve tuvalet alanlarının dışında kalan evin her
            köşesini kendi oyun ve dinlenme zevkleri için kullanıyor. Siz de
            farkındasınızdır ki çoğunlukla evi en verimli kullanan siz değil
            kediniz oluyor. Hal böyle olunca evde alıştığı ve sahiplenerek
            farklı şekilde kullandığı birçok eşya olabiliyor. Evden uzakta
            olduğunda bu eşyaları bulamamak elbette onu hayal kırıklığına
            uğratıyor.
          </p>
          <h3>3. Kendi Evinden Uzak Olmak Strese Neden Olabiliyor</h3>
          <div className="post-img">
            <img src="post-3.jpg" alt="header-img" />
          </div>
          <p className="main-p">
            Kedilerde kendi evinden uzakta olmak strese ve ona bağlı farklı
            rahatsızlıklara sebep olabiliyor. Özellikle, taşınma dönemlerinde en
            az ev sahipleri kadar zorluk çeken kediler yeme bozuklukları,
            tuvalet alışkanlığında değişiklik gibi depresyon benzeri tepkiler
            verebiliyor.
          </p>
          <h3>4. Seyahatlerinizde Kendi Evinde Bakımı Sağlanmalı </h3>
          <div className="post-img">
            <img src="post-4.jpg" alt="header-img" />
          </div>
          <p className="main-p">
            Özellikle zorunlu iş seyahatleri, 2 günden uzun geziler kedi
            sahipleri için kabusa dönebiliyor. Her ne kadar endişe verici
            görünse de aslında kedileri evinizde tek bırakmak o kadar korkunç
            olmayabilir. Ancak evden uzakta olma sürenize bağlı olarak evi
            düzenli ziyaret edecek birine anahtar bırakmanız gerekebilir.
            Böylece kedinizin kendi evinde kişisel bakımı sağlanır ve olası
            tatsızlıklar önlenmiş olur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
