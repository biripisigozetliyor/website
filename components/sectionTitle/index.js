function Title(props) {
  const { value, type } = props
  return <h3 className={`h3 ${type}`}>{value}</h3>
}

export default Title
