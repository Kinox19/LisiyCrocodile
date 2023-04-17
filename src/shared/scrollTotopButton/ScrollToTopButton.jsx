import React from 'react';
import s from './ScrollToTopButton.module.scss';



const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={s.scrollToTopBtn} onClick={handleClick}>
      <svg className={s.svgDefault} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="33.5" transform="rotate(90 35 35)" stroke="#BEFF00" stroke-width="3"/>
        <path d="M44.4959 31.9977C45.2975 32.7187 46.5972 32.7187 47.3988 31.9977C48.2004 31.2768 48.2004 30.1078 47.3988 29.3869L36.4514 19.5407C36.0506 19.1802 35.5253 19 35 19C34.7217 19 34.4563 19.0498 34.2143 19.1401C33.9722 19.2302 33.7454 19.3637 33.5486 19.5407L22.6012 29.3869C21.7996 30.1078 21.7996 31.2768 22.6012 31.9977C23.4028 32.7187 24.7025 32.7187 25.5041 31.9977L32.9474 25.3032L32.9474 49.1538C32.9474 50.1734 33.8664 51 35 51C36.1336 51 37.0526 50.1734 37.0526 49.1538L37.0526 25.3032L44.4959 31.9977Z" fill="#BEFF00"/>
      </svg>

      <svg className={s.svgHover} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="33.5" transform="rotate(90 35 35)" fill="#BEFF00" stroke="#BEFF00" stroke-width="3"/>
      <path d="M44.4959 31.9977C45.2975 32.7187 46.5972 32.7187 47.3988 31.9977C48.2004 31.2768 48.2004 30.1078 47.3988 29.3869L36.4514 19.5407C36.0506 19.1802 35.5253 19 35 19C34.7217 19 34.4563 19.0498 34.2143 19.1401C33.9722 19.2302 33.7454 19.3637 33.5486 19.5407L22.6012 29.3869C21.7996 30.1078 21.7996 31.2768 22.6012 31.9977C23.4028 32.7187 24.7025 32.7187 25.5041 31.9977L32.9474 25.3032L32.9474 49.1538C32.9474 50.1734 33.8664 51 35 51C36.1336 51 37.0526 50.1734 37.0526 49.1538L37.0526 25.3032L44.4959 31.9977Z" fill="black" stroke="black" stroke-linecap="round"/>
      </svg>

    </button>
  );
};

export default ScrollToTopButton;
