import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addProduct, addTotal } from '../features/globalsSlice';
interface Props {
    name: string,
    toppings: string[],
    size: Size[],
    url: string
}
interface Size {
    sizePizza: number,
    price: number,
    id: string
}

export const CardPizza = ({ name, toppings, size, url}: Props) => {

    // Estado global y traducciones
    const { carrito } = useAppSelector( state => state.globals);
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    // Estados locales
    const [ priceData, setPriceData ] = useState<number>(size[0].price);
    const [ sizePizza, setSizePizza] = useState<string>('Mediana');
    const [ idPizzaSeleccionada, setIdpizzaSeleccionada ] = useState<string>(size[0].id)
    console.log(name)
    // Control del tamaño de pizza y precio
    const handleChangePrice = (e: ChangeEvent<HTMLSelectElement>) => {

        // Guardamos los datos asociados referidos con la selección en la card de la pizza
        // Tamaño de la pizza
        let nameSize = parseInt(e.target.value) === 1 ? 'Mediana' : 'Familiar';
        setSizePizza(nameSize);

        // Precio de la pizza
        parseInt(e.target.value) === 1 ? setPriceData(size[0].price) : setPriceData(size[1].price);

        // ID de la pizza
        setIdpizzaSeleccionada(e.target.id)

    };

    // Controlamos el submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Corroboramos que existe la pizza en el carrito
        let existObjectPizzaSelectioned = carrito.filter( item => item.id === idPizzaSeleccionada );

        if(existObjectPizzaSelectioned.length > 0){
            let newObjectPizzaChanged = carrito.map( item => {
                if(item.id === idPizzaSeleccionada){
                    return item = {
                        pizzaName: name, 
                        quantity: existObjectPizzaSelectioned[0].quantity + 1, 
                        pizzaType: sizePizza, 
                        priceUnity: priceData, 
                        id: idPizzaSeleccionada
                    }
                }else{
                    return item
                };
            });
            dispatch(addTotal(priceData));
            dispatch(addProduct(newObjectPizzaChanged));
        }else {
            dispatch(addTotal(priceData));
            dispatch(addProduct([...carrito, {pizzaName: name, quantity: 1, pizzaType: sizePizza, priceUnity: priceData, id: idPizzaSeleccionada}]));
        };
    }

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
                    <select onChange={ (e) => handleChangePrice(e)} className='card__form-size'>
                        {
                            size.map( (item, index) => 
                                <option 
                                    key={index}
                                    id={item.id}
                                    value={item.sizePizza}
                                >
                                    {item.sizePizza === 1 ? t("median") : t("family")}
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
