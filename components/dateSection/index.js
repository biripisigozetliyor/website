import React, { useState } from "react"
import Calander from "../../assets/svg/calander"
import Location from "../../assets/svg/location"
import Button from "../button"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import tr from "date-fns/locale/tr"
import SmallPaw from "../../assets/svg/smallPaw"

const DateSection = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [selectValue, setSelectValue] = useState()
  const options = [
    { value: 0, label: "Çayyolu" },
    { value: 1, label: "Ümitköy" },
    { value: 2, label: "Yaşamkent" }
  ]
  registerLocale("tr", tr)

  const sendDate = () => {
    const selected = []
    selected.push(
      startDate,
      options.filter((option) => option.value == selectValue)[0].label
    )
    //TODO: date forman - select pet için state hazırlayıp onu da selected'a basmak gerek. Ve validation hazırlanmalı.
    console.log(selected)
  }

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
          <div className="select-wrapper">
            <div className="select-item">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale="tr"
                dateFormat="dd/MM/yyyy"
              />
              <Calander />
            </div>
            <div className="select-item">
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Lütfen Konum Seçiniz
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Location />
            </div>
          </div>
          <div className="date-button">
            <button className="btn iconicBorder" onClick={sendDate}>
              <SmallPaw />
              Randevu Al
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateSection
