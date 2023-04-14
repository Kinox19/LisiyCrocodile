import React from 'react'
import s from './Main.module.scss'
import MainBlock from './components/mainBlock/MainBlock'
import ContactsBlock from './components/contactsBlock/ContactsBlock'
import AboutUsBlock from './components/aboutUsBlock/AboutUsBlock'
import MusicBlock from './components/musicBlock/MusicBlock'
import VideoBlock from './components/videoBlock/VideoBlock'
import MerchBlock from './components/merchBlock/MerchBlock'
import ScrollToTopButton from '../../shared/scrollTotopButton/ScrollToTopButton'
import { useState, useEffect } from 'react'


const Main = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1500 ) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <div className={s.main}>
        <div className={s.main__container}>
          <MainBlock/>
          <AboutUsBlock/>
          <MusicBlock/>
          <VideoBlock/>
          <MerchBlock/>
          <ContactsBlock/>
          {showScrollButton && <ScrollToTopButton />}
        </div>
        
    </div>
  )
}

export default Main