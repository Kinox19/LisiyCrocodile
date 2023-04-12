import React from 'react'
import s from './Main.module.scss'
import MainBlock from './components/mainBlock/MainBlock'
import ContactsBlock from './components/contactsBlock/ContactsBlock'
import AboutUsBlock from './components/aboutUsBlock/AboutUsBlock'
import MusicBlock from './components/musicBlock/MusicBlock'
import VideoBlock from './components/videoBlock/VideoBlock'
import MerchBlock from './components/merchBlock/MerchBlock'


const Main = () => {
  return (
    <div className={s.main}>
        <div className={s.main__container}>
          <MainBlock/>
          <AboutUsBlock/>
          <MusicBlock/>
          <VideoBlock/>
          <MerchBlock/>
          <ContactsBlock/>
        </div>
        
    </div>
  )
}

export default Main