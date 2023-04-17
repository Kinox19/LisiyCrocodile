import React from 'react'
import s from './ContactsBlock.module.scss'
import qrCode from '../../../../assets/Logos/qr.svg'
import logo from '../../../../assets/Logos/logo_big.svg'
import picBack from '../../../../assets/images/mainPage/bottomBlock.png'

const ContactsBlock = () => {
  return (
    <div className={s.block} id='contacts'>
        <h2 className={s.title}>Контакты</h2>
        <div className={s.qr__container}>
            <img className={s.qr__image} src={qrCode} alt=''></img>
            <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <img className={s.picBack} src={picBack} alt=''></img>
    </div>
  )
}

export default ContactsBlock