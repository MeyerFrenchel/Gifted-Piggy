import React from 'react';
import styled from 'styled-components';
import { ServicesCard, ServicesIcon, ServicesWrapper } from '../HeroSection/ServicesSection-SC';


export const CardWrapper = styled.div`
    width: 100%;
    height: 200px;
    background: #333;
    color: red;
    font-size: 20px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
    export const Reviwerer = styled.h1`
    color: var(--clr-primary-1);
    font-size: 28px;
    margin-bottom: 20px;
    `;
    export const UserIcon = styled(ServicesIcon)`
    height: 90px;
    width: 90px;
    `
    export const UserCard = styled(ServicesCard)`
        max-height: 650px;
    `;
    export const UserComment = styled.p`
    font-family: 'Indie Flower', cursive;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #777;
    background: var(--clr-primary-2);

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
    `;
    export const Quotes = styled.span`
    font-size: 35px;
    color: var(--clr-primary-4);
    `;

const Card = ({review}) => {
    
    return (
        
        <UserCard>
        <UserIcon src={require(`../../assets/pigUsers/pig${review.id}.png`).default}></UserIcon>
        <Reviwerer>{review.name}</Reviwerer>
        <UserComment>" {review.text} "</UserComment>
    </UserCard>
    
    );
};

export default Card;
