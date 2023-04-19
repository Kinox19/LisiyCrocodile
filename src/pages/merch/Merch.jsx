import React from 'react'
import s from './Merch.module.scss'
import leftBtn from '../../assets/Logos/IconLeft.svg'
import rigthBtn from '../../assets/Logos/IconRigth.svg'
import plus from '../../assets/Logos/plus.svg'
import minus from '../../assets/Logos/minus.svg'
import products from '../main/components/merchBlock/Products'
import ScrollToTopButton from '../../shared/scrollTotopButton/ScrollToTopButton'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Merch = () => {
  const { selectedProductId, setSelectedProductId } = useContext(AppContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [activeColor, setActiveColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(AppContext);



  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500 ) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const handleAddToCart = (product) => {
    addToCart(product);
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

      <button className={s.button__addToCart} onClick={() => handleAddToCart(selectedProduct)}>
      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.9594 14C5.9594 13.317 6.53382 12.7633 7.24239 12.7633H13.217V7.00392C13.217 6.32089 13.7915 5.76718 14.5 5.76718C15.2086 5.76718 15.783 6.32089 15.783 7.00392V12.7633H21.7578C22.4663 12.7633 23.0407 13.317 23.0407 14C23.0407 14.683 22.4663 15.2367 21.7578 15.2367H15.783V20.996C15.783 21.6791 15.2086 22.2328 14.5 22.2328C13.7915 22.2328 13.217 21.6791 13.217 20.996V15.2367H7.24239C6.53382 15.2367 5.9594 14.683 5.9594 14Z" fill="#BEFF00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48859 0.426774C11.7703 -0.142258 17.2297 -0.142258 22.5114 0.426774C25.6357 0.763373 28.1587 3.13568 28.5263 6.1648C29.1579 11.3705 29.1579 16.6295 28.5263 21.8352C28.1587 24.8643 25.6357 27.2366 22.5114 27.5732C17.2297 28.1423 11.7703 28.1423 6.48859 27.5732C3.36429 27.2366 0.841251 24.8643 0.473719 21.8352C-0.157906 16.6295 -0.157906 11.3705 0.473719 6.1648C0.841251 3.13568 3.36429 0.763373 6.48859 0.426774ZM22.2264 2.88495C17.1341 2.33633 11.8659 2.33633 6.7736 2.88495C4.81588 3.09587 3.24883 4.58531 3.02232 6.45214C2.41386 11.467 2.41386 16.533 3.02232 21.5479C3.24883 23.4147 4.81588 24.9041 6.7736 25.115C11.8659 25.6637 17.1341 25.6637 22.2264 25.115C24.1841 24.9041 25.7512 23.4147 25.9777 21.5479C26.5861 16.533 26.5861 11.467 25.9777 6.45214C25.7512 4.58531 24.1841 3.09587 22.2264 2.88495Z" fill="#BEFF00"/>
      </svg>
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

                <Link to="/oferta"><button className={s.button__oferta}>Договор об оплате</button></Link>
            </div>
            {showScrollButton && <ScrollToTopButton />}
        </div>
    </div>
  )
}


export default Merch