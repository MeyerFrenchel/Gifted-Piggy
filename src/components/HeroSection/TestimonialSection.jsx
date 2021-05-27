import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../Card/Card';

import { reviews } from '../reviewData';
import { ServicesContainer, ServicesMainTitle } from './ServicesSection-SC';
import styled from 'styled-components';

export const ReviewContainer = styled(ServicesContainer)`
    @media screen and (max-width: 768px) {
        height: 800px;
    }

    @media screen and (max-width: 480px) {
        height: 800px;
    }
    `;

    export const TestimonialCarousel = styled(Carousel)`
        @media screen and (max-width: 768px) {
    .rec-arrow-right, .rec-arrow-left{
        min-width: 30px;
        width: 30px;
        height: 35px;
        font-size: 0.7rem;
    }
}
    `

const TestimonialSection = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1600, itemsToShow: 4 },
    ];

    return (
        <ReviewContainer id='testimoniale'>
        <ServicesMainTitle>#testimoniale</ServicesMainTitle>
            <TestimonialCarousel breakPoints={breakPoints}>
            {reviews.map(review => (
                <Card key={review.id} review={review}/>
            ))}
            
            </TestimonialCarousel>
        </ReviewContainer>
    );
};

export default TestimonialSection;
