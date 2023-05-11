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
import { Link, animateScroll as scroll } from 'react-scroll';


const Main = () => {

  const links = [
    { id: 'section1', label: 'Section 1' },
    { id: 'section2', label: 'Section 2' },
    { id: 'section3', label: 'Section 3' },
  ];

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let offset;
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        offset = 1000;
      } else if (screenWidth >= 768) {
        offset = 700;
      } else if (screenWidth >= 320) {
        offset = 300;
      } else {
        offset = 1500;
      }
  
      if (window.pageYOffset > offset) {
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

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className={s.main}>
          <MainBlock/>
          <AboutUsBlock/>
          <MusicBlock/>
          <VideoBlock/>
          <MerchBlock/>
          <ContactsBlock/>
          {showScrollButton && <ScrollToTopButton />}
          <div className={s.paddingBlock}>
          </div>
    </div>
  )
}

export default Main