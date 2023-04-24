import React from 'react'
import s from './VideoBlock.module.scss'

const VideoBlock = () => {
  return (
    <div className={s.container} id='video'>
      <div className={s.blockLeft}>
        <h2 className={s.title}>Видео</h2>
        <p className={s.text}>Мы&nbsp;шагнули на&nbsp;этот лёд. 26-го июля в&nbsp;Питере и&nbsp;28-го в&nbsp;Москве, в&nbsp;поддержку альбома &laquo;Стройматериалы&raquo; состоится долгожданный дебют Крокодила в&nbsp;столицах Необъятной. <br/> Пленных не&nbsp;берём&nbsp;&mdash; расстрел на&nbsp;месте. <br/> Приятного аппетита.</p>
      </div>
      <iframe className={s.video} width="810" height="536" src="https://www.youtube.com/embed/IgckLVMxxDw?controls=0" title="Lisiy Crocks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

      </iframe>
    </div>
  )
}

export default VideoBlock