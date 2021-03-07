import React from "react"
import LeftPaw from "../../assets/svg/leftPaw"
import RighttPaw from "../../assets/svg/rightPaw"
import Calander from "../../assets/svg/calander"
import Location from "../../assets/svg/location"
import Button from "../button"

const DateSection = () => {
  return (
    <div className="date">
      <div className="wrapper">
        <div className="selectPet">
          <li className="square">Kedi</li>
          <li className="square">Kuş</li>
          <li className="square">Balık</li>
          <li className="square">Sürüngen</li>
          <li className="square">Kemirgen</li>
        </div>
        <div className="form">
          <div className="ddWrapper">
            <div className="dropdown">
              <div className="ddType">
                <span>Tarih Seçiniz</span>
                <Calander />
              </div>
              <div className="dropdown-content">
                <p>Hello World!</p>
              </div>
            </div>
            <div className="dropdown">
              <div className="ddType">
                <span>Lütfen konum seçiniz</span>
                <Location />
              </div>
              <div className="dropdown-content">
                <p>Hello World!</p>
              </div>
            </div>
          </div>
          <div className="btn">
            <Button type="iconicBorder" value="Randevu Al" icon="smallPaw" />
          </div>
        </div>
        <div className="leftSide">
          <LeftPaw />
        </div>
        <div className="rightSide">
          <RighttPaw />
        </div>
      </div>
    </div>
  )
}

export default DateSection
