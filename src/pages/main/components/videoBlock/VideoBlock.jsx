import React from 'react'
import s from './VideoBlock.module.scss'

const VideoBlock = () => {
  return (
    <div className={s.container} id='video'>
      <h2 className={s.title}>видео</h2>
      <div className={s.blocks}>
      <div className={s.blockLeft}>
        <p className={s.text}>Мы&nbsp;шагнули на&nbsp;этот лёд. 26-го июля в&nbsp;Питере и&nbsp;28-го в&nbsp;Москве, в&nbsp;поддержку альбома &laquo;Стройматериалы&raquo; состоится <br/> долгожданный дебют Крокодила <br/> в&nbsp;столицах Необъятной. <br/> <br/> Пленных не&nbsp;берём&nbsp;&mdash; расстрел на&nbsp;месте. <br/> Приятного аппетита.</p>
        <p className={s.textMob}>Мы&nbsp;шагнули на&nbsp;этот лёд.<br/> 26-го июля в&nbsp;Питере и&nbsp;28-го в&nbsp;Москве, в&nbsp;поддержку альбома &laquo;Стройматериалы&raquo; состоится долгожданный дебют Крокодила в&nbsp;столицах Необъятной.</p>
        <p className={s.textMob}>Пленных не берём – расстрел на месте. Приятного аппетита.</p>
      </div>
      <div className={s.blockRight}>
      <iframe className={s.video} width="810" height="536" src="https://www.youtube.com/embed/sAvtcqwKGjU" title="Лысый Крокодил промо" frameBorder="0" allow="picture-in-picture;" allowFullScreen></iframe>
      <p className={s.videoText}>Видеоприглашение на концерты Лысый Крокодил в Москве и Санкт-Петербурге </p>
      </div>
      </div>
    </div>
  )
}

export default VideoBlock