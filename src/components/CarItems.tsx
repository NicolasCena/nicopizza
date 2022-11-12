import { useState, SetStateAction, Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addProduct } from '../features/globalsSlice';
import { Modal, Button  } from 'react-bootstrap';
import { CarItem } from './CarItem';

interface controlModal {
  show: boolean,
  onHide: () => void
}

export const CarItems = ({ show, onHide }:controlModal) => {

  const { carrito } = useAppSelector( state => state.globals);
  const dispatch = useAppDispatch();
  // const restitem = ({show, handleClose, handleShow}: dataPizza) => {

  //   let newArray = carrito.filter( item => 
  //     ((item.pizzaName.toLowerCase() === name.toLowerCase()) && (item.pizzaType.toLowerCase() === sizePizza.toLowerCase()))
  //   );

  //   if(newArray.length > 0){
  //       let newArrayTwo = carrito.map( item => {
  //           if(item.pizzaName.toLowerCase() === name.toLowerCase() && item.pizzaType.toLowerCase() === sizePizza.toLowerCase()){
  //               return item = {pizzaName: name, quantity: newArray[0].quantity - 1, pizzaType: sizePizza}
  //           }else{
  //               return item
  //           };
  //       });
  //       dispatch(addProduct(newArrayTwo))
  //   }else {
  //       dispatch(addProduct([...carrito, {pizzaName: name, quantity: 1, pizzaType: sizePizza}]))
  //   };
  // }
  console.log(carrito)

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        id="modalCar"
      >
        <Modal.Header closeButton onClick={onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            carrito.map( (item, index) => 
              <CarItem key={index} pizzaName={item.pizzaName} pizzaType={item.pizzaType} quantity={item.quantity} priceUnity={item.priceUnity}/>
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
