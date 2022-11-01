import React from 'react'

interface props {
    ingredients: string,
    name: string,
    sourceImage: string,
    price: number,
    alt: string
}

export const PizzaServices = ({ sourceImage, price, ingredients, name, alt}: props) => {
  return (
    <div>
        <div>
            <img src={sourceImage} alt={alt} />
        </div>
        <div>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <button>Add</button>
            </div>
            <p>{ingredients}</p>
        </div>
    </div>
  )
}
