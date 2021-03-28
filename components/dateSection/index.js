import React, { useState, useRef, useEffect } from "react"
import moment from "moment"
import Calander from "../../assets/svg/calander"
import Location from "../../assets/svg/location"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import tr from "date-fns/locale/tr"
import SmallPaw from "../../assets/svg/smallPaw"
import { observer } from "mobx-react"
import { modalStore } from "../../store/modalStore";

const DateSection = observer(() => {
  const petWrapper = useRef()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [selectValue, setSelectValue] = useState()
  const [petSelected, setpetSelect] = useState()
  const [dateObj, setDateObj] = useState({})
  const options = [
    { value: 0, label: "Çayyolu" },
    { value: 1, label: "Ümitköy" },
    { value: 2, label: "Yaşamkent" }
  ]

  moment.locale("tr")
  registerLocale("tr", tr)

  useEffect(() => {
    console.log(modalStore.showModal);
  }, [dateObj])

  

  const sendDate = () => {
    setDateObj({
      pet: petSelected,
      startDate: moment(startDate).format("MMMM Do YYYY"),
      endDate: moment(endDate).format("MMMM Do YYYY"),
      location: options.filter((option) => option.value == selectValue)[0].label
    })
    modalStore.showModal = true
  }

  const selectPet = (e) => {
    petWrapper.current.childNodes.forEach((li) => {
      li.style.backgroundColor = "transparent"
      li.style.color = "#774383"
    })

    const selectedPet = e.target
    selectedPet.style.backgroundColor = "#774383"
    selectedPet.style.color = "#FFD072"

    setpetSelect(e.target.textContent)
  }

  return (
    <div className="date">
      <div className="wrapper">
        <div
          className="selectPet"
          ref={petWrapper}
          onClick={(e) => selectPet(e)}
        >
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
                minDate={new Date()}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                locale="tr"
              />
              <Calander />
            </div>
            <div className="select-item">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd/MM/yyyy"
                locale="tr"
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
})

export default DateSection
