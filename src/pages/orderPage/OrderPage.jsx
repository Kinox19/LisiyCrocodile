
import React from 'react'
import s from './OrderPage.module.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { useCallback } from 'react';
import {useMemo} from 'react'
const OrderPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    const [total, setTotal] = useState(0);
  
    const handleClearLocalStorage = useCallback(() => {
      localStorage.clear();
      navigate('/home');
    }, []);
  
    const handleChange = useCallback((e) => {
      const { name, value } = e.target;
      console.log(`Updating ${name} to ${value}`);
      setFormValues(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }, []);
  
    const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
    });
  
    let formFilled = useMemo(
      () =>
        formValues.name &&
        formValues.email &&
        formValues.phone &&
        formValues.country &&
        formValues.city &&
        formValues.address,
      [formValues]
    );
  
    useEffect(() => {
      if (cartItems.length > 0) {
        const summ = cartItems.reduce(
          (total, { price, quantity }) => quantity * price + total,
          0
        );
        setTotal(summ);
      }
    }, [cartItems]);
  
    useEffect(() => {
      console.log(`Updating formFilled to ${formFilled}`);
    }, [formFilled]);
  
    useEffect(() => {
      return () => {
        handleClearLocalStorage();
      };
    }, [handleClearLocalStorage]);

    console.log(formFilled)

  return (
    <div className={s.main}>
        <div className={s.container}>
            <h1 className={s.page__title}>оформление заказа</h1>
            <div className={s.columns}>
                <div className={s.products}>
                    <ul>
                        <li>
            {cartItems && cartItems.length ?(
                cartItems.map((item) => (
                <div key={item.id} className={s.cart__item}>
                    <div className={s.item__info}>
                        <div className={s.item__description}>
                            <img className={s.item__image} src={item.image} alt=''/>
                            <div className={s.item__nameProperties}>
                                <p className={s.item__name}>{item.title}</p>
                                <div className={s.item__properties}>
                                    {item.size && item.size.length ?(
                                        <p className={s.item__size}>{item.size}</p>
                                    ):(
                                        <p style={{ display: 'none'  }}></p>
                                    )}
                                    <div className={s.item__color} style={{ backgroundColor: `${item.color}` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div>
                        <p className={s.item__quantity}>{item.quantity} шт.</p>
                    </div>
                      <div className={s.priceContainer}>
                        <p className={s.item__price}>
                            {new Intl.NumberFormat("ru-RU", {
                                style: "currency",
                                currency: "RUB",
                                minimumFractionDigits: 0,
                            }).format(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
            ))
            ):(
                <p>Корзина пуста</p>
            )}
                        </li>
                    </ul>
                    <div className={s.order__price}>
                        <p className={s.order__text}>Сумма заказа:</p>
                        <p className={s.finalPrice}>
                        {new Intl.NumberFormat("ru-RU", {
                            style: "currency",
                            currency: "RUB",
                            minimumFractionDigits: 0,
                        }).format(total)}
                    </p>
                    </div>
                </div>
                <div className={s.form__container}>
                    <p className={s.form__heading}>Заполните поля<br></br>для подтверждения заказа:</p>
                    <form className={s.inputs}>
                        <input className={s.input} name='name' type="text" required placeholder="ФИО:" onChange={handleChange} />
                        <input className={s.input} name='email' type="email" required placeholder="Электронная почта:" onChange={handleChange} />
                        <input className={s.input} name='phone' type="tel" required placeholder="Контактный телефон:" onChange={handleChange} />
                        <input className={s.input} name='country' type="text" required placeholder="Страна:" onChange={handleChange} />
                        <input className={s.input} name='city' type="text" required placeholder="Город:" onChange={handleChange} />
                        <input className={s.input} name='address' type="text" required placeholder="Адрес доставки:" onChange={handleChange} />
                        <button className={formFilled ? `${s.button__submit} ${s.button__submit_enabled}` : `${s.button__submit} ${s.button__submit_disabled}`}
                        type='submit'
                        disabled={!formFilled}
                        onClick={handleClearLocalStorage}>
                        <svg className={s.submitOrderSvg} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.81823 3.50315C5.55858 3.75927 3.74987 5.56787 3.48843 7.83474C2.78613 13.9242 2.78613 20.0758 3.48843 26.1653C3.74987 28.4321 5.55858 30.2407 7.81823 30.4968C13.6959 31.163 19.7765 31.163 25.6542 30.4968C27.9138 30.2407 29.7225 28.4321 29.984 26.1653C30.4886 21.7898 30.6306 17.3823 30.4101 12.9888C30.4044 12.8753 30.4462 12.7647 30.5254 12.6843L32.5764 10.6043C32.8138 10.3636 33.2194 10.5141 33.2446 10.8536C33.6317 16.0696 33.5254 21.3137 32.9256 26.5142C32.5014 30.1924 29.5893 33.073 25.9831 33.4818C19.8868 34.1727 13.5855 34.1727 7.48926 33.4818C3.88313 33.073 0.970989 30.1924 0.546776 26.5142C-0.182259 20.1929 -0.182258 13.8071 0.546776 7.48583C0.970989 3.80761 3.88313 0.926953 7.48926 0.518225C13.5855 -0.172742 19.8868 -0.172742 25.9831 0.518225C27.2532 0.66218 28.4372 1.11277 29.4567 1.79684C29.6574 1.93144 29.6773 2.21745 29.5072 2.38995L27.9219 3.9976C27.7922 4.1291 27.5911 4.15122 27.4295 4.06339C26.8896 3.77005 26.2897 3.57519 25.6542 3.50315C19.7765 2.83697 13.6959 2.83697 7.81823 3.50315Z" fill="#3A3A3A"/>
                            <path d="M34.5663 5.04668C35.1446 4.46021 35.1446 3.50935 34.5663 2.92288C33.988 2.3364 33.0503 2.3364 32.472 2.92288L15.7489 19.8821L10.8726 14.9369C10.2943 14.3505 9.35671 14.3505 8.7784 14.9369C8.2001 15.5234 8.2001 16.4743 8.7784 17.0607L14.7018 23.0678C15.2801 23.6542 16.2177 23.6542 16.7961 23.0678L34.5663 5.04668Z" fill="#3A3A3A"/>
                            </svg>Подтвердить заказ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default OrderPage
