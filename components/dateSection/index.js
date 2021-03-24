import React, { useState } from "react"
import Calander from "../../assets/svg/calander"
import Location from "../../assets/svg/location"
import Button from "../button"
import DatePicker from "react-datepicker"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import tr from 'date-fns/locale/tr';

const DateSection = () => {
  const [startDate, setStartDate] = useState(new Date())
  registerLocale('tr', tr)

  return (
    <div className="date">
      <div className="wrapper">
        <div className="selectPet">
          <li className="square">Kedi</li>
          <li className="square">Kuş</li>
          <li className="square">Balık</li>
          <li className="square">Kemirgen</li>
        </div>
        <div className="form">
          <div className="ddWrapper">
            <div className="dropdown">
              <div className="ddType">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  locale="tr"
                  dateFormat="dd/MM/yyyy"
                />
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
      </div>
    </div>
  )
}

export default DateSection
