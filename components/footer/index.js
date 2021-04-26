import BlackLogo from "../../assets/svg/black-logo"
import PhoneIcon from "../../assets/svg/phone"
import Mail from "../../assets/svg/mail"
import TwitterIcon from "../../assets/svg/twitter"
import FacebookIcon from "../../assets/svg/facebook"
import InstagramIcon from "../../assets/svg/instagram"
import YoutubeIcon from "../../assets/svg/youtube"

function Footer() {
  return (
    <div className="container">
      <div className="footer-box logo">
        <BlackLogo />
      </div>
      <div className="footer-box navigation">
        <div className="box-container">
          <h5>Biripisigozetliyor</h5>
          <li className="nav-item">
            <a href="">Hakkımızda</a>
          </li>
          <li className="nav-item">
            <a href="">Blog</a>
          </li>
          <li className="nav-item">
            <a href="">Nasıl Çalışır?</a>
          </li>
          <li className="nav-item">
            <a href="">Sık Sorulan Sorular</a>
          </li>
        </div>
      </div>
      <div className="footer-box contact">
        <div className="box-container">
          <h5>İletişim</h5>
          <div className="contact-item">
            <PhoneIcon /> <a href="tel: 05284560371">0538 456 0371</a>
          </div>

          <div className="contact-item">
            <Mail />
            <a href="mailto:biripisigozetliyor.gmail.com">
              biripisigozetliyor.gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer-box social">
        <div className="box-container">
          <h5>Sosyal Medya</h5>
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
        </div>
      </div>
    </div>
  )
}

export default Footer
