import React from 'react'
import s from './MerchBlock.module.scss'
import products from '../../../../Products'
import { useState } from 'react'
import ProductCard from './productCard/ProductCard'
import { useEffect, useCallback } from 'react'

const MerchBlock = () => {
  const [position, setPosition] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 500) {
      setVisibleProducts([products[position]]);
    } else if (screenWidth <= 768) {
      setVisibleProducts([
        products[(position) % products.length],
        products[(position + 1) % products.length],
      ]);
    } else if (screenWidth > 900) {
      setVisibleProducts([
        products[(position) % products.length],
        products[(position + 1) % products.length],
        products[(position + 2) % products.length],
      ]);
    }
  }, [position]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [position, handleResize]);

  const handlePrevClick = () => {
    const newPosition = position - 1 < 0 ? products.length - 1 : position - 1;
    setPosition(newPosition);
  };

  const handleNextClick = () => {
    const newPosition = position + 1 >= products.length ? 0 : position + 1;
    setPosition(newPosition);
  };

  return (
    <div className={s.main} id='merch'>
      <h2 className={s.title}>Мерч</h2>
      <div className={s.merch__block}>
        <div className={s.buttonWrapper}>
          <button className={s.buttonChange} onClick={handlePrevClick}>
            <svg className={s.arrow} viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7644 26.2683C12.0866 27.0938 10.9877 27.0938 10.31 26.2683L1.05376 14.9946C0.375989 14.1691 0.375989 12.8308 1.05376 12.0053L10.31 0.731573C10.9877 -0.0939238 12.0866 -0.0939237 12.7644 0.731573C13.4421 1.55707 13.4421 2.89546 12.7644 3.72096L4.73539 13.4999L12.7644 23.2789C13.4421 24.1044 13.4421 25.4428 12.7644 26.2683Z" fill="#BEFF00"/>
            </svg>
          </button>
        </div>
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        <div className={s.buttonWrapper}>
          <button className={s.buttonChange} onClick={handleNextClick}>
            <svg className={s.arrow} viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23538 0.731671C1.91315 -0.093825 3.01203 -0.0938249 3.6898 0.731672L12.946 12.0054C13.6238 12.8309 13.6238 14.1692 12.946 14.9947L3.68979 26.2684C3.01202 27.0939 1.91314 27.0939 1.23537 26.2684C0.557604 25.4429 0.557604 24.1045 1.23537 23.279L9.26437 13.5L1.23538 3.72106C0.557608 2.89556 0.557608 1.55717 1.23538 0.731671Z" fill="#BEFF00"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MerchBlock
