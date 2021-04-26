// import Layout from "../components/layout"
import Layout from "../components/layout"
import Title from "../components/sectionTitle"

function AboutPage() {
  return (
    <Layout>
      <section className="section small-page bg-softWhite">
        <div className="sec-container">
          <div className="header">
            <Title value="Hakkımızda" type="night" />
          </div>
          <div className="text-box">
            <p className="main-p">
              Merhaba biz, Ezgi, Kenan ve Kaju. Kaju, “Lupus” isimli kronik
              metabolik bir rahatsızlığı bulunan, özel bakıma ihtiyaç duyan bir
              kedi aynı zamanda bizim biricik tüylü dostumuz. Hatta ilham
              kaynağımız diyebiliriz. Onun bu özel bakım gerektiren
              hastalığından ve düşük bağışıklık sisteminden ötürü;
              seyahatlerimiz sırasında Kaju’nun bakımı konusunda bir hayli
              zorlanıyoruz. Başlarda herkes gibi biz de başkasının evine ve kedi
              otellerine bırakmayı denedik. Ancak evden uzakta olunca Kaju’nun
              yaşadığı stresin başka hastalıkları tetiklediğini gördük. Biz
              birkaç gün uzaklaşacağız diye onu evinden uzaklaştırmak içimize
              sinmemeye başladı. Pencere telleriyle, kedi kuleleriyle, yatağıyla
              konforlu ve güvenli hale getirdiğimiz evinden hem de! Ve böylece
              sizin ve dostunuzun da benzer sıkıntıları yaşamaması için biri
              pisi gözetliyor’u kurmaya karar verdik. Biz istiyoruz ki, siz
              evden uzaktayken minik dostlarımız güvende hissettikleri ortamdan
              ayrılmadan bakımları yapılsın ve temel ihtiyaçları giderilsin.
              Dostunuza yuva olan evinizle de siz oradaymışsınız gibi özenle
              ilgilenilsin. Evinize yerleştirdiğimiz kameralar ile güvenliği
              sağlıyor ve sevimli dostlarımızla bizzat ilgileniyoruz. Ayrıca
              sayenizde elde ettiğimiz gelirimizin bir kısmını yaşam
              alanlarındaki dostlarımıza bağışlıyor, sıcak bir yuvaya sahip
              olamasalar da patilerinden tutmaya çalışıyoruz!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
