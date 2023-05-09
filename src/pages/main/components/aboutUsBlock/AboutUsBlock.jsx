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
        <p className={s.text}>В&nbsp;2019 году наш балаган <br/>
                              белорусского розлива был основан <br/> двумя школьными друзьями &mdash; <br/>
                              Филипович Николай (вокал), <br/> Буйницкий Роман (гитара).<br/>
                              Сейчас, выбравшись за&nbsp;пределы <br/>
                              тесных коморок и&nbsp;подвалов,
                              мы&nbsp;пишем <br/> и&nbsp;играем
                              независимую рок музыку <br/> для всех,
                              кто в&nbsp;этом нуждается.
        </p>
        <p className={s.text}>Мужайтесь, друзья, <br/> нам есть, что показать!</p>
      </div>
      <img className={s.img} src={image} alt=''/>
      <img className={s.imgMob} src={imageMob} alt=''/>
    </div>
  )
}

export default AboutUsBlock