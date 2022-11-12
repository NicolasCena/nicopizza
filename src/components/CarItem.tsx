import React, { useState } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    pizzaName: string,
    pizzaType: string,
    quantity: number,
    priceUnity: number
}


export const CarItem = ({pizzaName,pizzaType,quantity, priceUnity}:Props) => {

    const [ count, setCount ] = useState(0)

  return (
    <div className="carModal">
        <p className="carModal__title">{pizzaName}</p>
        <div className="carModal__counter">
            <button className="carModal__counter-rest" onClick={() => setCount( count - 1)} disabled={ count === 0 ? true : false}>{'<'}</button>
            <input type="number" value={count} className="carModal__counter-input"/>
            <button className="carModal__counter-add" onClick={() => setCount( count + 1)}>{'>'}</button>
        </div>
        <p>Tipo: {pizzaType}</p>
        <p>Total: {priceUnity*quantity}</p>
        <FontAwesomeIcon icon={faTrashCan} className="carModal__delete" />
    </div>
  )
}
