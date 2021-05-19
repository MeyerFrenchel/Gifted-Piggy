import React from 'react';
import {FaBars} from 'react-icons/fa';
import {LogoImg, Nav, NavContainer, NavLogo, MobileIcon, NavLinks, NavItem, NavMenu, NavBtn, NavBtnLink} from './Navbar-SC';
import LogoPic from '../../assets/Copy of THE GIFTED PIGGY.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <LogoImg src={LogoPic} alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='produse'>
                            Produse
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>
                            About
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
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;
