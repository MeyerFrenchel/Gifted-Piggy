import React from 'react';
import { Button } from '../Button/Button';
import LandImage from '../../assets/piggy-01.svg';
import {
    InfoContainer, 
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './HeroSection-SC';


const HeroSection = ({colorBg, imgStart, topLine, headline, description, buttonLabel, alt, id}) => {
    return (
        <>
            <InfoContainer colorBg={colorBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading>{headline}</Heading>
                        <Subtitle>{description}</Subtitle>
                        <BtnWrap>
                        <Button to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={LandImage} alt={alt}/>
                </ImgWrap>
                </Column2>
                </InfoRow>
            </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default HeroSection;
