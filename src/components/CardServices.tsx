import React from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface props {
    textCard: string,
    titleCard: string,
    source: IconDefinition,
}

export const CardServices = ({ textCard, titleCard, source}: props) => {
  const { t, i18n } = useTranslation();
  return (
    <div id="services_component">
      <div className='card'>
        <div className='icon__container'>
          <FontAwesomeIcon icon={source} className="icon__container-image"/>
        </div>
        <div className='title__container'>
          <h3 className="title">{t(titleCard)}</h3>
        </div>
        <div className='text__container'>
          <p className="text">{t(textCard)}</p>
        </div>
      </div>
    </div>
  )
}