import React from 'react'
interface props {
    name: string,
    sourceImage: string,
    stadistic: number,
    alt: string
}

export const Stadistic = ({ sourceImage, stadistic, name, alt}: props) => {
  return (
    <div>
        <img src={sourceImage} alt={alt} />
        <p>{stadistic}</p>
        <p>{name}</p>
    </div>
  )
}
