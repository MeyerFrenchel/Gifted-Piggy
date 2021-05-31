import React, { useState, useContext } from 'react';

import products from '../../productsData';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
  } from './Shop-SC';
import WishlistContext from '../../context/wishlist/WishlistContext';

const Shop = () => {
    const  { addToWishlist } = useContext(WishlistContext);
    
    return (
        <ProductsContainer>
        <ProductsHeading>Produse</ProductsHeading>
        <ProductWrapper>
          {products.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.imageUrl} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  
                  <ProductPrice >{product.price}lei</ProductPrice>
                  <ProductButton to="#" onClick={() => addToWishlist(product)}>
                    <i className="far fa-heart"></i>
                  </ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    );
};

export default Shop;
