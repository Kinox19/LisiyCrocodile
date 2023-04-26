
import React from 'react'
import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import s from './Player.module.scss'
import playerImg from '../../assets/images/player/playerImg.png'
import trackBack from '../../assets/player/trackBack.svg'
import trackNext from '../../assets/player/trackNext.svg'
import volumeYes from '../../assets/player/volume.svg'
import tracks from '../../pages/muz1/Muz1TrackList'
const Player = ({id}) => {
    const track = tracks.find((track) => track.id === id);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
      min: 0,
      sec: 0
    });
    const [currTime, setCurrTime] = useState({
      min: 0,
      sec: 0
    });
    const [seconds, setSeconds] = useState();
    const [play, { pause, duration, sound }] = useSound(track.src);
    useEffect(() => {
      if (duration) {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        setTime({
          min: min,
          sec: secRemain
        });
      }
    }, [isPlaying, duration]);
   
    useEffect(() => {
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek([]));
          const newTime = sound.seek([]);
          const newMin = Math.floor(newTime / 60);
          const newSec = Math.floor(newTime % 60);
          setCurrTime({
            min: newMin,
            sec: newSec
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [sound]);
    const playingButton = () => {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
      } else {
        play();
        setIsPlaying(true);
      }
    };
    const [volume, setVolume] = useState(0.5);
    const handleVolumeChange = (e) => {
      const newVolume = e.target.value;
      setVolume(newVolume);
      sound.volume(newVolume);
    };

  return (
    <div className={s.main}>
        <div className={s.player__wrapper}>
            <div className={s.player__info}>
                <img className={s.current__image} src={playerImg} alt=''/>
                <div className={s.current__trackArtist}>
                    <p className={s.current__track}>{track.name}</p>
                    <p className={s.current__artist}>{track.artist}</p>
                </div>
            </div>
            <div className={s.player__controls}>
                <div className={s.player__controlsUp}>
                    <button className={s.button}><img src={trackBack} alt=''/></button>
                    {!isPlaying ? (
                        <button className={s.buttonPlay} onClick={playingButton} >
                          <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="38" cy="38" r="37.25" stroke="#BEFF00" stroke-width="1.5"/>
                          <path d="M49.7319 36.3744C50.8451 37.1723 50.8451 38.8277 49.7319 39.6256L33.4151 51.32C32.0917 52.2685 30.25 51.3226 30.25 49.6944L30.25 26.3056C30.25 24.6774 32.0917 23.7315 33.4151 24.68L49.7319 36.3744Z" fill="#BEFF00"/>
                          </svg>
                        </button>
                    ) : (
                        <button className={s.buttonPause} onClick={playingButton}>
                          <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="38" cy="38" r="37.25" stroke="#BEFF00" stroke-width="1.5"/>
                          <rect x="42" y="23" width="6" height="30" rx="3" fill="#BEFF00"/>
                          <rect x="28" y="23" width="6" height="30" rx="3" fill="#BEFF00"/>
                          </svg>
                        </button>
                    )}
                    <button className={s.button}><img src={trackNext} alt=''/></button>
                </div>
                <div className={s.player__controlsDown}>
                    <p className={s.player__trackTime}>{currTime.min}:{currTime.sec < 10 ? `0${currTime.sec}` : currTime.sec}</p>
                    <input className={s.player__playBar}
                        type='range'
                        min="0"
                        max={duration / 1000}
                        default="0"
                        value={seconds}
                        onChange={(e) => {
                            sound.seek([e.target.value]);
                            }}
                    />
                    <p className={s.player__trackTime}>{time.min}:{time.sec < 10 ? `0${time.sec}` : time.sec}</p>
                </div>
            </div>
            <div className={s.player__controlsVolume}>
                <img src={volumeYes} alt=''/>
                <input type='range'
                className={s.player__trackVolume}
                value={volume}
                min='0'
                max='1'
                step='0.01'
                onChange={handleVolumeChange}>
                </input>
            </div>
        </div>
    </div>
  )
}
export default Player
