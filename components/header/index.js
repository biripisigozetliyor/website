import React, { Fragment } from "react"
import Logo from "../../assets/svg/logo"
import DateSection from "../dateSection"
import DateModal from "../modal/dateModal"
import { observer } from "mobx-react"
import { modalStore } from "../../store/modalStore"

const Header = observer(() => {
  return (
    <Fragment>
      <header>
        <div className="left">
          <div className="content">
            <div className="frame">
              <img className="frameImg" src="/frame.png" alt="frame" />
              <div className="logo-wrapper">
                <div className="logo">
                  <Logo />
                </div>
                <h1>Ankara Evde Evcil Hayvan Bakımı</h1>
                <img className="rope" src="/rope.png" alt="rope" />
              </div>
              <div className="date-section">
                <DateSection />
              </div>
            </div>
          </div>
        </div>
        <img className="banner-img" src="/header-big-cat.png" alt="cat" />
        {modalStore.showModal && <DateModal />}
      </header>
    </Fragment>
  )
})

export default Header
