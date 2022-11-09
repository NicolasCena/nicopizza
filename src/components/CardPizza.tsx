import { useEffect, useState } from 'react';

interface Props {
    name: string,
    toppings: string[],
    size: Size[],
    url: string
}

interface Size {
    sizePizza: number,
    price: number
}

export const CardPizza = ({ name, toppings, size, url}: Props) => {

    const [ priceData, setPriceData ] = useState<number>(size[0].price);
    const [ quantity, setQuantity ] = useState<number>(1);

    const handleChangePrice = (eleccion: string) => {
        parseInt(eleccion) === 1 ? setPriceData(size[0].price) : setPriceData(size[1].price)
    };

  return (
    <div className='cardPizza'>
        <div className='image__container'>
            <img src={url} alt={name} />
        </div>
        <div className='body'>
            <h3 className='body__title'>{name}</h3>
            <p className='body__toppings'>
                { toppings.map( (item, index) => (

                    (index === 0) ? `${ ' ' + item}` : `${ ' ,' + item}`

                ))}
            </p>
            <div className='body__size'>
                <form className='body__size-container'>

                    <label>Size Pizza</label>
                    <select onChange={ (e) => handleChangePrice(e.target.value)}>
                        {
                            size.map( (item, index) => 
                                <option 
                                    key={index} 
                                    value={item.sizePizza} 
                                >
                                    {item.sizePizza === 1 ? "Mediana" : "Familiar"}
                                </option> )
                        }
                    </select>

                    <div className='d-flex align-items-center text-center'>
                        <button onClick={() => setQuantity( quantity - 1)} className="btn btn-success">-</button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity( quantity + 1)} className="btn btn-success">+</button>
                    </div>

                </form>
                <div className='body__price'>{priceData}</div>
            </div>
        </div>
    </div>
  )
}
