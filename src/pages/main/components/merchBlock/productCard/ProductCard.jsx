import React from 'react'
import s from './ProductCard.module.scss'
import buyIcon from '../../../../../assets/Logos/buy.svg'


const ProductCard = ({product}) => {
  return (
    <a className={s.product__link} href='/'> 
    <div className={s.wrapper}>
        <img className={s.image} src={product.image} alt={product.title} />
        <div className={s.twoColumns}>
            <div className={s.leftColumn}>
                <h3 className={s.title}>{product.title}</h3>
                <p className={s.brand}>{product.brand}</p>
                <button className={s.button}><img src={buyIcon} alt=''/>Купить</button>
            </div>
            <p className={s.price}>{new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0
            }).format(product.price)}</p>
        </div>
    </div>
    </a>
  )
}

export default ProductCard