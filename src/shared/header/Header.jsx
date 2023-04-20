import React from 'react'
import s from './Header.module.scss'
import logo_header from '../../assets/Logos/logo_header.svg'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const Header = () => {

  const links = [
    { id: 'about', label: 'о нас', to: '/home' },
    { id: 'music', label: 'музыка', to: '/home' },
    { id: 'video', label: 'видео', to: '/home' },
    { id: 'merch', label: 'мерч', to: '/home' },
    { id: 'contacts', label: 'контакты', to: '/home' },
    { id: 'cart', label: 'корзина', to: '/cart' },
  ];

  const handleClick = (link) => {
      window.location.href = link.to + '#' + link.id;
  };


  return (
    <header className={s.header__wrapper}>
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
                {link.to === '/' ? (
                  <ScrollLink to={link.id} smooth={true} duration={500} offset={1000} onClick={() => handleClick(link)}>
                    {link.label}
                  </ScrollLink>
                ) : (
                  <Link to={link.to} onClick={() => handleClick(link)}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* {cart.length > 0 && (
            <div className={s.cart__length}><span className={s.cart__lengthNumber}>{cart.length}</span></div>
          )} */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
