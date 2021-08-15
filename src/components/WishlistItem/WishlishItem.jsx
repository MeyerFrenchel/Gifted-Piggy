import React, { useContext } from 'react';
import  WishlistContext from '../../context/wishlist/WishlistContext';

const WishlishItem = ({ item }) => {
    const { removeItem } = useContext(WishlistContext)
    return (
        <li className='CartItem__item'>
      <img src={item.imageUrl} alt='' />
      <div>
        {item.name} {item.price}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
    );
};

export default WishlishItem;
