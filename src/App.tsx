import { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { Navigation } from './router/Navigation';
import { addProduct, addTotalFromLocal } from './features/globalsSlice';
interface product {
  pizzaName: string,
  quantity: number,
  pizzaType: string,
  priceUnity: number,
  id: string
}

function App() {

  const { carrito, total } = useAppSelector( state => state.globals);
  const dispatch = useAppDispatch();


  useEffect(() => {
    let totalLocal = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('total'))));
    let carritoLocal = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('carActual'))));

    if(total === 0 && totalLocal !== 0){
      dispatch(addTotalFromLocal(totalLocal));
    };

    if(carrito.length === 0 && !!carritoLocal){
      dispatch(addProduct(carritoLocal));
    };

  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </>
  );
}

export default App;
