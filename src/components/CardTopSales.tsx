import React from 'react'

interface props {
    textCard: string,
    titleCard: string,
    source: string,
    altSource: string,
    price: number
}

export const CardTopSales = ({ textCard, titleCard, source, altSource, price }: props) => {
  return (
    <div className="card">
        <img src={source} alt={altSource} className="card-image" />
        <h3 className="card-title">{titleCard}</h3>
        <p className="card-text">{textCard}</p>
        <p className="card-price">{price}</p>
        <button className="card-button"></button>
    </div>
  )
}
