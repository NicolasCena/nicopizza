import { useState } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addProduct, restProduct, deleteProduct, restTotal, addTotal } from '../features/globalsSlice';

interface Props {
    pizzaName: string,
    pizzaType: string,
    quantity: number,
    priceUnity: number,
    id: string
}

export const CarItem = ({pizzaName, pizzaType, quantity, priceUnity, id}:Props) => {

    const [ count, setCount ] = useState(quantity);
    const { carrito } = useAppSelector( state => state.globals);
    const dispatch = useAppDispatch();

    
    // Añadimos unidad al carrito del producto y controlamos el total
    const addProductQuantity = () => {
      setCount( count + 1);

      let checkExistObjectPizza = carrito.filter( item => item.id === id );

      if(checkExistObjectPizza.length > 0){
        let newObjectPizzaChanged = carrito.map( item => {
          if(item.id === id){
              return item = {pizzaName, quantity: checkExistObjectPizza[0].quantity + 1, pizzaType, priceUnity, id}
          }else{
            return item
          };
        });
        dispatch(addTotal(priceUnity))
        dispatch(addProduct(newObjectPizzaChanged))
      };
    };

    // Restamos unidad al carrito del producto y controlamos el total
    const restProductQuantity = () => {
      setCount( count - 1);

      let checkExistObjectPizza = carrito.filter( item => item.id === id );

      if(checkExistObjectPizza[0].quantity - 1 > 0){

        let newObjectPizzaChanged = carrito.map( item => {
          if(item.id === id){
            return item = {pizzaName, quantity: checkExistObjectPizza[0].quantity - 1, pizzaType, priceUnity, id}
          }else{
            return item
          };
        });
        dispatch(restTotal(priceUnity))
        dispatch(restProduct(newObjectPizzaChanged))
      };

      if(checkExistObjectPizza[0].quantity - 1 === 0){
        deleteItem();
      }
    };

    // Borramos el objeto de la pizza del carrito
    const deleteItem = () => {
      let newArrayWithoutElementSelectioned = carrito.filter( item => item.id !== id );
      
      dispatch(restTotal(priceUnity))
      dispatch(deleteProduct(newArrayWithoutElementSelectioned))
    };

  return (
    <tr>
      <td className="carModal__title">{pizzaName}</td>
      <td className="carModal__counter">
          <button className="carModal__counter-rest" onClick={() => restProductQuantity()} disabled={ count === 0 ? true : false}>{'<'}</button>
          <input type="number" value={count} className="carModal__counter-input"/>
          <button className="carModal__counter-add" onClick={() => addProductQuantity()}>{'>'}</button>
      </td>
      <td className="carModal__tipo">{pizzaType}</td>
      <td className="carModal__precio">{"$ " + priceUnity*count}</td>
      <td onClick={ () => deleteItem()}>
        <FontAwesomeIcon icon={faTrashCan} className="carModal__delete" />
      </td>
    </tr>
  )
}