import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addProduct } from '../features/globalsSlice';
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

    // Estado global y traducciones
    const { isLoged, carrito, nameUser } = useAppSelector( state => state.globals);
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    // Estados locales
    const [ priceData, setPriceData ] = useState<number>(size[0].price);
    const [ sizePizza, setSizePizza] = useState<string>('Mediana');

    // Control del tamaño de pizza y precio
    const handleChangePrice = (eleccion: string) => {
        setSizePizza(parseInt(eleccion) === 1 ? "Mediana" : "Familiar");
        parseInt(eleccion) === 1 ? setPriceData(size[0].price) : setPriceData(size[1].price);
    };

    // Controlamos el submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addProduct({pizzaName: name, quantity: 1, pizzaType: sizePizza}))
    };

    console.log(name)

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
