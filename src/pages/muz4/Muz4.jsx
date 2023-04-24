import React from 'react'
import s from './Muz4.module.scss'
import playIcon from '../../assets/Logos/playIcon.svg'
import { useNavigate } from 'react-router-dom';

const Muz4 = () => {
  const navigate = useNavigate();

  const handleAlbumChangeNext = () => {
    navigate('/muz1');
  }

  const handleAlbumChangePrev = () => {
    navigate('/muz3');
  }
  return (
    <div>
      <div className={s.main}>
      <div className={s.coverChange}>
          <button className={s.buttonAlbumLeft} onClick={handleAlbumChangePrev}>
            <svg width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2012 41.0288C18.1361 42.3237 16.4093 42.3237 15.3443 41.0288L0.798797 23.3446C-0.266268 22.0497 -0.266268 19.9503 0.798798 18.6554L15.3443 0.971176C16.4093 -0.323723 18.1361 -0.323723 19.2012 0.971176C20.2663 2.26607 20.2663 4.36551 19.2012 5.66041L6.58422 21L19.2012 36.3396C20.2663 37.6345 20.2663 39.7339 19.2012 41.0288Z" fill="#BEFF00"/>
            </svg>
          </button>
           <button className={s.buttonAlbumRight} onClick={handleAlbumChangeNext}>
            <svg width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.7988 0.971172C1.86387 -0.323724 3.59068 -0.323723 4.65575 0.971173L19.2012 18.6554C20.2663 19.9503 20.2663 22.0497 19.2012 23.3446L4.65574 41.0288C3.59067 42.3237 1.86386 42.3237 0.798792 41.0288C-0.266274 39.7339 -0.266273 37.6345 0.798793 36.3396L13.4158 21L0.798799 5.66041C-0.266267 4.36551 -0.266267 2.26607 0.7988 0.971172Z" fill="#BEFF00"/>
            </svg>
          </button>
        </div>
        <div className={s.main__container}>
            <div className={s.text__container}>
                <p className={s.label}>Лысый крокодил / Ep - demo</p>
                <h1 className={s.title}>кабинет 313</h1>
                <p className={s.description}>2019 год – наша первая коллекция компульсивно-импульсивного, записанная на диктофон в школьном кабинете.</p>
              <button className={s.button__play}>
                <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.1271 12.356C21.2751 13.1514 21.2751 14.8486 20.1271 15.644L3.13899 27.4137C1.81258 28.3327 5.35539e-07 27.3833 6.06073e-07 25.7697L1.63501e-06 2.23028C1.70555e-06 0.616645 1.81259 -0.332661 3.13899 0.586298L20.1271 12.356Z" fill="#BEFF00"/>
                </svg>
                Слушать
              </button>
            </div>

            <div className={s.tracks}>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Muz4