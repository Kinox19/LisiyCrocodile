import React from 'react'
import s from './Muz4.module.scss'
import playIcon from '../../assets/Logos/playIcon.svg'
import cover from '../../assets/images/mainPage/covers/cover_313.png'

const Muz4 = () => {
  return (
    <div>
      <div className={s.main}>
        <img className={s.cover} src={cover} alt=''/>
        <div className={s.main__container}>
            <div className={s.text__container}>
                <p className={s.label}>Лысый крокодил / Ep - demo</p>
                <h1 className={s.title}>кабинет 313</h1>
                <p className={s.description}>Вы не поверите: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className={s.button__play}><img src={playIcon} alt=''></img>Слушать</button>
            </div>

            <div className={s.tracks}>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Muz4