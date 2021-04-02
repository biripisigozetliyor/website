import React from "react"
import SmallPaw from "../../assets/svg/smallPaw"
import CloseIcon from "../../assets/svg/close"
import { observer } from "mobx-react"
import { modalStore } from "../../store/modalStore";

const DateModal = observer(() => {
  return (
    <div className="modal">
      <div className="modal-blur"></div>
      <div className="modal-box">
        <div className="close-icon-wrapper">
          <div className="close-icon" onClick={() => (modalStore.showModal = false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="modal-img">
          <img src="/modal.png" alt="modal-img" />
        </div>
        <div className="modal-form">
          <h2>Randevu Oluştur</h2>
          <form action="submit" className="date-form">
            <div className="form-item">
              <label htmlFor="fullname">İsminiz ve soyisminiz</label>
              <input
                type="text"
                id="fullname"
                name="firstname"
                placeholder="Lütfen isminizi ve soyisminizi giriniz..."
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="phone">Telefon numaranız</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Lütfen telefon numaranızı giriniz..."
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="email">Email adresiniz</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Lütfen e-mailinizi giriniz..."
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="address">Adresiniz</label>
              <textarea
                type="address"
                id="address"
                name="address"
                placeholder="Lütfen adresizinizi giriniz..."
              ></textarea>
            </div>
            <div className="form-item">
              <label htmlFor="fullname">Dostunuzun adı</label>
              <input
                type="text"
                id="fullname"
                name="firstname"
                placeholder="Lütfen dostunuzun adını giriniz..."
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                className="message-area"
                type="message"
                id="message"
                name="message"
                placeholder="Lütfen dostunuzla ilgili bilmemiz gerekenleri giriniz..."
              ></textarea>
            </div>
            <div className="form-item">
              <button type="submit" className="btn iconicBorder">
                <SmallPaw />
                Randevu Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})

export default DateModal
