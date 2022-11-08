import React from 'react'
import { CardServices } from '../components/CardServices'
import { dataOurServices } from '../Mock/dataServices';
import { useTranslation } from 'react-i18next';

export const ServicesContainer = () => {

    const { t } = useTranslation()

  return (
    <div id="ourServices_section">
        <h1>{t('our_services_title')}</h1>
        <p className='title__description' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">{t('our_services_text')}</p>
        <div className="contact">
        {
            dataOurServices.map( (item,index) => 
            <CardServices 
                key={`service-${index}`} 
                textCard={item.textInfo} 
                titleCard={item.info} 
                source={item.icono}
            />
            )
        }
        </div>
    </div>
  )
}
