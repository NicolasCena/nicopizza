import React from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName
} from '@fortawesome/fontawesome-svg-core'


interface props {
    textCard: string,
    titleCard: string,
    source: IconName,
}


export const CardServices = ({ textCard, titleCard, source}: props) => {
  const { t, i18n } = useTranslation();
  
  const Icon: IconLookup = { prefix: 'fas', iconName: source };
  const coffeeIconDefinition: IconDefinition = findIconDefinition(Icon);
  
  return (
    <div id="services">
      <div className='card'>
        <FontAwesomeIcon icon={coffeeIconDefinition} className="card__image fa" />
        <h3 className="card__title">t({titleCard})</h3>
        <p className="card__text">t({textCard})</p>
      </div>
    </div>
  )
}