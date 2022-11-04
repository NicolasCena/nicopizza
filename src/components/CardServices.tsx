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
        <FontAwesomeIcon icon={source} className="card__image"/>
        <h3 className="card__title">{t(titleCard)}</h3>
        <p className="card__text">{t(textCard)}</p>
      </div>
    </div>
  )
}