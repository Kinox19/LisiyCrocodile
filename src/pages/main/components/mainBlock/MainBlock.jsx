import React from 'react'
import s from './MainBlock.module.scss'

const MainBlock = () => {
  return (
    <div className={s.block}>
      <div className={s.textInfo}>
        <h1 className={s.heading}>ЛЫсый КРокодил</h1>
        <p className={s.text}>Концерты Лысого Крокодила в&nbsp;Москве и&nbsp;Санкт-Петербурге&nbsp;&mdash; скоро!</p>
        <button className={s.button}>Подробнее</button>
      </div>
    </div>
  )
}

export default MainBlock



