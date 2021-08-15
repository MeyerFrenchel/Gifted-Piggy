import React, { useContext } from 'react';
import WishlishItem from '../components/WishlistItem/WishlishItem';
import WishListContext from '../context/wishlist/WishlistContext';

const WishlistPage = () => {

    const {showWishlist, wishlistItems, showHideWishlist} = useContext(WishListContext);
console.log(showWishlist);
console.log(showHideWishlist);
    return (
        <>
          {showWishlist && (
            <div className='cart__wrapper'>
              <div style={{ textAlign: "right" }}>
                <i
                  style={{ cursor: "pointer" }}
                  className='fa fa-times-circle'
                  aria-hidden='true'
                  onClick={showHideWishlist}
                ></i>
              </div>
              <div className='cart__innerWrapper'>
                {wishlistItems.length === 0 ? (
                  <h4>Cart is Empty</h4>
                ) : (
                  <ul>
                    {wishlistItems.map((item) => (
                      <WishlishItem key={item.id} item={item} />
                    ))}
                  </ul>
                )}
              </div>
              <div className='Cart__cartTotal'>
                <div>Cart Total</div>
                <div></div>
                <div style={{ marginLeft: 5 }}>
                  {
                    wishlistItems.reduce((amount, item) => item.price + amount, 0)
                  }
                </div>
              </div>
            </div>
          )}
        </>
      );
};

export default WishlistPage;
