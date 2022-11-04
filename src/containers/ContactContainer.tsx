import React from "react"
import { CardServices } from '../components/CardServices'
import { dataServices } from '../Mock/dataServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export const ContactContainer = () => {
  return (
    <div id="services_section">
        <div className="contact">
          {
            dataServices.map( (item,index) => 
              <CardServices 
                key={`service-${index}`} 
                textCard={item.textInfo} 
                titleCard={item.info} 
                source={item.icono}
              />
            )
          }
        </div>
        <div className="social">
          <div className="social__container">
            <div className="box-icon">
              <FontAwesomeIcon icon={faFacebook} className="icon__item"/>
            </div>
            <div className="box-icon"> 
              <FontAwesomeIcon icon={faTwitter} className="icon__item" />
            </div>
            <div className="box-icon"> 
              <FontAwesomeIcon icon={faInstagram} className="icon__item"/>
            </div>
          </div>
        </div>
    </div>
  )
}
