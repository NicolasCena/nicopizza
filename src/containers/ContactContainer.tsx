import React from 'react'
import { CardServices } from '../components/CardServices'
import { faPhone, faClock, faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons'

export const ContactContainer = () => {
  return (
    <div>
        <div>
            <CardServices textCard='' titleCard='' source={faPhone}/>
            <CardServices textCard='' titleCard='' source={faClock} />
            <CardServices textCard='' titleCard='' source={faLocationCrosshairs}/>
        </div>
        <div></div>
    </div>
  )
}
