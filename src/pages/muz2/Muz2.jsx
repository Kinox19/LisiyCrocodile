import React, { useState } from 'react';
import s from './Muz2.module.scss'
import playIcon from '../../assets/Logos/playIcon.svg'
import cover from '../../assets/images/mainPage/covers/cover_stroy2.png'
import tracks from './Muz2TrackList'
import controls_download from '../../assets/trackList/controls_download.svg';
import controls_play from '../../assets/trackList/controls_play.svg';
import coverTrack from '../../assets/trackList/track_cover_stroy.png';
import Player from '../../shared/player/Player';

const Muz2 = () => {

  const [id, setTrackId] = useState(null);

  const handleTrackClick = (id) => {
    setTrackId(id);
    console.log(id)
  };

  return (
    <div>
        <div className={s.main}>
        <img className={s.cover} src={cover} alt=''/>
        <div className={s.main__container}>
            <div className={s.text__container}>
                <p className={s.label}>Лысый крокодил / EP - remaster</p>
                <h1 className={s.title}>стройматериалы</h1>
                <p className={s.description}>2021-2022 год – повышение ставок. Мы росли вместе со своей аудиторией, в следствие чего поставили цель значительно повысить качество звука.</p>
                <button className={s.button__play}><img src={playIcon} alt=''></img>Слушать</button>
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

export default Muz2