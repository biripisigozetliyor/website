import React, { Fragment, useRef } from "react"
import Link from "next/link"
import TwitterIcon from "../../assets/svg/twitter"
import FacebookIcon from "../../assets/svg/facebook"
import InstagramIcon from "../../assets/svg/instagram"
import YoutubeIcon from "../../assets/svg/youtube"
import MenuIcon from "../../assets/svg/menu"
import CloseIcon from "../../assets/svg/close"

function Navigation(props) {
  const { addClass, homePage } = props
  const nav = useRef()

  const openMenu = () => {
    document.body.style.overflow = "hidden"
    // blurClass.current.style.filter = "blur(4px)"
    nav.current.classList.remove("nav")
    nav.current.classList.add("mobil-menu")
  }
  const closeMenu = () => {
    document.body.style.overflow = "auto"
    // blurClass.current.style.filter = "blur(0px)"
    nav.current.classList.remove("mobil-menu")
    nav.current.classList.add("nav")
  }
  return (
    <nav className={`nav ${addClass}`} ref={nav}>
      <div className="close-icon-wrapper">
        <div className="close-icon" onClick={() => closeMenu()}>
          <CloseIcon />
        </div>
      </div>
      {homePage && (
        <Link href="/">
          <a className="nav-item">Anasayfa</a>
        </Link>
      )}

      <Link href="/hakkimizda">
        <a className="nav-item">Hakkımızda</a>
      </Link>
      <Link href="/">
        <a className="nav-item">Nasıl Çalışır?</a>
      </Link>
      <Link href="/">
        <a className="nav-item">Blog</a>
      </Link>
      <a
        href="javascript:void(0);"
        className="menu-icon"
        onClick={() => openMenu()}
      >
        <MenuIcon />
      </a>
      <div className="media-box">
        <div className="socialmedia-item">
          <a
            href="https://www.instagram.com/biripisigozetliyor/"
            target="_blank"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="socialmedia-item">
          <a href="" target="_blank">
            <TwitterIcon />
          </a>
        </div>
        <div className="socialmedia-item">
          <a href="" target="_blank">
            <FacebookIcon />
          </a>
        </div>
        <div className="socialmedia-item">
          <a href="" target="_blank">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
