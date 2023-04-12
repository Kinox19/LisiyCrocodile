import React from 'react'
import s from './MainBlock.module.scss'
import blockOneBg from '../../../../assets/images/mainPage/main1.png'

const MainBlock = () => {
  return (
    <div className={s.block}>
        <h1 className={s.heading}>ЛЫсый КРокодил</h1>
        <p className={s.text}>Концерты Лысого Крокодила в Москве и Санкт-Петербурге – скоро!</p>
        <button className={s.button}>Подробнее</button>
        <img className={s.image} src={blockOneBg} alt=''/>
    </div>
  )
}

export default MainBlock



