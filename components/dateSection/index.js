import React from "react"
import LeftPaw from "../../assets/svg/leftPaw"
import RighttPaw from "../../assets/svg/rightPaw"
import Calander from "../../assets/svg/calander"
import Location from "../../assets/svg/location"
import Button from "../button"

const DateSection = () => {
  return (
    <div className="date">
      <div className="selectPet">
        <Button type="square" value="Kedi" />
        <Button type="square" value="Kuş" />
        <Button type="square" value="Balık" />
        <Button type="square" value="Sürüngen" />
        <Button type="square" value="Kemirgen" />
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
  )
}

export default DateSection
