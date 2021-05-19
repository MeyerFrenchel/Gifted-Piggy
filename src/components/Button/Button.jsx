import styled from 'styled-components';

import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background-image: linear-gradient(to right, #EECDA3 0%, #EF629F  51%, #EECDA3  100%);
    white-space: nowrap;
    padding: ${({big}) => (big ? '15px 32px' : '12px 30px')};
    color: white;
    font-size: ${({fontbig}) => (fontbig ? '20px' : '16px')};
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