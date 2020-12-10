import React from "react"
import LeftPaw from "../../assets/svg/leftPaw"
import RighttPaw from "../../assets/svg/rightPaw"
import Calander from "../../assets/svg/calander"
import Location from "../../assets/svg/location"
import SmallPaw from "../../assets/svg/smallPaw"

const DateSection = () => {
  return (
    <div className="date">
      <div className="selectPet">
        <button className="pet">Kedi</button>
        <button className="pet">Kuş</button>
        <button className="pet">Balık</button>
        <button className="pet">Sürüngen</button>
        <button className="pet">Kemirgen</button>
      </div>
      <div className="form">
        <div className="ddWrapper">
          <div class="dropdown">
            <div className="ddType">
              <span>Tarih Seçiniz</span>
              <Calander />
            </div>
            <div class="dropdown-content">
              <p>Hello World!</p>
            </div>
          </div>
          <div class="dropdown">
            <div className="ddType">
              <span>Lütfen konum seçiniz</span>
              <Location />
            </div>
            <div class="dropdown-content">
              <p>Hello World!</p>
            </div>
          </div>
        </div>
        <button className="getDate">
          <SmallPaw />
          Randevu Al
        </button>
      </div>
      <div className="leftSide">
        <LeftPaw />
      </div>
      <div className="rightSide">
        <RighttPaw />
      </div>
    </div>
  )
}

export default DateSection
