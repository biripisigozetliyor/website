import Title from "../sectionTitle"
import UserCat1 from "../../assets/svg/userCat1"

function Comments() {
  return (
    <section id="comments">
      <div className="header">
        <Title value="Müşteri yorumları" type="green" />
      </div>
      <div className="container">
        <div className="commentWrapper">
          <div className="value">
            "Aman allahım bu nasıl bir <span className="green">teknoloji</span>
            ."
          </div>
          <div className="author">
            <div className="p1">
              <UserCat1 />
            </div>
            <div className="name">Ayşe Hanım</div>
          </div>
        </div>
        <div className="commentWrapper">
          <div className="value">
            "Kameralar şahane! Artık gözüm arkada kalmadan{" "}
            <span className="green">seyehat </span>
            edebiliyorum."
          </div>
          <div className="author">
            <div className="p2">
              <UserCat1 />
            </div>
            <div className="name">Ali Bey</div>
          </div>
        </div>
        <div className="commentWrapper">
          <div className="value">
            "Mükemmel hizmet. Anlaştığımız tarihte{" "}
            <span className="green">biripisigozetliyor</span> ekibi iş
            başındaydı!"
          </div>
          <div className="author">
            <div className="p3">
              <UserCat1 />
            </div>
            <div className="name">Canan Hanım</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments
