import React, { useState, useRef } from "react"
import SmallPaw from "../../assets/svg/smallPaw"
import CloseIcon from "../../assets/svg/close"
import QuestionMark from "../../assets/svg/question-mark"
import { observer } from "mobx-react"
import { modalStore } from "../../store/modalStore"
import Airtable from "airtable"

const DateModal = observer(() => {
  const [closeEffect, setCloseEffect] = useState(false)
  const [fullname, setFullname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [packet, setPacket] = useState("")
  const [message, setMessage] = useState("")

  const fullnameItem = useRef()
  const phoneItem = useRef()
  const emailItem = useRef()
  const addressItem = useRef()
  const packetItem = useRef()
  const messageItem = useRef()

  const base = new Airtable({ apiKey: "keyEgSc5Vve4snM1C" }).base(
    "appOj6rFIU9ASgjHD"
  )

  const closeModalEffect = () => {
    setCloseEffect(true)
    setTimeout(closeModal, 1100)
  }
  const closeModal = () => {
    modalStore.showModal = false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (fullname && phone && email && address && packet) {
      console.log(modalStore.dateObj.startDate, modalStore.dateObj.endDate,fullname,phone,email,address,packet,message);
      base("DateList").create(
        [
          {
            fields: {
              StartDate: modalStore.dateObj.startDate,
              EndDate: modalStore.dateObj.endDate,
              CustomerFullName: fullname,
              Phone: phone,
              PacketType: packet,
              Email: email,
              Adress: address,
              Message: "message"
            }
          },       
        ],
        function (err, records) {
          if (err) {
            console.error(err)
            return
          }
          records.forEach(function (record) {
            console.log(record.getId())
          })
        }
      )
    } else {
      if (!fullname) {
        fullnameItem.current.classList.add("warning")
      } else {
        fullnameItem.current.classList.remove("warning")
      }
      if (!phone) {
        phoneItem.current.classList.add("warning")
      } else {
        phoneItem.current.classList.remove("warning")
      }
      if (!email) {
        emailItem.current.classList.add("warning")
      } else {
        emailItem.current.classList.remove("warning")
      }
      if (!address) {
        addressItem.current.classList.add("warning")
      } else {
        addressItem.current.classList.remove("warning")
      }
      if (!packet) {
        packetItem.current.classList.add("warning")
      } else {
        packetItem.current.classList.remove("warning")
      }
    }

   
  }

  return (
    <div className={`modal fadeIn ${closeEffect == true ? "fadeOut" : ""}`}>
      <div className="modal-blur"></div>
      <div className="modal-box">
        <div className="close-icon-wrapper">
          <div className="close-icon" onClick={() => closeModalEffect()}>
            <CloseIcon />
          </div>
        </div>
        <div className="modal-img">
          <img src="/modal.png" alt="modal-img" />
        </div>
        <div className="modal-form">
          <h2>Randevu Oluştur</h2>
          <form className="date-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-item">
              <label htmlFor="fullname">
                İsminiz ve soyisminiz <span className="asterisk">*</span>{" "}
              </label>
              <input
                ref={fullnameItem}
                className="input"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                id="fullname"
                name="firstname"
                placeholder="Lütfen isminizi ve soyisminizi giriniz..."
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="phone">
                Telefon numaranız <span className="asterisk">*</span>
              </label>
              <input
                ref={phoneItem}
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Lütfen telefon numaranızı giriniz..."
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="email">
                Email adresiniz <span className="asterisk">*</span>
              </label>
              <input
                ref={emailItem}
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="Lütfen e-mailinizi giriniz..."
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="address">
                Adresiniz <span className="asterisk">*</span>
              </label>
              <textarea
                ref={addressItem}
                className="textarea"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="address"
                id="address"
                name="address"
                placeholder="Lütfen adresizinizi giriniz..."
              ></textarea>
            </div>
            <div className="form-item">
              <div className="label-with-info">
                <label htmlFor="packet">
                  Paket Seçiminiz <span className="asterisk">*</span>
                </label>{" "}
                <span className="questin-mark-wrapper">
                  <QuestionMark />
                </span>
              </div>
              <select
                ref={packetItem}
                className="input select-with-icon"
                value={packet}
                onChange={(e) => setPacket(e.target.value)}
                id="packet"
                name="packet"
              >
                <option
                  className="placeholder"
                  value=""
                  disabled
                  selected
                  hidden
                >
                  Paketinizi Seçiniz
                </option>
                <option option="Kaju">Kaju</option>
                <option option="Alex">Alex</option>
                <option option="Duman">Duman</option>
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                ref={messageItem}
                className="textarea message-area"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
