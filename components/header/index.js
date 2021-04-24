import React, { Fragment, useRef } from "react"
import Link from "next/link"
import Logo from "../../assets/svg/logo"
import MenuIcon from "../../assets/svg/menu"
import CloseIcon from "../../assets/svg/close"
import DateSection from "../dateSection"
import DateModal from "../modal/dateModal"
import { observer } from "mobx-react"
import { modalStore } from "../../store/modalStore"

const Header = observer(() => {
  const topMenu = useRef()
  const leftSection = useRef()

  const openMenu = () => {
    document.body.style.overflow = "hidden"
    leftSection.current.style.filter = "blur(4px)"
    topMenu.current.classList.remove("top-nav")
    topMenu.current.classList.add("mobil-menu")
  }
  const closeMenu = () => {
    document.body.style.overflow = "auto"
    leftSection.current.style.filter = "blur(0px)"
    topMenu.current.classList.remove("mobil-menu")
    topMenu.current.classList.add("top-nav")
  }
  return (
    <Fragment>
      <header>
        <div className="left" ref={leftSection}>
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
          <nav className="top-nav" ref={topMenu}>
            <div className="close-icon-wrapper">
              <div className="close-icon" onClick={() => closeMenu()}>
                <CloseIcon />
              </div>
            </div>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
            <Link href="/">
              <a>Hakkımızda</a>
            </Link>
            <Link href="/">
              <a>Nasıl Çalışır?</a>
            </Link>
            <Link href="/">
              <a>Blog</a>
            </Link>
            <a
              href="javascript:void(0);"
              className="menu-icon"
              onClick={() => openMenu()}
            >
              <MenuIcon />
            </a>
          </nav>
        </div>
        <img className="banner-img" src="/header-big-cat.png" alt="cat" />
        {modalStore.showModal && <DateModal />}
      </header>
    </Fragment>
  )
})

export default Header
