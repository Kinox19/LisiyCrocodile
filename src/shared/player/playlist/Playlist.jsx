import React, { useContext } from 'react'
import playerContext from '../context/playerContext'
import s from './Playlist.module.scss'
import { useNavigate } from 'react-router-dom'

function Playlist() {
  const navigate = useNavigate();
  const { SetCurrent, currentSong, songslist } = useContext(playerContext)

  const handleAlbumChangeNext = () => {
    navigate('/muz2');
  }

  const handleAlbumChangePrev = () => {
    navigate('/muz4');
  }

  return (
    <div className={s.beforePlayer}>
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
          <p className={s.label}>Лысый крокодил / EP - demo</p>
          <h1 className={s.title}>стройматериалы</h1>
          <p className={s.description}>
          2020 год – желание написать что-то стоящее и осмысленное, насколько это было возможно.
          </p>
          <button className={s.button__play} onClick={() => {SetCurrent(songslist.fileUrl) }}>
            <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.1271 12.356C21.2751 13.1514 21.2751 14.8486 20.1271 15.644L3.13899 27.4137C1.81258 28.3327 5.35539e-07 27.3833 6.06073e-07 25.7697L1.63501e-06 2.23028C1.70555e-06 0.616645 1.81259 -0.332661 3.13899 0.586298L20.1271 12.356Z" fill="#BEFF00"/>
            </svg>
            Слушать
          </button>
        </div>
        <ul className={s.tracks}>
          {songslist.map((song, i) => (
            <li className={`${s.track__wrapper} ${currentSong ? 'selected' : ''}`}
                key={i}
                onClick={() => {
                  SetCurrent(i)
                  console.log(currentSong)
                }}
              >
              <div className={s.leftSide}>
                <button className={s.play}>
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
                <img src='https://i.ibb.co/x6LVGD5/cover-stroy-Demo.png' className={s.track__cover} alt='' />
                <div className={s.track__textInfo}>
                  <p className={s.track__name}>{song.title}</p>
                  <p className={s.track__artist}>{song.artist}</p>
                </div>
              </div>
              <div className={s.track__timeDownload}>
                <p className={s.track__time}>{song.time}</p>
                <button className={s.control__download}>
                      <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.95089 16.7963L16.6668 29.3631C16.842 29.5686 17.1593 29.5686 17.3345 29.3631L28.0504 16.7963C28.2933 16.5114 28.0909 16.0728 27.7165 16.0728H22.0228C21.7804 16.0728 21.584 15.8763 21.584 15.634V2.43877C21.584 2.19645 21.3875 2 21.1452 2H12.8561C12.6138 2 12.4173 2.19645 12.4173 2.43877V15.634C12.4173 15.8763 12.2209 16.0728 11.9785 16.0728H6.28477C5.91043 16.0728 5.70801 16.5114 5.95089 16.7963Z" fill="#81886E" stroke="#81886E" stroke-width="2.19387"/>
                      <path d="M2 34.6531V41.5611C2 41.8035 2.19645 41.9999 2.43877 41.9999H31.5612C31.8036 41.9999 32 41.8035 32 41.5611V34.6531" stroke="#81886E" stroke-width="2.19387"/>
                      </svg>
                </button>
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