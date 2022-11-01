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
                <button>{t("log_in")}</button>
                <button>{t("register")}</button>
                <button>{t("invited")}</button>
            </div>
            <div className='options__image'>
                <img src={pizzaNotLog} alt="Pizza" className='options__image-size'/>
            </div>
        </div>
    </div>
    <div className='prueba'></div>
    </>
  )
}
