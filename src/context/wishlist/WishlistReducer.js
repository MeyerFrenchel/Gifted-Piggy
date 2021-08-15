import {
    SHOW_HIDE_WISHLIST,
    ADD_TO_WISHLIST,
    REMOVE_ITEM
} from '../Types';

const WishlistReducer = (state, action) => {
    switch (action.type) {
        case SHOW_HIDE_WISHLIST: {
            return {
                ...state,
                showWishlist: !state.showWishlist,
            };
        }
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                wishlistItems: [...state.wishlistItems, action.payload],
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter(
                    (item) =>
                    item.id !== action.payload
                ),
            };
        }

        default:
            return state;
    }
};

export default WishlistReducer;