import React, { Fragment, useRef } from "react"
import BlackLogo from "../../assets/svg/black-logo"
import Navigation from "../navigation"

function NavigationBar() {
 
  return (
    <Fragment>
      <div className="nav-logo">
        <BlackLogo />
      </div>
     <Navigation addClass="main-nav" homePage={true}/>
    </Fragment>
  )
}

export default NavigationBar
