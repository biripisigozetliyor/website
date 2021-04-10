function Package(props) {
  const { position, name, price, info } = props
  return (
    <div className={`box ${position}`}>
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="info">{info}</div>
      <div className="block"></div>
      <div className="campaign">
        Aynı gün içerisinde 2. ziyaretimizi ₺45 ücretle gerçekleştiriyoruz.
      </div>
      <button className="btn yellow-gradient">Randevu al</button>
    </div>
  )
}

export default Package
