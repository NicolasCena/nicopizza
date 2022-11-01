import React from 'react'
import { useTranslation } from 'react-i18next';
import flagGB from '../assets/flagGB.png';
import flagItaly from '../assets/flagItaly.png';
import flagSpain from '../assets/flagSpain.png';
import pizzaNotLog from '../assets/PizzaLogin.png';

export const UserNotLoged = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng);
    };

  return (
    <>
    <div id="userNotLoged">
        <div className='languages'>
            <div onClick={() => changeLanguage('en')}>
                <img src={flagGB} alt="" />
            </div>
            <div onClick={() => changeLanguage('it')}>
                <img src={flagItaly} alt="" />
            </div>
            <div onClick={() => changeLanguage('es')}> 
                <img src={flagSpain} alt="" />
            </div>
        </div>
        <div className='options'>
            <div className='options__container'>
                <div className='options__container-buttons'>
                    <button className='button__option-login'>{t("log_in")}</button>
                    <button className='button__option-register'>{t("register")}</button>
                    <button className='button__option-invited'>{t("invited")}</button>
                </div>
                <div className='options__container-image'>
                    <img src={pizzaNotLog} alt="Pizza" className='image-size'/>
                </div>
            </div>
        </div>
    </div>
    <div className='prueba'></div>
    </>
  )
}
