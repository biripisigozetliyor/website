import React, { Fragment } from "react"
import Logo from "../../assets/svg/logo"
import DateSection from "../dateSection"
import Navigation from "../navigation"

const Banner = () => {
  return (
    <Fragment>
      <section id="banner">
        <div className="header">
          <div className="navBar">
            <Navigation type="main" />
          </div>
          <Logo />
          <h1>Ankara Evde Evcil Hayvan Bakımı</h1>
        </div>
        <div className="gradient"></div>
        <div className="container"></div>
        <div className="curve"></div>
        <DateSection />
      </section>
    </Fragment>
  )
}

export default Banner
