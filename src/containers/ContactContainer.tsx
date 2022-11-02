import React from 'react'
import { CardServices } from '../components/CardServices'

export const ContactContainer = () => {
  return (
    <div>
        <div>
            <CardServices textCard='' titleCard='' source='phone'/>
            <CardServices textCard='' titleCard='' source='clock'/>
            <CardServices textCard='' titleCard='' source='location-crosshairs'/>
        </div>
        <div></div>
    </div>
  )
}
