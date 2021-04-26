import React, { Fragment, useRef } from "react"
import Logo from "../../assets/svg/logo"
import DateSection from "../dateSection"
import DateModal from "../modal/dateModal"
import Navigation from "../navigation"
import { observer } from "mobx-react"
import { modalStore } from "../../store/modalStore"

const Header = observer(() => {
  return (
    <Fragment>
      <header class="main-header">
        <div className="left">
          <div className="container">
            <img className="frameImg" src="/frame.png" alt="frame" />
            <div className="content">
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
        <div className="top">
          <div className="space"></div>
          <Navigation addClass="homepage-nav" homePage={false}/>
        </div>
        <img className="banner-img" src="/header-big-cat.png" alt="cat" />
        {modalStore.showModal && <DateModal />}
      </header>
    </Fragment>
  )
})

export default Header
