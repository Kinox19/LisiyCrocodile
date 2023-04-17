import React from 'react'
import s from './Merch.module.scss'
import addToCart from '../../assets/Logos/addToCart.svg'
import shirt from '../../assets/images/merch/blackShirt.png'
import leftBtn from '../../assets/Logos/IconLeft.svg'
import rigthBtn from '../../assets/Logos/IconRigth.svg'
import plus from '../../assets/Logos/plus.svg'
import minus from '../../assets/Logos/minus.svg'
import products from '../main/components/merchBlock/Products'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const Merch = () => {

    const { selectedProductId, setSelectedProductId } = useContext(AppContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    useEffect(() => {
      // Retrieve the selected product ID and product from localStorage
      const storedSelectedProductId = localStorage.getItem('selectedProductId');
      const storedSelectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
  
      // Set the selected product ID and product in the context
      if (storedSelectedProductId && storedSelectedProduct) {
        setSelectedProductId(Number(storedSelectedProductId));
        setSelectedProduct(storedSelectedProduct);
      }
    }, [setSelectedProductId]);
  
    useEffect(() => {
      // Find the selected product based on the selected product ID
      if (selectedProductId) {
        const product = products.find((product) => product.id === selectedProductId);
        setSelectedProduct(product);
  
        // Store the selected product in localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(product));
      }
    }, [selectedProductId]);
  
    const handleSelectProduct = (productId) => {
      // Set the selected product ID and product in localStorage
      const product = products.find((product) => product.id === productId);
      localStorage.setItem('selectedProductId', productId.toString());
      localStorage.setItem('selectedProduct', JSON.stringify(product));
  
      // Set the selected product ID in the context
      setSelectedProductId(productId);
    };

  return (
    <div className={s.main}>
        <div className={s.main__container}>
            <h1 className={s.title}>Мерч</h1>
            {selectedProduct && (
  <div className={s.product__selected}>
    <div className={s.product__image}>
      <div className={s.controls__image}>
        <button className={s.controls__btn}>
          <img src={leftBtn} alt="" />
        </button>
        <img src={selectedProduct.image} alt="" />
        <button className={s.controls__btn}>
          <img src={rigthBtn} alt="" />
        </button>

        <div className={s.product__imageDescription}>
          <div className={s.product__nameBrand}>
            <p className={s.product__name}>{selectedProduct.title}</p>
            <p className={s.product__brand}>{selectedProduct.brand}</p>
          </div>
          <div className={s.product__price}>
            <p className={s.price}>
              {new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
              }).format(selectedProduct.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className={s.product__info}>
      <h3 className={s.descriptionTitle}>Описание товара</h3>
      <div className={s.info__description}>
        <p className={s.description}>{selectedProduct.description}</p>
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
          <li>
            <div className={s.colorGreen}></div>
          </li>
          <li>
            <div className={s.colorWhite}></div>
          </li>
          <li>
            <div className={s.colorBlack}></div>
          </li>
          <li>
            <div className={s.colorGray}></div>
          </li>
          <li>
            <div className={s.colorRed}></div>
          </li>
        </ul>
      </div>
      <div className={s.product__counter}>
        <p className={s.quantityText}>Количество:</p>
        <div className={s.counter}>
          <button className={s.quantityButton}>
            <img src={plus} alt="+" />
          </button>
          <p className={s.product__quantities}>1x</p>
          <div className={s.minus}>
            <button className={s.quantityButton}>
              <img src={minus} alt="-" />
            </button>
          </div>
        </div>
      </div>
      <button className={s.button__addToCart}>
        <img src={addToCart} alt="" />
        Добавить в корзину
      </button>
    </div>
  </div>
)}

            <div>
                <ul className={s.merch__block}>
                {products.map((product) => (
                <li className={s.card}>
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
                </li>
                ))}
                </ul>
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