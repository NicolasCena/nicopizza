import React from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import CountUp from 'react-countup';

interface props {
    textCard: string,
    titleCard?: string,
    source: IconDefinition,
    counter?: number
}

export const CardServices = ({ textCard, titleCard, source, counter}: props) => {
  const { t, i18n } = useTranslation();
  return (
    <div id="services_component">
      <div className='card'>
        <div className='icon__container'>
          <FontAwesomeIcon icon={source} className="icon__container-image"/>
        </div>
        { titleCard 
          ?
          (<div className='title__container'>
            <h3 className="title">{t(titleCard)}</h3>
          </div>)
          :
          ''
        }
        <div className='text__container'>
          <p className="text">{t(textCard)}</p>
        </div>
        {
          counter ? <CountUp end={counter} duration={2.75} enableScrollSpy={true} scrollSpyOnce={true} className="counter"/> : ''
        }
      </div>
    </div>
  )
}