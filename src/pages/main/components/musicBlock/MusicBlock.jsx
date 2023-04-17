import React from 'react'
import s from './MusicBlock.module.scss'
import cover1 from '../../../../assets/images/mainPage/covers/back1.png'
import cover2 from '../../../../assets/images/mainPage/covers/back2.png'
import cover3 from '../../../../assets/images/mainPage/covers/back3.png'
import cover4 from '../../../../assets/images/mainPage/covers/back4.png'

const MusicBlock = () => {
  return (
    <div className={s.music__block} id='music'>
      <h2 className={s.title}>музыка</h2>
      <div className={s.columns}>
        <div className={s.leftSide}>
          <a href='/muz1'>
            <img className={s.mus__link} src={cover1} alt=''></img>
          </a>
          <a href='/muz3'>
            <img className={s.mus__link} src={cover3} alt=''></img>
          </a>
        </div>

        <div className={s.rigthSide}>
          <a href='/muz2'>
            <img className={s.mus__link} src={cover2} alt=''></img>
          </a>
          <a href='/muz4'>
          <img className={s.mus__link} src={cover4} alt=''></img>
          </a>
        </div>
      </div>

    </div>
  )
}

export default MusicBlock