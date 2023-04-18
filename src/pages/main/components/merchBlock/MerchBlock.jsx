import React from 'react'
import s from './MerchBlock.module.scss'
import products from './Products'
import { useState } from 'react'
import ProductCard from './productCard/ProductCard'
import leftBtn from '../../../../assets/Logos/IconLeft.svg'
import rigthBtn from '../../../../assets/Logos/IconRigth.svg'
import { Link } from 'react-router-dom'

const MerchBlock = () => {

  const [position, setPosition] = useState(0);

  const handlePrevClick = () => {
    const newPosition = position - 1 < 0 ? products.length - 1 : position - 1;
    setPosition(newPosition);
  };

  const handleNextClick = () => {
    const newPosition = position + 1 >= products.length ? 0 : position + 1;
    setPosition(newPosition);
  };

  const visibleProducts = [
    products[(position - 1 + products.length) % products.length],
    products[position],
    products[(position + 1) % products.length],
  ];


  return (
    <div className={s.main} id='merch'>
      <h2 className={s.title}>Мерч</h2>
      <div className={s.merch__block}>
        <button className={s.buttonChange} onClick={handlePrevClick}><img src={leftBtn} alt=''/></button>
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        <button className={s.buttonChange} onClick={handleNextClick}><img src={rigthBtn} alt=''/></button>
      </div>
    </div>
  )
}

export default MerchBlock
