import React from 'react'
import s from './Header.module.scss'
import logo_header from '../../assets/Logos/logo_header.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const cartItems = useSelector(state => state.products.cart);
  const navigate = useNavigate();

  const links = [
    { id: 'about', label: 'о нас', to: '/home' },
    { id: 'music', label: 'музыка', to: '/home' },
    { id: 'video', label: 'видео', to: '/home' },
    { id: 'merch', label: 'мерч', to: '/home' },
    { id: 'contacts', label: 'контакты', to: '/home' },
    { id: 'cart', label: 'корзина', to: '/cart' },
  ];

  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const handleHome = () => {
    navigate('/home')
  }

  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__container}>
          <a href='/home' className={s.header__containerLink}>
            <div className={s.logo__container}>
              <img className={s.logo} src={logo_header} alt=''/>
              <p className={s.logo__name}>лысый крокодил</p>
            </div>
          </a>

          <nav>
            <ul className={s.header__menu}>
              {links.map((link) => (
                <li key={link.id} className={s.header__link}>
                  <a className={s.header__href} href={`${link.to}#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
            {cartItems.length > 0 && (
              <div className={s.cart__length}><span className={s.cart__lengthNumber}>{cartItems.length}</span></div>
            )}
          </nav>
        </div>
        </div>

        <div className={s.header__wrapperBurg}>
          <a className={s.logo__containerBurg} href='/home'>
              <img className={s.logo} src={logo_header} alt=''/>
              <p className={s.logo__name}>лысый крокодил</p>
          </a>
          <button className={s.burger__button} onClick={handleOpen}>
            <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="13" width="23.0006" height="2" rx="1" fill="#BEFF00"/>
              <rect y="6.5" width="23.0006" height="2" rx="1" fill="#BEFF00"/>
              <rect width="23.0006" height="2" rx="1" fill="#BEFF00"/>
            </svg>
          </button>
        </div>

        <div className={`${s.burger__popUp} ${isActive ? s.burger__popUp_active : ''}`}></div>
        <div className={`${s.burger__background} ${isActive ? s.burger__background_active : ''}`}>
            <button className={s.burger__icon} onClick={handleClose}>
              <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="13" width="23.0006" height="2" rx="1" fill="#BEFF00"/>
                <rect y="6.5" width="23.0006" height="2" rx="1" fill="#BEFF00"/>
                <rect width="23.0006" height="2" rx="1" fill="#BEFF00"/>
              </svg>
            </button>
              <nav>
              <ul className={s.header__menu}>
                {links.map((link) => (
                  <li key={link.id} className={s.header__link}>
                    <a className={s.header__href} href={`${link.to}#${link.id}`} onClick={handleClose}>{link.label} </a>
                  </li>
                ))}
              </ul>
              {cartItems.length > 0 && (
                <div className={s.cart__length}><span className={s.cart__lengthNumber}>{cartItems.length}</span></div>
              )}
            </nav>

            <button className={s.button__toMain} onClick={handleHome}>На главную</button>
          </div>
    </header>
  );
}

export default Header;
