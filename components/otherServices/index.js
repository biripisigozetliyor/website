import Title from "../sectionTitle"
import CatFinger from "../../assets/svg/catFinger"
import Brush from "../../assets/svg/Brush"
import Cactus from "../../assets/svg/Cactus"
import Trash from "../../assets/svg/Trash"
import Window from "../../assets/svg/Window"
function OtherServices() {
  return (
    <section id="services">
      <div className="header">
        <Title value="Evinize de bakıyoruz" type="white" />
      </div>
      <div className="container">
        <div className="catFinger f1">
          <div className="serviceName s1">
            <span>Evinizi havalandırıyoruz</span>
          </div>
          <div className="icon">
            <Window />
          </div>
          <div className="iconWrapper">
            <CatFinger />
          </div>
        </div>
        <div className="catFinger f2">
          <div className="serviceName s2">
            <span>Çiçeklerinizi suluyoruz</span>
          </div>
          <div className="icon">
            <Cactus />
          </div>
          <div className="iconWrapper">
            <CatFinger />
          </div>
        </div>
        <div className="catFinger f3">
          <div className="serviceName s3">
            <span>Yerlerdeki kumları temizliyoruz</span>
          </div>
          <div className="icon">
            <Brush />
          </div>
          <div className="iconWrapper">
            <CatFinger />
          </div>
        </div>
        <div className="catFinger f4">
          <div className="serviceName s4">
            <span>Çöpleri topluyoruz</span>
          </div>
          <div className="icon">
            <Trash />
          </div>
          <div className="iconWrapper">
            <CatFinger />
          </div>
        </div>
        <div className="catHand">
          <div className="iconWrapper">
            <CatFinger />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherServices
