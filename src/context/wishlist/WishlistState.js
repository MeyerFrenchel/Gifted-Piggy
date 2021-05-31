import { useReducer } from 'react';
import WishlistContext from './WishlistContext';
import WishlistReducer from './WishlistReducer'
import {SHOW_HIDE_WISHLIST, ADD_TO_WISHLIST, REMOVE_ITEM} from '../Types';

const WishlistState = ({children}) => {

        const initialState = {
            showWishlist: false,
            wishlistItems: []
        };

        const [state, dispatch] = useReducer(WishlistReducer, initialState);

        const addToWishlist = item => {
            dispatch({type: ADD_TO_WISHLIST, payload: item})
        }

        const showHideWishlist = () => {
            dispatch({type: SHOW_HIDE_WISHLIST})
        }

        const removeItem = id => {
            dispatch({type: REMOVE_ITEM, payload: id})
        }

    return(
        <WishlistContext.Provider value={{
            showWishlist: state.showWishlist,
            wishlistItems: state.wishlistItems,
            addToWishlist,
            showHideWishlist,
            removeItem
        }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistState;