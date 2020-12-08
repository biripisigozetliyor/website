import React, { Fragment } from "react"
import DateSection from "../dateSection"

const Banner = () => {
  return (
    <Fragment>
      <section id="banner">
        <div className="gradient"></div>
        <div className="container"></div>
        <div className="curve"></div>
        <DateSection />
      </section>
    </Fragment>
  )
}

export default Banner
