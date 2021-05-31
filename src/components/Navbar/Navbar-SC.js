import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: white;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        height: 80px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 120px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* margin-left: 25px; */
    text-decoration: none;
`;

export const LogoImg = styled.img`
    height: 100px;

    @media screen and (max-width: 768px) {
        height: 80px;
    }
`;

export const  MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 65%);
        font-size: 1.8rem;
        cursor: pointer;
        color: var(--clr-primary-4);
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: var(--clr-primary-1);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items:center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background-image: linear-gradient(to right, #EECDA3 0%, #EF629F  51%, #EECDA3  100%);
    /* background: var(--clr-primary-2); */
    white-space: nowrap;
    padding: 15px 32px;
    margin: 10px;
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
    background-size: 200% auto;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
        transform: translateY(-2px);
        box-shadow: 0 1rem 2rem rgb(0 0 0 / 15%);
    }
    &:active {
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    }
`;

export const WishlistLink = styled(LinkR)`
    align-self: center;
    position: relative;
    color: var(--clr-primary-3);
`;

export const ItemCountWrapper = styled.div`
        position: absolute;
    display: grid;
    place-items: center;
    background-color: var(--clr-primary-2);
    z-index: 10;
    border-radius: 50%;
    font-size: 10px;
    height: 14px;
    width: 14px;
    top: -30%;
    right: -50%;
`;

export const ItemCount = styled.span`
    color: var(--clr-primary-5);
    font-weight: 600;
`;