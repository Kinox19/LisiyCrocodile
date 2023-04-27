
import React, { useState, useEffect, useRef, useContext } from "react";
import playerContext from "../context/playerContext";
import s from './Controls.module.scss'



function Controls() {
  
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    playing,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(playerContext);



  const audio = useRef("audio_tag");
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };
  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();
  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };
  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };
  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);
  const handleVolumeClick = () => {
    if (statevolum === 0) {
      handleVolume(0.3);
    } else {
      handleVolume(0);
    }
  };
  return (
    <div className={s.main}>
      <div className={s.player__wrapper}>
      <div className={s.player__info}>
        <img className={s.current__image} src="https://i.ibb.co/qjjYkvC/cover-stroy.png" alt="cover-stroy" />
        <div className={s.current__trackArtist}>
          <p className={s.current__track}>{songslist[currentSong].title}</p>
          <p className={s.current__artist}>{songslist[currentSong].artist}</p>
        </div>
      </div>
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songslist[currentSong].fileUrl}
      />
    <div className={s.player__controls}>
      <div className={s.player__controlsUp}>
        <button className={s.buttonChange} onClick={prevSong}>
          <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.37871 13.9924C1.67825 13.5162 1.67825 12.4838 2.37871 12.0076L15.6048 3.01612C16.4015 2.4745 17.4794 3.04515 17.4794 4.00851L17.4794 21.9915C17.4794 22.9549 16.4015 23.5255 15.6048 22.9839L2.37871 13.9924Z" fill="#BEFF00"/>
            <rect x="2.75977" y="23.2144" width="2.76008" height="20.4286" rx="1.38004" transform="rotate(-180 2.75977 23.2144)" fill="#BEFF00"/>
          </svg>
        </button>
        <button className={s.button} onClick={() => {togglePlaying(); toggleAudio();}}>
          <button className={!playing ? "" : `${s.hideButton}`}>
            <svg className={s.svgInButton} width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="38" cy="38" r="37.25" stroke="#BEFF00" stroke-width="1.5"/>
              <path className={s.fillOnHover} d="M49.7319 36.3744C50.8451 37.1723 50.8451 38.8277 49.7319 39.6256L33.4151 51.32C32.0917 52.2685 30.25 51.3226 30.25 49.6944L30.25 26.3056C30.25 24.6774 32.0917 23.7315 33.4151 24.68L49.7319 36.3744Z" fill="#BEFF00"/>
            </svg>
          </button>
          <button className={!playing ? `${s.hideButton}` : ""}>
            <svg className={s.svgInButton} width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="38" cy="38" r="37.25" stroke="#BEFF00" stroke-width="1.5"/>
              <rect className={s.fillOnHover} x="42" y="23" width="6" height="30" rx="3" fill="#BEFF00"/>
              <rect className={s.fillOnHover} x="28" y="23" width="6" height="30" rx="3" fill="#BEFF00"/>
            </svg>
          </button>
        </button>
        <button className={s.buttonChange}onClick={nextSong}>
          <svg  width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6213 12.0076C21.3217 12.4838 21.3217 13.5162 20.6213 13.9924L7.39523 22.9839C6.59854 23.5255 5.52058 22.9549 5.52058 21.9915L5.52058 4.00851C5.52058 3.04514 6.59854 2.4745 7.39524 3.01612L20.6213 12.0076Z" fill="#BEFF00"/>
            <rect x="20.2402" y="2.78564" width="2.76008" height="20.4286" rx="1.38004" fill="#BEFF00"/>
          </svg>
        </button>
      </div>

        <div className={s.player__controlsDown}>
          <p className={s.player__trackTime}>{fmtMSS(currentTime)}</p>
          <input className={s.player__playBar}
            onChange={handleProgress}
            value={dur ? (currentTime * 100) / dur : 0}
            type="range"
            name="progresBar"
            id="prgbar"
          />
          <p className={s.player__trackTime}>{fmtMSS(dur)}</p>
        </div>
      </div>
      <div className={s.player__controlsVolume}>
      <button className={s.volume__button} onClick={handleVolumeClick}>

          {statevolum === 0 ?
            <svg className={s.volumeSvg} width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={s.pathToFill} d="M1 16.6706H5.88911L16.79 23V1L5.88911 7.38757H1V16.6706Z" fill="none" stroke="#BEFF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 8L29.5 16" stroke="#BEFF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.5 8L22 16" stroke="#BEFF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            :
            <svg className={s.volumeSvg} width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={s.pathToFill} d="M1 16.6706H5.89024L16.7937 23V1L5.89024 7.38757H1V16.6706Z" fill="none" stroke="#BEFF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.333 18.8823C24.7381 14.1535 24.7018 9.57015 21.333 5.13232" stroke="#BEFF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.585 22.6944C30.1371 15.4193 30.1371 8.31875 25.585 1.39282" stroke="#BEFF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          }
        </button>
        <input className={s.player__trackVolume}
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
    </div>
    </div>
    </div>
  );
}
export default Controls;
