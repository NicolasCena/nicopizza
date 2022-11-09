import { t } from 'i18next';
import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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

    const handleChangePrice = (eleccion: string) => {
        parseInt(eleccion) === 1 ? setPriceData(size[0].price) : setPriceData(size[1].price)
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(e)
    }

    const { t } = useTranslation();

  return (
    <div id='pizza__card'>
        <div className='card__image'>
            <img src={url} alt={name} />
        </div>
        <div className='card__content'>
            <div className='card__content-text'>
                <h3 className='title'>{name}</h3>
                <p className='toppings'>
                    { toppings.map( (item, index) => (

                        (index === 0) ? `${ ' ' + item}` : `${ ' , ' + item}`

                    ))}
                </p>
            </div>
            <div className='card__form'>

                <form className='card__form-container' onSubmit={(e) => handleSubmit(e)}>
                    <label>{t("pizza_size")}</label>
                    <select onChange={ (e) => handleChangePrice(e.target.value)} className='card__form-size'>
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
                    <div className='price'>
                        <p>{t("unit_price")}</p> {priceData}
                    </div>

                    <input type='submit' value={t("add")!} className='submit__form'/>
                </form>

            </div>
        </div>
    </div>
  )
}
