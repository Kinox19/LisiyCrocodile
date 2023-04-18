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
              Вы не поверите: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className={s.button__play}>
              <img src={playIcon} alt='' />
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
