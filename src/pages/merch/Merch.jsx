import React from 'react'
import s from './Merch.module.scss'
import addToCart from '../../assets/Logos/addToCart.svg'
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
  const [selectedSize, setSelectedSize] = useState('S');
  const [activeColor, setActiveColor] = useState('black');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const storedSelectedProductId = localStorage.getItem('selectedProductId');
    const storedSelectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (storedSelectedProductId && storedSelectedProduct) {
      setSelectedProductId(Number(storedSelectedProductId));
      setSelectedProduct(storedSelectedProduct);
    }
  }, [setSelectedProductId]);

  useEffect(() => {
    if (selectedProductId) {
      const product = products.find((product) => product.id === selectedProductId);
      setSelectedProduct(product);
      localStorage.setItem('selectedProductId', selectedProductId);
      localStorage.setItem('selectedProduct', JSON.stringify(product));
    }
  }, [selectedProductId]);

  useEffect(() => {
    const storedSelectedSize = localStorage.getItem('selectedSize');
    if (storedSelectedSize) {
      setSelectedSize(storedSelectedSize);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedSize', selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    const storedActiveColor = localStorage.getItem('activeColor');
    if (storedActiveColor) {
      setActiveColor(storedActiveColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeColor', activeColor);
  }, [activeColor]);

  useEffect(() => {
    const storedQuantity = localStorage.getItem('quantity');
    if (storedQuantity) {
      setQuantity(Number(storedQuantity));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quantity', quantity);
  }, [quantity]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handlePlusQuantityChange = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleMinusQuantityChange = () => {
    const newQuantity = quantity - 1 <= 0 ? 1 : quantity - 1;
    setQuantity(newQuantity);
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
        <img className={s.selected__image} src={selectedProduct.image} alt="" />
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
          <li><button className={`${s.size} ${selectedSize === 'S' ? s.selected__size : ''}`} onClick={() => handleSizeClick('S')}>S</button></li>
          <li><button className={`${s.size} ${selectedSize === 'M' ? s.selected__size : ''}`} onClick={() => handleSizeClick('M')}>M</button></li>
          <li><button className={`${s.size} ${selectedSize === 'L' ? s.selected__size : ''}`} onClick={() => handleSizeClick('L')}>L</button></li>
          <li><button className={`${s.size} ${selectedSize === 'XL' ? s.selected__size : ''}`} onClick={() => handleSizeClick('XL')}>XL</button></li>
          <li><button className={`${s.size} ${selectedSize === 'XXL' ? s.selected__size : ''}`} onClick={() => handleSizeClick('XXL')}>XXL</button></li>
        </ul>
      </div>
      <div className={s.product__colors}>
        <p className={s.colorText}>Цвет:</p>
        <ul className={s.colorsList}>
          <li>
            <button className={`${s.color} ${activeColor === 'black' ? s.selected__color : ''}`} onClick={() => handleColorClick('black')}> <div className={s.colorBlack}></div></button>
          </li>
          <li>
            <button className={`${s.color} ${activeColor === 'white' ? s.selected__color : ''}`} onClick={() => handleColorClick('white')}> <div className={s.colorWhite}></div></button>
          </li>
          <li>
            <button className={`${s.color} ${activeColor === 'gray' ? s.selected__color : ''}`} onClick={() => handleColorClick('gray')}> <div className={s.colorGray}></div></button>
          </li>
          <li>
            <button className={`${s.color} ${activeColor === 'green' ? s.selected__color : ''}`} onClick={() => handleColorClick('green')}> <div className={s.colorGreen}></div></button>
          </li>
          <li>
            <button className={`${s.color} ${activeColor === 'red' ? s.selected__color : ''}`} onClick={() => handleColorClick('red')}> <div className={s.colorRed}></div></button>
          </li>
        </ul>
      </div>

      <div className={s.product__counter}>
        <p className={s.quantityText}>Количество:</p>
        <div className={s.counter}>
          <button className={s.quantityButton} onClick={handlePlusQuantityChange}>
            <img src={plus} alt="+" />
          </button>
          <p className={s.product__quantities}>{quantity}x</p>
          <div className={s.minus}>
            <button className={s.quantityButton} onClick={handleMinusQuantityChange}>
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