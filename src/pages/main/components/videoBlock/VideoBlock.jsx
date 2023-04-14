import React from 'react'
import s from './VideoBlock.module.scss'

const VideoBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.blockLeft}>
        <h2 className={s.title}>Видео</h2>
        <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <iframe className={s.video} width="950" height="536" src="https://www.youtube.com/embed/IgckLVMxxDw?controls=0" title="Lisiy Crocks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

      </iframe>
    </div>
  )
}

export default VideoBlock