import React from 'react';
import s from './ProductCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { selectProduct } from '../../../../../redux/actions/selectProduct';
import { connect } from 'react-redux';

const ProductCard = ({ product, selectProduct }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    selectProduct(product);
    navigate('/merch');
  };
  
  return (
    <div className={s.product__link} onClick={() => handleClick(product)}>
      <div className={s.wrapper}>
        <img className={s.image} src={product.image} alt={product.title} title={product.title}/>
        <div className={s.twoColumns}>
          <div className={s.leftColumn}>
            <h3 className={s.title}>{product.title}</h3>
            <p className={s.brand}>{product.brand}</p>
            <button className={s.button}>


              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_1501_1748" fill="white">
                <path d="M0 9.043C0 8.53951 0.408161 8.13135 0.911654 8.13135H23.0883C23.5918 8.13135 24 8.53951 24 9.043V23.8069C24 26.123 22.1225 28.0005 19.8064 28.0005H4.19361C1.87754 28.0005 0 26.123 0 23.8069V9.043Z"/>
                </mask>
                  <path className={s.path} d="M0 9.043C0 8.53951 0.408161 8.13135 0.911654 8.13135H23.0883C23.5918 8.13135 24 8.53951 24 9.043V23.8069C24 26.123 22.1225 28.0005 19.8064 28.0005H4.19361C1.87754 28.0005 0 26.123 0 23.8069V9.043Z" fill="#BEFF00" stroke="#BEFF00" stroke-width="3.50636" mask="url(#path-1-inside-1_1501_1748)"/>
                  <path d="M6.0305 13C6.0305 8.5 5.21639 1 12 1" stroke="#BEFF00" stroke-width="1.75318"/>
                  <path d="M17.9695 13C17.9695 8.5 18.7836 1 12 1" stroke="#BEFF00" stroke-width="1.75318"/>
                </svg>
              Купить
            </button>
          </div>
          <p className={s.price}>
            {new Intl.NumberFormat('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              minimumFractionDigits: 0,
            }).format(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, { selectProduct }) (ProductCard)
