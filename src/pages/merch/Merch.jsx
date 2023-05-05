import React from 'react'
import s from './Merch.module.scss'
// import leftBtn from '../../assets/Logos/IconLeft.svg'
// import rigthBtn from '../../assets/Logos/IconRigth.svg'
import plus from '../../assets/Logos/plus.svg'
import minus from '../../assets/Logos/minus.svg'
import ScrollToTopButton from '../../shared/scrollTotopButton/ScrollToTopButton'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { selectProduct } from '../../redux/actions/selectProduct';
import { selectQuantity } from '../../redux/actions/selectQuantity';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from '../../redux/reducers/reducers'
import { useNavigate } from 'react-router-dom'
import {addToCart} from '../../redux/actions/addToCard'
import { selectSize } from '../../redux/actions/selectSize'
import { selectColor } from '../../redux/actions/selectColor'
import { selectImage } from '../../redux/actions/selectImage'

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const Merch = () => {
  const products = useSelector(state => state.products.products);
  const selectedProduct = useSelector(state => state.products.selectedProduct);
  const selectedSize = useSelector(state => state.products.selectedSize);
  const selectedColor = useSelector(state => state.products.selectedColor);
  const selectedQuantity = useSelector(state => state.products.selectedQuantity) || 1;
  const selectedImage = useSelector(state => state.products.selectedImage);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleClick = (product) => {
    dispatch(selectProduct(product));
    
    window.scrollTo(0, 0);
  };
  const [quantity, setQuantity] = useState(1);


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
    if (selectedProduct) {
      setSelectedProductColor(selectedProduct.colors[0].value);
      dispatch(selectColor(selectedProduct.colors[0].value));

      setColorForImage('black');
  
      if (selectedProduct.sizes && selectedProduct.sizes.length > 0) {
        setSelectedProductSize(selectedProduct.sizes[0]);
        dispatch(selectSize(selectedProduct.sizes[0]));
      }
    }
  }, [selectedProduct]);
  

  //
  const handlePlusQuantityChange = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(selectQuantity(quantity));
  };
  const handleMinusQuantityChange = () => {
    const newQuantity = quantity - 1 <= 0 ? 1 : quantity - 1;
    setQuantity(newQuantity);
    dispatch(selectQuantity(quantity));
  };
  
  const handleAddToCart = () => {
    const productToAdd = {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      image: colorImage,
    };
    console.log(colorImage);
    dispatch(addToCart(productToAdd));
    console.log(productToAdd)
    // navigate('/cart');
  };

  //работа над выбором цвета

  const [selectedProductColor, setSelectedProductColor] = useState(null);
  const [prevSelectedButton, setPrevSelectedButton] = useState(null);
  const [selectedProductSize, setSelectedProductSize] = useState(null)
  const [colorForImage, setColorForImage] = useState('black');
  const colorImage = selectedProduct && selectedProduct.image && selectedProduct.image.find(href => href.includes(colorForImage.toLowerCase()));
  // console.log(colorImage);
  // console.log(colorForImage)

  function handleColorClick(color, button) {
    setColorForImage(color.color);
    if (prevSelectedButton) {
      prevSelectedButton.classList.remove(s.selectedColor);
    }
    button.classList.add(s.selectedColor);
    setPrevSelectedButton(button);
    setSelectedProductColor(color.value);
    dispatch(selectColor(color.value));
    dispatch(selectImage(colorImage));
  }

  function handleSizeClick(size, button) {
    if (prevSelectedButton) {
      prevSelectedButton.classList.remove(s.selectedSize);
    }
    button.classList.add(s.selectedSize);
    setPrevSelectedButton(button);
    setSelectedProductSize(size);
    dispatch(selectSize(size));
  }
  //

  return (
    <div className={s.main}>
        <div className={s.main__container}>
            <h1 className={s.title}>Мерч</h1>
            {selectedProduct && (
  <div className={s.product__selected}>
    <div className={s.product__image}>
      <div className={s.controls__image}>
        <img className={s.selected__image} src={colorImage} alt={selectedProduct.title} title={selectedProduct.title} />
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
      <h3 className={s.descriptionTitle}>Описание товара:</h3>
      <div className={s.info__description}>
        <p className={s.description}>{selectedProduct.description}</p>
        {selectedProduct && selectedProduct.id && (
          <ul className={s.attachmentsList}>
            {selectedProduct.attachments.map((attachment) => (
              <li className={s.attachment} key={attachment.attachment}>
                <svg className={s.attachmentCheckMark}  viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7364 0.335966C15.0879 0.78392 15.0879 1.5102 14.7364 1.95815L6.3364 12.664C5.98492 13.112 5.41508 13.112 5.0636 12.664L0.263604 6.54639C-0.087868 6.09843 -0.087868 5.37216 0.263604 4.9242C0.615076 4.47625 1.18492 4.47625 1.5364 4.9242L5.7 10.2308L13.4636 0.335966C13.8151 -0.111989 14.3849 -0.111989 14.7364 0.335966Z" fill="#BEFF00"/>
                </svg>
                <span className={s.attachmentKey}>{attachment.attachment}</span><span className={s.attachmentValue}>{attachment.value}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={s.product__sizes}>
        <p className={s.selectSizetext}>Размер:</p>
        {selectedProduct && selectedProduct.sizes ?(
        <ul className={s.sizes}>
          {selectedProduct.sizes.map(size => (
                <li key={size} className={s.sizeContainer}>
                  <button
                    className={`${s.size} ${selectedProductSize === size ? s.selected__size : ''}`}
                    value={size}
                    onClick={e => handleSizeClick(size, e.currentTarget)}
                  >{size}</button>
                </li>
              ))}
        </ul>
        ): ( <p className={s.sizeNotValid}>—</p>
        )}
      </div>
      <div className={s.product__colors}>
        <p className={s.colorText}>Цвет:</p>
        <ul className={s.colorsList}>
          {selectedProduct.colors.map(color => (
              <li className={s.forFirstChild} key={color.value}>
                <div className={s.Div}>
                  <button
                    className={`${s.color} ${selectedProductColor === color.value ? s.selected__color : ''}`}
                    value={color.value}
                    onClick={e => handleColorClick(color, e.target)}
                    style={{ backgroundColor: color.value }}
                  />
                </div>
              </li>
              ))}
        </ul>
      </div>
      <div className={s.product__counter}>
        <p className={s.quantityText}>Количество:</p>
        <div className={s.counter}>
          <button className={s.quantityButton} onClick={handlePlusQuantityChange}>
            <img src={plus} alt="+" />
          </button>
          <p className={s.product__quantities}>{quantity} шт.</p>
          <div className={s.minus}>
            <button className={s.quantityButton} onClick={handleMinusQuantityChange}>
              <img src={minus} alt="-" />
            </button>
          </div>
        </div>
      </div>
      <button className={s.button__addToCart} onClick={handleAddToCart}>
      <svg className={s.addToCartSvg} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.9594 14C5.9594 13.317 6.53382 12.7633 7.24239 12.7633H13.217V7.00392C13.217 6.32089 13.7915 5.76718 14.5 5.76718C15.2086 5.76718 15.783 6.32089 15.783 7.00392V12.7633H21.7578C22.4663 12.7633 23.0407 13.317 23.0407 14C23.0407 14.683 22.4663 15.2367 21.7578 15.2367H15.783V20.996C15.783 21.6791 15.2086 22.2328 14.5 22.2328C13.7915 22.2328 13.217 21.6791 13.217 20.996V15.2367H7.24239C6.53382 15.2367 5.9594 14.683 5.9594 14Z" fill="#BEFF00"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48859 0.426774C11.7703 -0.142258 17.2297 -0.142258 22.5114 0.426774C25.6357 0.763373 28.1587 3.13568 28.5263 6.1648C29.1579 11.3705 29.1579 16.6295 28.5263 21.8352C28.1587 24.8643 25.6357 27.2366 22.5114 27.5732C17.2297 28.1423 11.7703 28.1423 6.48859 27.5732C3.36429 27.2366 0.841251 24.8643 0.473719 21.8352C-0.157906 16.6295 -0.157906 11.3705 0.473719 6.1648C0.841251 3.13568 3.36429 0.763373 6.48859 0.426774ZM22.2264 2.88495C17.1341 2.33633 11.8659 2.33633 6.7736 2.88495C4.81588 3.09587 3.24883 4.58531 3.02232 6.45214C2.41386 11.467 2.41386 16.533 3.02232 21.5479C3.24883 23.4147 4.81588 24.9041 6.7736 25.115C11.8659 25.6637 17.1341 25.6637 22.2264 25.115C24.1841 24.9041 25.7512 23.4147 25.9777 21.5479C26.5861 16.533 26.5861 11.467 25.9777 6.45214C25.7512 4.58531 24.1841 3.09587 22.2264 2.88495Z" fill="#BEFF00"/>
      </svg>
        Добавить в корзину
      </button>
    </div>
  </div>
)}
            <div>
                <p className={s.title__others}>Прочее</p>
                <ul className={s.merch__block}>
                {products.map((product) => (
                <li className={s.card} onClick={() => handleClick(product)}>
                    <div className={s.cardImage__holder}>
                        <img className={s.card__image} src={product.image} alt={product.title} title={product.title}/>
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
                <p className={s.text__attention}>Перед оформлением заказа рекомендуем ознакомиться с&nbsp;договором об&nbsp;оплате.</p>
                <Link to="/oferta"><button className={s.button__oferta}>Договор об оплате</button></Link>
            </div>
            {showScrollButton && <ScrollToTopButton />}
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.products.selectedProduct,
    selectedSize: state.products.selectedSize,
    selectedColor: state.products.selectedColor,
    products: state.products.products,
    cart: state.products.cart
  };
};

export default connect(mapStateToProps, { selectProduct })(Merch);
