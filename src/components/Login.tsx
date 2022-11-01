import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />


export const Login = () => {
    const { t, i18n } = useTranslation();

  return (
    <>
      <h1>hola</h1>
    </>

  )
}
