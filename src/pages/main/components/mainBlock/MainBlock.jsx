import React from 'react'
import s from './MainBlock.module.scss'

const MainBlock = () => {
  return (
    <div className={s.block}>
      <div className={s.textInfo}>
        <h1 className={s.heading}>ЛЫсый КРокодил</h1>
        <p className={s.text}>Концерты Лысого Крокодила в&nbsp;Москве и&nbsp;Санкт-Петербурге&nbsp;<br/>&mdash; скоро!</p>
        <p className={s.mobileText}>Концерты Крокодила<br/> в&nbsp;Москве и&nbsp;Питере&nbsp;&mdash; скоро!</p>
        <a href="/home#video">
          <button className={s.button}>Подробнее</button>
        </a>
      </div>
    </div>
  )
}

export default MainBlock



