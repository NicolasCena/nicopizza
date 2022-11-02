import React from 'react';
import HornoPizza from '../assets/HornoPizza.gif';


export const HeaderVideoContainer = () => {
  return (
    <div id='HeaderVideoContainer'>
        <img src={HornoPizza} alt="" className="image" />
        <div className='container'>
          <div className='container__texts'>
            <p className='container__texts-title'>NicoPizza</p>
            <p className='container__texts-firstText'>We cooked your desired pizza recipe</p>
            <div className='container__texts-secondText'>
              <p className='secondText'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
          <div className='container__buttons'>
            <button className='container__buttons-boton'>View Menu</button>
            <button className='container__buttons-boton'>Order Now</button>
          </div>
        </div>
    </div>
  )
}
