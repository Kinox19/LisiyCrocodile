import React from 'react'
import s from './Cart.module.scss'
import plus from '../../assets/Logos/plus.svg'
import minus from '../../assets/Logos/minus.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectQuantity } from '../../redux/actions/selectQuantity'
import { useSelector } from 'react-redux'
import { deleteItem } from '../../redux/actions/deleteItem'
import { useNavigate } from 'react-router-dom'


const Cart = ({cartItems}) => {

    const navigate = useNavigate();
    let quantity = useSelector((state) => state.products.quantity);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(null);
 
    const handlePlusQuantityChange = (item) => {
      item.quantity += 1;
      console.log(item.quantity);
      dispatch(selectQuantity(item.quantity));
    };
    const handleMinusQuantityChange = (item) => {
      const newQuantity = item.quantity - 1 <= 0 ? 1 : item.quantity - 1;
      item.quantity = newQuantity;
      dispatch(selectQuantity(item.quantity));
    };
   
    const handleItemDelete = (id, size, color) => {
        dispatch(deleteItem(id, size, color));
      };

      useEffect(() => {
        console.log(cartItems);
      }, [cartItems]);

      useEffect(() => {
        let summ = cartItems.reduce(
          (total, { price, quantity }) => quantity * price + total,
          0
        );
   
        setTotal(summ);
      }, [cartItems]);

      const handleProceed = () => {
        navigate('/order', { state: { cartItems } })
      }

  return (
    <div className={s.main}>
        <div className={s.main__container}>
            <h1 className={s.heading}>корзина</h1>
            <div className={s.cart__output}>
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
                        <div className={s.item__quantity}>
                                <button className={s.quantityButton} onClick={() => handlePlusQuantityChange(item)}>
                                <img src={plus} alt="+" />
                                </button>
                                <p className={s.product__quantities}>{item.quantity}x</p>
                                <div className={s.minus}>
                                <button className={s.quantityButton} onClick={()=>handleMinusQuantityChange(item)}>
                                <img src={minus} alt="-" />
                                </button>
                                </div>
                        </div>
                    </div>
                    <div className={s.item__priceDelete}>
                        <p className={s.item__price}>
                            {new Intl.NumberFormat("ru-RU", {
                                style: "currency",
                                currency: "RUB",
                                minimumFractionDigits: 0,
                            }).format(item.price * item.quantity)}
                        </p>
                        <button className={s.item__delete} onClick={() => handleItemDelete(item.id, item.size, item.color)}>
                            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1126_1544)">
                            <path d="M23.2505 33.9926H6.75046C5.25046 33.9926 3.87549 32.6653 3.87549 30.94V6.25391H26.0005V30.94C26.0005 32.6653 24.7505 33.9926 23.2505 33.9926Z" stroke="#81886E" stroke-width="2.51131" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M1.62451 6.30078H28.3745" stroke="#81886E" stroke-width="2.73529" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M20 5.72714H10V4.93535C10 3.08784 11.4474 1.63623 13.2895 1.63623H16.5789C18.4211 1.63623 19.8684 3.08784 19.8684 4.93535V5.72714H20Z" stroke="#81886E" stroke-width="2.51131" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M11.6665 11.2969V28.9488" stroke="#81886E" stroke-width="2.51131" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M18.3335 11.2969V28.9488" stroke="#81886E" stroke-width="2.51131" stroke-miterlimit="10" stroke-linecap="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1126_1544">
                            <rect width="30" height="36" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            ))
            ):(
                <p className={s.empty__text}>Корзина пуста.</p>
            )}
            </div>
            <div className={s.cart__makeOrder}>
                {cartItems && cartItems.length ?(
                    <button className={s.proceed} onClick={handleProceed}>Перейти к оформлению</button>
                ):(
                    <button className={s.btn__disabled} disabled>Перейти к оформлению</button>
                )}
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
        </div>
    </div>
  )
}
const mapStateToProps = state => {
    return {
      cartItems: state.products.cart
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      deleteItem: (itemId) => {
        dispatch(deleteItem(itemId))

      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);
