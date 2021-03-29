import React from "react"

const DateModal = (props) => {
  return (
    <div className="modal">
      <div className="modal-blur"></div>
      <div className="modal-box">
        <h2>Randevu Oluştur</h2>
        <form action="submit" className="date-form">
          <div className="form-item">
            <input
              className="input"
              type="text"
              id="name"
              name="firstname"
              placeholder="Lütfen adınızı giriniz..."
            ></input>
          </div>
          <div className="form-item">
            <input
              className="input"
              type="text"
              id="surname"
              name="surname"
              placeholder="Lütfen soyadınızı giriniz..."
            ></input>
          </div>
          <div className="form-item">
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Lütfen e-mailinizi giriniz..."
            ></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DateModal
