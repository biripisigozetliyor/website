import SmallPaw from "../../assets/svg/smallPaw"
function Button(props) {
  const { type, value, icon } = props
  console.log(icon)

  const buttonRender = () => {
    if (icon === "smallPaw") {
      return (
        <button className={`btn ${type}`}>
          {<SmallPaw />}
          {value}
        </button>
      )
    } else {
      return <button className={`btn ${type}`}>{value}</button>
    }
  }

  return buttonRender()
}

export default Button
