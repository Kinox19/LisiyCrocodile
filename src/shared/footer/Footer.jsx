import React, { useState } from 'react';
import s from './Footer.module.scss';
import logo__footer from '../../assets/Logos/logo_footer.svg';

const Footer = () => {
  const [boldElement, setBoldElement] = useState(null);

  const handleMouseDown = (element) => {
    setBoldElement(element);
  };

  const handleMouseLeave = () => {
    setBoldElement(null);
  };

  return (
    <footer className={s.footer}>
      <div className={s.footer__fix}>
      <div className={s.footer__wrapper}>
        <ul className={s.footer__connection}>
          <li className={s.footer__connection__point}>
            <span className={s.point__accent}>сотрудничество: </span>
            <span
              className={boldElement === 'cooperation' ? `${s.numbers} ${s.bold}` : s.numbers}
              onMouseDown={() => handleMouseDown('cooperation')}
              onMouseLeave={handleMouseLeave}
            >
              <a className={s.tel} href='tel:+7 (921) 666-50-40'>+7 (921) 666-50-40</a>
            </span>
          </li>
          <li className={s.footer__connection__point}>
            <span className={s.point__accent}>служба доставки: </span>
            <span
              className={boldElement === 'delivery' ? `${s.numbers} ${s.bold}` : s.numbers}
              onMouseDown={() => handleMouseDown('delivery')}
              onMouseLeave={handleMouseLeave}
            >
              <a className={s.tel} href='tel:+7 (911) 415-20-67'>+7 (911) 415-20-67</a>
            </span>
          </li>
          <li className={s.footer__connection__point}>
            <span className={s.point__accent}>почта: </span>
            <span
              className={boldElement === 'mail' ? `${s.numbers} ${s.bold}` : s.numbers}
              onMouseDown={() => handleMouseDown('mail')}
              onMouseLeave={handleMouseLeave}
            >
              <a className={s.tel} href='mailto:krokorock@gmail.com'>krokorock@gmail.com</a>
            </span>
          </li>
        </ul>

        <div className={s.footer__logo}>
          <img className={s.logo} src={logo__footer} alt=""></img>
          <p className={s.logo__name}>© 2019–2023 Лысый Крокодил</p>
        </div>

        <nav className={s.nav}>
          <ul className={s.footer__navigation__list}>
            <li>
              <a className={s.footer__link} href="/home">
                о нас
              </a>
            </li>
            <li>
              <a className={s.footer__link} href="/home">
                музыка
              </a>
            </li>
            <li>
              <a className={s.footer__link} href="/home">
                видео
              </a>
            </li>
          </ul>
          <ul className={s.footer__navigation__list}>
            <li>
              <a className={s.footer__link} href="/home">
                мерч
              </a>
            </li>
            <li>
              <a className={s.footer__link} href="/home">
                корзина
              </a>
            </li>
            <li>
              <a className={s.footer__link} href="/home">
                контакты
              </a>
            </li>
          </ul>
          <ul className={s.footer__navigation__list}>
            <li>
              <a className={s.footer__link} href="/home">
                оплата
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
