import React from 'react'
import s from './ProductCard.module.scss'
import buyIcon from '../../../../../assets/Logos/buy.svg'
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {

  const handleClick = (id) => {

  };

  return (
    <Link to={`/merch/${product.id}`} className={s.product__link}>
      <div className={s.wrapper} onClick={() => handleClick(product.id)} >
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
    </Link>
  )
}

export default ProductCard