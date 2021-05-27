import styled from 'styled-components';
import img from '../../assets/Colored Patterns.svg'; 
export const ServicesContainer = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        height: 1200px;
    }

    @media screen and (max-width: 480px) {
        height: 1400px;
    }
`;
export const ServicesWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    background-image: url(${img});
    background-color: var(--clr-primary-2);
    background-position: 5% 62%;

    @media screen and (max-width: 1000px) {
        grid-template-columns:  1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns:  1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 360px;
    padding: 30px;
    box-shadow: 0 10x 30x rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 300px;
    width: 300px;
    margin-bottom: 10px;
`;

export const ServicesMainTitle = styled.h1`
    font-size: 2.5rem;
    color: var(--clr-primary-5);
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesSecondaryTitle = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--clr-primary-4);
`;

export const ServicesText = styled.p`
    font-size: 1rem;
    text-align: center;
    color: var(--clr-primary-1);
`;