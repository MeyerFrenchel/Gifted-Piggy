import React, { useContext } from 'react';
import {FaBars} from 'react-icons/fa';
import {LogoImg, Nav, NavContainer, NavLogo, MobileIcon, NavLinks, NavItem, NavMenu, NavBtn, NavBtnLink, WishlistLink, ItemCount, ItemCountWrapper} from './Navbar-SC';
import LogoPic from '../../assets/Copy of THE GIFTED PIGGY.png';
import WishlistContext from '../../context/wishlist/WishlistContext';

const Navbar = ({ toggle }) => {
    const {wishlistItems, showWishlist} = useContext(WishlistContext);
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                        <LogoImg src={LogoPic} alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='despremine'>
                            Despre Mine
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='produse'>
                            Produse
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='servicii'>
                            Servicii
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='testimoniale'>
                            Testimoniale
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">
                        Contact
                        </NavBtnLink>
                    </NavBtn>
                    <WishlistLink to="/wishlist">
                    <i className="fas fa-heart" 
                    
                    onClick={showWishlist}></i>
                    {wishlistItems.length > 0 && (
                        <ItemCountWrapper>
                        <ItemCount>{wishlistItems.length}</ItemCount>
                  </ItemCountWrapper>
                    )}
                    
                    </WishlistLink>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;
