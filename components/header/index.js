import React, { Fragment } from "react"
import Logo from "../../assets/svg/logo"
import DateSection from "../dateSection"
import DateModal from "../modal/dateModal"
import { observer } from "mobx-react"
import { modalStore } from "../../store/modalStore";

const Header = observer(() => {
  return (
    <Fragment>
      <header>
        <div className="left">
          <div className="content">
            <div className="frame">
              <img src="/frame.png" alt="frame" />
              <div className="logo">
                <Logo />
                <h1>Ankara Evde Evcil Hayvan Bakımı</h1>
              </div>

              <div className="date-section">
                <DateSection />
              </div>
            </div>
            {/* <div className="content">
             
            </div> */}
          </div>
        </div>
        <img className="banner-img" src="/header-big-cat.png" alt="cat" />  
        {modalStore.showModal &&  <DateModal />}
       
      </header>
    </Fragment>
  )
})

export default Header
