import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Modal } from 'react-bootstrap';
import { CarItem } from './CarItem';
import Table from 'react-bootstrap/Table';

interface controlModal {
  show: boolean,
  onHide: () => void
}

export const CarItems = ({ show, onHide }:controlModal) => {

  const { t } = useTranslation();
  const { carrito, total } = useAppSelector( state => state.globals);

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
            {t("shopping_cart")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table borderless={false} bordered={false}	>
            <thead >
              <tr className="carModalHeader">
                <th>{t("pizza_name")}</th>
                <th>{t("units")}</th>
                <th>{t("pizza_size")}</th>
                <th>{t("total")}</th>
                <th>{t("delete")}</th>
              </tr>
            </thead>
            <tbody>
              {
                carrito.map( (item, index) => 
                  <CarItem 
                    key={index} 
                    pizzaName={item.pizzaName} 
                    pizzaType={item.pizzaType} 
                    quantity={item.quantity} 
                    priceUnity={item.priceUnity}
                    id={item.id}
                  />
                )
              }
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>{total}</td>
                <td></td>
              </tr>
            </tfoot>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <button>{t("buy")}</button>
          <button onClick={onHide}>{t("add_more")}</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
