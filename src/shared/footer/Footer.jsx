import React from 'react'
import s from './Footer.module.scss'
import logo__footer from '../../assets/Logos/logo_footer.svg'

const Footer = () => {
  return (
    <div className={s.footer}>

      <div className={s.footer__wrapper}>

        <ul className={s.footer__connection}>
          <li className={s.footer__connection__point}><span className={s.point__accent}>сотрудничество:</span> +7 (921) 666-50-40</li>
          <li className={s.footer__connection__point}><span className={s.point__accent}>служба доставки:</span> +7 (911) 415-20-67</li>
          <li className={s.footer__connection__point}><span className={s.point__accent}>почта:</span> krokorock@gmail.com</li>
        </ul>


        <div className={s.footer__logo}>
          <img className={s.logo} src={logo__footer}></img>
          <p className={s.logo__name}>© 2019–2023 Лысый Крокодил</p>
        </div>

          <nav className={s.nav}>
            <ul className={s.footer__navigation__list}>
              <li><a className={s.footer__link} href="/">о нас</a></li>
              <li><a className={s.footer__link} href="/">музыка</a></li>
              <li><a className={s.footer__link} href="/">видео</a></li>
            </ul>
            <ul className={s.footer__navigation__list}>
              <li><a className={s.footer__link} href="/">мерч</a></li>
              <li><a className={s.footer__link} href="/">корзина</a></li>
              <li><a className={s.footer__link} href="/">контакты</a></li>
            </ul>
            <ul className={s.footer__navigation__list}>
              <li><a className={s.footer__link} href="/">оплата</a></li>
            </ul>
          </nav>

      </div>
    </div>

  )
}

export default Footer