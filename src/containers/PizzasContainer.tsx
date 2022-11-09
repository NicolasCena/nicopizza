import React from 'react'
import { CardPizza } from '../components/CardPizza';
import { dataPizzaStore } from '../Mock/dataPizza';

export const PizzasContainer = () => {

    const data = dataPizzaStore;

  return (
    <div id='store__container'>
        {
            data.map( (item, index) => 
                <CardPizza name={item.name} toppings={item.toppings} size={item.size} url={item.url} key={index}/>
            )
        }
    </div>
  )
}
