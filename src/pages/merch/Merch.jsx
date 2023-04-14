import React from 'react'
import s from './Merch.module.scss'
import addToCart from '../../assets/Logos/addToCart.svg'
import shirt from '../../assets/images/merch/blackShirt.png'
import leftBtn from '../../assets/Logos/IconLeft.svg'
import rigthBtn from '../../assets/Logos/IconRigth.svg'
import plus from '../../assets/Logos/plus.svg'
import minus from '../../assets/Logos/minus.svg'
import products from '../main/components/merchBlock/Products'
import ProductCard from '../main/components/merchBlock/productCard/ProductCard'

const Merch = () => {
  return (
    <div className={s.main}>
        <div className={s.main__container}>
            <h1 className={s.title}>Мерч</h1>

            <div className={s.product__selected}>
                <div className={s.product__image}>
                    <div className={s.controls__image}>
                        <button className={s.controls__btn}><img src={leftBtn} alt=''/></button>
                        <img src={shirt} alt=''/>
                        <button className={s.controls__btn}><img src={rigthBtn} alt=''/></button>
                    </div>
                    <div className={s.product__imageDescription}>
                        <div className={s.product__nameBrand}>
                            <p className={s.product__name}>Футболка</p>
                            <p className={s.product__brand}>"Лысый крокодил"</p>
                        </div>
                        <div className={s.product__price}>
                            <p className={s.price}>1 650 ₽</p>
                        </div>
                    </div>
                </div>
                <div className={s.product__info}>
                    <h3 className={s.descriptionTitle}>Описание товара</h3>
                    <div className={s.info__description}>
                        <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={s.product__sizes}>
                        <p className={s.selectSizetext}>Размер:</p>
                        <ul className={s.sizes}>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                            <li>XLL</li>
                        </ul>
                    </div>
                    <div className={s.product__colors}>
                        <p className={s.colorText}>Цвет:</p>
                            <ul className={s.colorsList}>
                                <li><div className={s.colorGreen}></div></li>
                                <li><div className={s.colorWhite}></div></li>
                                <li><div className={s.colorBlack}></div></li>
                                <li><div className={s.colorGray}></div></li>
                                <li><div className={s.colorRed}></div></li>
                            </ul>
                    </div>
                    <div className={s.product__counter}>
                        <p className={s.quantityText}>Количество:</p>
                        <div className={s.counter}>
                          <button className={s.quantityButton}><img src={plus} alt='+'/></button>
                          <p className={s.product__quantities}>1x</p>
                          <div className={s.minus}>
                            <button className={s.quantityButton}><img src={minus} alt='-'/></button>
                          </div>
                        </div>
                    </div>
                    <button className={s.button__addToCart}><img src={addToCart} alt=''/>Добавить в корзину</button>
                </div>
            </div>
            <div>
                <div className={s.merch__block}>
                {products.map((product) => (
                <div className={s.card}>
                    <div>
                        <img className={s.card__image} src={product.image} alt={product.title}/>
                    </div>
                    <div className={s.descriptionCard}>
                        <div className={s.card__nameBrand}>
                            <p className={s.card__title}>{product.title}</p>
                            <p className={s.card__brand}>{product.brand}</p>
                        </div>
                        <div className={s.card__priceBlock}>
                            <p className={s.card__price}>
                                {new Intl.NumberFormat('ru-RU', {
                                style: 'currency',
                                currency: 'RUB',
                                minimumFractionDigits: 0
                            }).format(product.price)}
                            </p>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
            <div className={s.oferta}>
                <p className={s.text__attention}>Рыба. Тут о том, что оплата производится только при получении. Приглашение ознакомиться с условиями договора.</p>
                <button className={s.button__oferta}>Договор об оплате</button>
            </div>
        </div>
    </div>
  )
}

export default Merch