import React from 'react'
import s from './NotFoundPage.module.scss'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className={s.container}>
        <h1 className={s.error}>404</h1>
        <p className={s.text}>Вот и приехали... Данная страница не найдена.<br></br>Но не расстраивайтесь, у нас есть и другие!</p>
        <p className={s.textMob}>Вот и приехали... Данная страница не найдена. Но не расстраивайтесь,<br/> у нас есть и другие!</p>
        <Link to="/home">
        <button className={s.button}>На главную</button>
        </Link>
    </div>
  )
}

export default NotFoundPage