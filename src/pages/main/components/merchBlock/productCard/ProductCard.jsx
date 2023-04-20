import React from 'react';
import s from './ProductCard.module.scss';
import buyIcon from '../../../../../assets/Logos/buy.svg';
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
        <img className={s.image} src={product.image} alt={product.title} />
        <div className={s.twoColumns}>
          <div className={s.leftColumn}>
            <h3 className={s.title}>{product.title}</h3>
            <p className={s.brand}>{product.brand}</p>
            <button className={s.button}>
              <img src={buyIcon} alt='' />Купить
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
