import React from 'react'
import s from './AboutUsBlock.module.scss'
import image from '../../../../assets/images/mainPage/aboutUs.png'
import imageMob from '../../../../assets/images/mainPage/aboutUsBack.png'

const AboutUsBlock = () => {
  return (
    <div className={s.block} id='about'>
      <h2 className={s.title}>О нас</h2>
      <div className={s.textContainer}>
        <p className={s.text}>Привет человечество.<br/> Это группа Лысый Крокодил.</p>
        <p className={s.text}>В&nbsp;2019 году наш балаган
                              белорусского розлива был основан двумя школьными друзьями &mdash;
                              Филипович Николай (вокал), Буйницкий Роман (гитара).<br/>
                              Сейчас, выбравшись за&nbsp;пределы
                              тесных коморок и&nbsp;подвалов,
                              мы&nbsp;пишем и&nbsp;играем<br/>
                              независимую рок музыку для всех,
                              кто в&nbsp;этом нуждается.
        </p>
        <p className={s.text}>Мужайтесь, друзья, нам есть, что показать!</p>
      </div>
      <img className={s.img} src={image} alt=''/>
      <img className={s.imgMob} src={imageMob} alt=''/>
    </div>
  )
}

export default AboutUsBlock