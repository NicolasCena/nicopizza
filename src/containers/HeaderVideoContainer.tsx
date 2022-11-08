import HornoPizza from '../assets/HornoPizza.gif';
import { useTranslation } from 'react-i18next';

export const HeaderVideoContainer = () => {

  const { t } = useTranslation()

  return (
    <div id='HeaderVideoContainer'>
        <img src={HornoPizza} alt="" className="image" />
        <div className='container'>
          <div className='container__texts'>
            <p className='container__texts-title'>NicoPizza</p>
            <p className='container__texts-firstText'>{t('header_title')}</p>
            <div className='container__texts-secondText'>
              <p className='secondText'>{t('header_subtext_title')}</p>
            </div>
          </div>
          <div className='container__buttons'>
            <button className='container__buttons-boton'>{t('header_view_menu')}</button>
            <button className='container__buttons-boton'>{t('header_order_now')}</button>
          </div>
        </div>
    </div>
  )
}
