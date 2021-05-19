import React from 'react';
import { Container } from '../../globalStyles';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
  } from './InfoSection-SC';
import LandingPageImg from '../../assets/piggy-01.svg';
import { Button } from '../Button/Button';

const InfoSection = () => {
    return (
    <>
    <InfoSec >
    <Container>
      <InfoRow >
        <InfoColumn>
          <TextWrapper>
            <TopLine >#GiftShop</TopLine>
            <Heading >“Yesterday is history, tomorrow is a mystery , but today is a gift, which is why we call it the present.”</Heading>
            <Subtitle>Cadouri artizanale, personalizate si facute cu dragoste pentru cei dragi!</Subtitle>
            <Button to='shop' big='true' fontbig='true'>Shop here</Button>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <ImgWrapper >
            <Img src={LandingPageImg} alt='image' />
          </ImgWrapper>
        </InfoColumn>
      </InfoRow>
    </Container>
  </InfoSec>
    </>
    );
};

export default InfoSection;
