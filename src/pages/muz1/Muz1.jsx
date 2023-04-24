import React, { useState } from 'react';
import s from './Muz1.module.scss';
import cover from '../../assets/images/mainPage/covers/cover_stroy1.png';
import playIcon from '../../assets/Logos/playIcon.svg';
import tracks from './Muz1TrackList';
import controls_download from '../../assets/trackList/controls_download.svg';
import controls_play from '../../assets/trackList/controls_play.svg';
import coverTrack from '../../assets/trackList/track_cover_stroy.png';
import Player from '../../shared/player/Player';

const Muz1 = () => {
  
  const [id, setTrackId] = useState(null);

  const handleTrackClick = (id) => {
    setTrackId(id);
    console.log(id)
  };

  return (
    <div className={s.beforePlayer}>
      <div className={s.main}>
        <img className={s.cover} src={cover} alt='' />
        <div className={s.main__container}>
          <div className={s.text__container}>
            <p className={s.label}>Лысый крокодил / EP - demo</p>
            <h1 className={s.title}>стройматериалы</h1>
            <p className={s.description}>
            2020 год – желание написать что-то стоящее и осмысленное, насколько это было возможно.
            </p>
            <button className={s.button__play}>
              <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1271 12.356C21.2751 13.1514 21.2751 14.8486 20.1271 15.644L3.13899 27.4137C1.81258 28.3327 5.35539e-07 27.3833 6.06073e-07 25.7697L1.63501e-06 2.23028C1.70555e-06 0.616645 1.81259 -0.332661 3.13899 0.586298L20.1271 12.356Z" fill="#BEFF00"/>
              </svg>
              Слушать
            </button>
          </div>

          <div className={s.tracks}>
            {tracks.map((track) => (
              <div key={track.id} className={s.track__wrapper}>
                <div className={s.leftSide}>
                  <button className={s.play} onClick={() => handleTrackClick(track.id)}>
                    <img src={controls_play} className={s.control__play} alt='' />
                  </button>
                  <img src={coverTrack} className={s.track__cover} alt='' />
                  <div className={s.track__textInfo}>
                    <p className={s.track__name}>{track.name}</p>
                    <p className={s.track__artist}>{track.artist}</p>
                  </div>
                </div>
                <div className={s.track__timeDownload}>
                  <p className={s.track__time}>{track.time}</p>
                  <img src={controls_download} className={s.control__download} alt='' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {id && <Player id={id} />}
    </div>
  );
};

export default Muz1;
