import { useTranslation } from 'react-i18next';
import pizzaNotLog from '../assets/PizzaLogin.png';

export const WelcomeSectionContainer = () => {
  const { t } = useTranslation();

  return (
    <div className='welcome'>
        <div className='welcome__container-image'>
            <img src={pizzaNotLog} alt="Pizza" className='image-size'/>
        </div>
        <div className='welcome__text'>
            <h2 className='welcome__text-title'>
                {t('welcome_awards').toLocaleUpperCase()}
                <span className='image-icon'></span>
            </h2>
            <p className='welcome__text-subtext'>{t('advantage_awards')}</p>
        </div>
    </div>
  )
}
