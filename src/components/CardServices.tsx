import React from 'react'

interface props {
    textCard: string,
    titleCard: string,
    source: string,
    altSource: string
}

const CardServices = ({ textCard, titleCard, source, altSource }: props) => {
  return (
    <div className="card">
        <img src={source} alt={altSource} className="card-image" />
        <h3 className="card-title">{titleCard}</h3>
        <p className="card-text">{textCard}</p>
    </div>
  )
}

export default CardServices