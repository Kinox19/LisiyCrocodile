import React from 'react'
import s from './Oferta.module.scss'
import { useEffect } from 'react'

const Oferta = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.main}>
        <div className={s.main__container}>
            <h1 className={s.title}>договор об оплате</h1>
            <div className={s.text__container}>
                <p className={s.text}>Оформляя заказ на сайте, вы соглашаетесь с условиями договора, который предусматривает оплату посредством наличного расчёта. Передача денежных средств производится в полном объёме строго после получения товара и подписания передаточного акта между курьером и покупателем.</p>
                <p className={s.text}>Также при получении товара, с учётом фиксированной стоимости, покупателю доступен безналичный перевод денежных средствна счёт продавца.</p>
                <p className={s.text}>Сайт не предусматривает оплату товаров банковской картой в момент оформления заказа.</p>
            </div>
            <div className={s.text__container_mob}>
                <p className={s.text_mob}>Оформляя заказ на сайте,<br/> вы соглашаетесь с условиями договора, который предусматривает оплату посредством наличного расчёта. Передача денежных средств производится в полном объёме строго после получения товара и подписания передаточного акта между <br/> курьером и покупателем.</p>
                <p className={s.text_mob}>Также при получении товара, с учётом фиксированной стоимости, покупателю доступен безналичный перевод <br/> денежных средств на счёт продавца.</p>
                <p className={s.text_mob}>Сайт не предусматривает оплату товаров банковской картой в момент <br/> оформления заказа.</p>
            </div>
        </div>
    </div>

  )
}

export default Oferta