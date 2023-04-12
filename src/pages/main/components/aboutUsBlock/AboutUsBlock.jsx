import React from 'react'
import s from './AboutUsBlock.module.scss'
import image from '../../../../assets/images/mainPage/aboutUs.png'

const AboutUsBlock = () => {
  return (
    <div className={s.block}>
      <h2 className={s.title}>О нас</h2>
      <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <img className={s.img} src={image} alt=''/>
    </div>
  )
}

export default AboutUsBlock