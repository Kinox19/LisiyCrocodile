import React from 'react'
import s from './Header.module.scss'
import logo_header from '../../assets/Logos/logo_header.svg'

const Header = () => {
  return (
    <div className={s.header__wrapper}>
      <div className={s.header__container}>
          <div className={s.logo__container}>
            <img className={s.logo} src={logo_header} alt=''/>
            <p className={s.logo__name}>лысый крокодил</p>
          </div>

          <nav>
            <ul className={s.header__menu}>
                <li>о нас</li>
                <li>музыка</li>
                <li>видео</li>
                <li>мерч</li>
                <li>контакты</li>
                <li>корзина</li>
            </ul>
          </nav>

      </div>
    </div>
  )
}

export default Header