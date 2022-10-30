import React from 'react'
import { useTranslation } from 'react-i18next';


export const Login = () => {

    const { t, i18n } = useTranslation();

  return (
    <h1>{t('Welcome to React')}</h1>
  )
}
