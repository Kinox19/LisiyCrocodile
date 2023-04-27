import React, { useContext } from 'react'
import playerContext from '../context/playerContext'
import s from './Playlist.module.scss'
import { useNavigate } from 'react-router-dom'

function Playlist() {
  const navigate = useNavigate();
  const { SetCurrent, currentSong, songslist } = useContext(playerContext)

  const handleAlbumChangeNext = () => {
    navigate('/muz4');
  }

  return (
    <div className={s.beforePlayer}>
    <div className={s.main}>
      <div className={s.coverChange}></div>
      <div className={s.main__container}>
      <div className={s.upperNav}>
        <div className={s.text__container}>
            <p className={s.label}>Лысый крокодил / single</p>
            <div className={s.titleButton}>
              <h1 className={s.title}>они нам верят</h1>
              <button className={s.buttonNextAlbum} onClick={handleAlbumChangeNext}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="33.5" transform="rotate(-180 35 35)" stroke="#BEFF00" stroke-width="3"/>
                <path d="M38.0023 44.4959C37.2813 45.2975 37.2813 46.5972 38.0023 47.3988C38.7232 48.2004 39.8922 48.2004 40.6131 47.3988L50.4593 36.4514C50.8198 36.0506 51 35.5253 51 35C51 34.7217 50.9502 34.4563 50.8599 34.2143C50.7698 33.9722 50.6363 33.7454 50.4593 33.5486L40.6131 22.6012C39.8922 21.7996 38.7232 21.7996 38.0023 22.6012C37.2813 23.4028 37.2813 24.7025 38.0023 25.5041L44.6968 32.9474L20.8462 32.9474C19.8266 32.9474 19 33.8664 19 35C19 36.1336 19.8266 37.0526 20.8462 37.0526L44.6968 37.0526L38.0023 44.4959Z" fill="#BEFF00"/>
              </svg>
            </button>
            </div>
            <div className={s.twoTexts}>
              <p className={s.description}>2020 – проба пера в области звукорежиссуры. Для данной композиции впервые записаны 2 ритм-гитары, что активно используется в творчестве и по сей день.</p>
              <p className={s.button__text}>к следующему альбому</p>
            </div>
            <button className={s.button__play}>
              <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1271 12.356C21.2751 13.1514 21.2751 14.8486 20.1271 15.644L3.13899 27.4137C1.81258 28.3327 5.35539e-07 27.3833 6.06073e-07 25.7697L1.63501e-06 2.23028C1.70555e-06 0.616645 1.81259 -0.332661 3.13899 0.586298L20.1271 12.356Z" fill="#BEFF00"/>
              </svg>
              Слушать
            </button>
          </div>
        </div>
        <ul className={s.tracks}>
          {songslist.map((song, i) => (

            <li className={`${s.track__wrapper} ${currentSong ? 'selected' : ''}`}
                key={i}
              >
              <div className={s.leftSide}>
                <button className={s.play} onClick={() => {SetCurrent(i) ;console.log(currentSong)}}>
                {currentSong === i ? (
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="38" cy="38" r="37.25" stroke="#BEFF00" strokeWidth="1.5" />
                  <path d="M49.7319 36.3744C50.8451 37.1723 50.8451 38.8277 49.7319 39.6256L33.4151 51.32C32.0917 52.2685 30.25 51.3226 30.25 49.6944L30.25 26.3056C30.25 24.6774 32.0917 23.7315 33.4151 24.68L49.7319 36.3744Z" fill="#BEFF00" />
                </svg>
              ) : (
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="38" cy="38" r="37.25" stroke="#81886E" strokeWidth="1.5" />
                  <path d="M49.7319 36.3744C50.8451 37.1723 50.8451 38.8277 49.7319 39.6256L33.4151 51.32C32.0917 52.2685 30.25 51.3226 30.25 49.6944L30.25 26.3056C30.25 24.6774 32.0917 23.7315 33.4151 24.68L49.7319 36.3744Z" fill="#81886E" />
                </svg>
              )}
                </button>
                <img img src="https://i.ibb.co/9rxcQX0/cover-oni.png" alt="cover-oni" className={s.track__cover} />
                <div className={s.track__textInfo}>
                  <p className={s.track__name}>{song.title}</p>
                  <p className={s.track__artist}>{song.artist}</p>
                </div>
              </div>
              <div className={s.track__timeDownload}>
                <p className={s.track__time}>{song.time}</p>
                <a href={song.downloadUrl} download>
                  <button className={s.control__download}>
                        <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={s.pathNeeded} d="M5.95089 16.7963L16.6668 29.3631C16.842 29.5686 17.1593 29.5686 17.3345 29.3631L28.0504 16.7963C28.2933 16.5114 28.0909 16.0728 27.7165 16.0728H22.0228C21.7804 16.0728 21.584 15.8763 21.584 15.634V2.43877C21.584 2.19645 21.3875 2 21.1452 2H12.8561C12.6138 2 12.4173 2.19645 12.4173 2.43877V15.634C12.4173 15.8763 12.2209 16.0728 11.9785 16.0728H6.28477C5.91043 16.0728 5.70801 16.5114 5.95089 16.7963Z" fill="#81886E" stroke="#81886E" stroke-width="2.19387"/>
                        <path d="M2 34.6531V41.5611C2 41.8035 2.19645 41.9999 2.43877 41.9999H31.5612C31.8036 41.9999 32 41.8035 32 41.5611V34.6531" stroke="#81886E" stroke-width="2.19387"/>
                        </svg>
                  </button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Playlist