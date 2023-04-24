import React from 'react'
import s from './Muz3.module.scss'
import playIcon from '../../assets/Logos/playIcon.svg'
import cover from '../../assets/images/mainPage/covers/cover_oni.png'

const Muz3 = () => {
  return (
    <div>
      <div className={s.main}>
        <img className={s.cover} src={cover} alt=''/>
        <div className={s.main__container}>
            <div className={s.text__container}>
                <p className={s.label}>Лысый крокодил / single</p>
                <h1 className={s.title}>они нам верят</h1>
                <p className={s.description}>2020 – проба пера в области звукорежиссуры. Для данной композиции впервые записаны 2 ритм-гитары, что активно используется в творчестве и по сей день.</p>
                <button className={s.button__play}><img src={playIcon} alt=''></img>Слушать</button>
            </div>

            <div className={s.tracks}>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Muz3